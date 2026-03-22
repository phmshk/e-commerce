"use client";

import { useMemo, useState, useTransition } from "react";
import { CategoryLayoutType, CategoryType } from "../../model/types";
import { CategoryCard } from "./CategoryCard";
import { CategoryAdminPanel } from "./CategoryAdminPanel";
import { DragDropProvider } from "@dnd-kit/react";
import { isSortable } from "@dnd-kit/react/sortable";
import { updateCategoriesLayout } from "../../api/actions";
import { toast } from "sonner";

interface CategoryGridProps {
  initialCategories: CategoryType[];
}

export const CategoryGrid = ({ initialCategories }: CategoryGridProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [categories, setCategories] = useState(initialCategories);
  const [isPending, startTransition] = useTransition();

  const hasChanges = useMemo(() => {
    const currentMap = categories.map((c) => `${c.category_id}-${c.layout}`);
    const initialMap = initialCategories.map(
      (c) => `${c.category_id}-${c.layout}`,
    );

    const isOrderChanged =
      JSON.stringify(categories.map((c) => c.category_id)) !==
      JSON.stringify(initialCategories.map((c) => c.category_id));

    const isLayoutChanged =
      JSON.stringify(currentMap) !== JSON.stringify(initialMap);

    return isOrderChanged || isLayoutChanged;
  }, [categories, initialCategories]);

  const handleSave = async () => {
    const payload = categories.map((cat, index) => ({
      category_id: cat.category_id,
      order: index + 1,
      layout: cat.layout,
    }));
    startTransition(async () => {
      const result = await updateCategoriesLayout(payload);

      if (result.success) {
        setIsEditing(false);
        toast.success("Categories layout updated successfully!");
      } else {
        toast.error(result.error);
        console.error(result.error);
      }
    });
  };

  const handleLayoutChange = (id: string, newLayout: CategoryLayoutType) => {
    setCategories((current) =>
      current.map((cat) =>
        cat.category_id === id ? { ...cat, layout: newLayout } : cat,
      ),
    );
  };

  if (!initialCategories || initialCategories.length === 0) {
    return (
      <div className="flex w-full items-center justify-center rounded-2xl border border-dashed border-muted-foreground/25 p-12">
        <p className="text-muted-foreground">No categories found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <CategoryAdminPanel
        isEditing={isEditing}
        onEditToggle={() => {
          setIsEditing(!isEditing);
          if (isEditing) setCategories(initialCategories);
        }}
        onSave={handleSave}
        hasChanges={hasChanges}
        isPending={isPending}
      />
      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;

          const { source } = event.operation;

          if (isSortable(source)) {
            const { initialIndex, index } = source;

            if (initialIndex !== index) {
              setCategories((items) => {
                const newItems = [...items];
                const [removed] = newItems.splice(initialIndex, 1);
                newItems.splice(index, 0, removed);
                return newItems;
              });
            }
          }
        }}
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 lg:gap-6 xl:grid-cols-12 grid-flow-dense">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.category_id}
              category={category}
              isEditing={isEditing}
              index={index}
              onLayoutChange={handleLayoutChange}
            />
          ))}
        </div>
      </DragDropProvider>
    </div>
  );
};

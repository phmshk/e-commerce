"use client";

import { cn } from "@/src/shared/lib/utils/utils";
import { Button } from "@/src/shared/ui/button"; // Предполагается использование shadcn/ui
import { Edit2, Check, LayoutGrid, Loader2, X } from "lucide-react";

interface CategoryAdminPanelProps {
  isEditing: boolean;
  onEditToggle: () => void;
  onSave: () => void;
  hasChanges: boolean;
  isPending?: boolean;
}

export const CategoryAdminPanel = (props: CategoryAdminPanelProps) => {
  const { isEditing, onEditToggle, onSave, hasChanges, isPending } = props;
  return (
    <div
      className={cn(
        "mb-8 flex flex-col justify-between gap-4 rounded-xl border border-border/50 bg-background/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 sm:flex-row sm:items-center",
        isEditing && "border-primary/20 bg-primary/5 shadow-md",
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <LayoutGrid className="size-5" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold tracking-tight sm:text-base">
            Categories arrangement
          </h3>
          <p className="text-xs text-muted-foreground transition-opacity">
            {isEditing
              ? "Drag and drop the cards to change their order or adjust sizes."
              : "Press the rearrange button to change the cards layout."}
          </p>
        </div>
      </div>

      <div className="flex w-full items-center gap-3 sm:w-auto">
        {!isEditing ? (
          <Button
            onClick={onEditToggle}
            variant="outline"
            className="w-full gap-2 shadow-sm transition-all hover:bg-muted sm:w-auto"
          >
            <Edit2 className="size-4" />
            Rearrange
          </Button>
        ) : (
          <>
            <Button
              onClick={onEditToggle}
              variant="ghost"
              className="w-full gap-2 sm:w-auto"
              disabled={isPending}
            >
              <X className="size-4" />
              Cancel
            </Button>
            <Button
              onClick={onSave}
              variant="default"
              className="w-full gap-2 bg-success text-white shadow-sm transition-all hover:bg-success/90 sm:w-auto"
              disabled={!hasChanges || isPending}
            >
              {isPending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Check className="size-4" />
              )}
              {isPending ? "Saving..." : "Save changes"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

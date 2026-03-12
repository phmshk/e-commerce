import { ChevronDown, CircleUser } from "lucide-react";

export const Profile = () => {
  return (
    <div className="ml-6 p-2 flex flex-1 justify-end items-center gap-2">
      <CircleUser className="min-w-10 size-10" />
      <p className="hidden xl:block cursor-pointer p-2 text-base">Username</p>
      <button className="hidden xl:block cursor-pointer p-2">
        <ChevronDown className="size-6" />
      </button>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { SidebarItem } from "./sidebar-item";

import { Plus } from "lucide-react";

export const Sidebar = () => {
    return (
        <div className="flex h-full w-[256px] fixed top-0 left-0 px-4 mt-[80px] border-r-2 flex-col overflow-y-auto">
            <div className="my-2 text-lg text-green-600 font-extrabold tracking-wide">
                Questions
            </div>
            <SidebarItem title="hello" />
            <SidebarItem title="world" />
            <SidebarItem title="hello" />
            <SidebarItem title="world" />
            <SidebarItem title="hello" />
            <SidebarItem title="world" />

            <SidebarItem title="hello" />
            <SidebarItem title="world" />
            <Button variant="secondary" className="mt-2 text-lg tracking-wide cursor-pointer">
                <Plus className="mr-2" />
                Question</Button>
            {/* spacer div */}
            <div className="mt-40"></div>
        </div>
    );
};


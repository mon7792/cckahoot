"use client";

import { cn } from "@/lib/utils";
import { useCreateHoots } from "@/store/use-create-hoots";
import { Trash2 } from "lucide-react";

type Props = {
    id: string;
    title: string;
    active?: boolean;
    disabled?: boolean;
}

export const SidebarItem = ({ id, title, disabled=false,active = false }: Props) => {
    const { deleteQuestion, setActiveQuestion } = useCreateHoots();
    title = title.trim().length > 10 ? title.trim().slice(0, 10) + "..." : title.trim();
    return (
        <div className={cn("flex flex-row justify-between h-30 mb-4 p-4 rounded-lg shadow-sm shadow-slate text-xl",
            active ? "border-green-500 border-4" : "text-slate-400"
        )}
            onClick={() => setActiveQuestion(id)}
        >
            {title}
            {!disabled && <Trash2 className="mx-2 text-slate-400 hover:text-red-500 cursor-pointer" onClick={() => deleteQuestion(id)} />}
        </div>
    );
};


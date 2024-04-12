"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Option } from "./option";


type option = {
    type: "triangle" | "circle" | "square" | "diamond";
    answer: string;
    isCorrect: boolean;
}

type hhoots = {
    question: string;
    options: option[];
}

const defHhoots: hhoots = {
    question: "",
    options: [
        { type: "triangle", answer: "", isCorrect: false },
        { type: "circle", answer: "", isCorrect: false },
        { type: "square", answer: "", isCorrect: false },
        { type: "diamond", answer: "", isCorrect: false },
    ]
}

const Page = () => {
    const [hoots, setHoots] = useState<hhoots>(defHhoots);

    const setOption = (value: string, type: "triangle" | "circle" | "square" | "diamond") => {
        const newOptions = hoots.options.map((option) => {
            if (option.type === type) {
                return { ...option, answer: value };
            }
            return option;
        });
        console.log(newOptions);    
        setHoots({ ...hoots, options: newOptions });
    }

    return (
        <div className="flex flex-col items-center pt-8">
            {/* input */}
            <div>
                <input className="h-20 min-w-[calc(100vh-48px)] placeholder-green-400 px-20 rounded-lg text-green-500 text-2xl font-bold
            shadow-lg shadow-slate "  placeholder="click to start typing your question"
                    onChange={(e) => setHoots({ ...hoots, question: e.target.value, options: hoots?.options || [] })}
                />
            </div>
            {/* options */}
            <div className="flex">
                <div className="grid grid-cols-2 pt-8 w-100 gap-2">
                    <Option type="triangle" imageSrc="/triangle.svg" imageAlt="triangle" color="bg-red-500" placeholder="Add answer 1." setOption={setOption} />
                    <Option type="circle" imageSrc="/circle.svg" imageAlt="circle" color="bg-blue-500" placeholder="Add answer 2." setOption={setOption} />
                    <Option type="square" imageSrc="/square.svg" imageAlt="square" color="bg-green-500" placeholder="Add answer 3.(optional)" setOption={setOption} />
                    <Option type="diamond" imageSrc="/diamond.svg" imageAlt="diamond" color="bg-yellow-500" placeholder="Add answer 4.(optional)" setOption={setOption} />
                </div>
            </div>

            <div className="pt-8">
                <Button size="lg" variant="secondary" className="text-lg cursor-pointer" onClick={() => console.log(hoots)}>
                    <Plus />
                    
                    Add</Button>
            </div>

        </div>
    );
}

export default Page;
"use client";

import { useCreateHoots } from "@/store/use-create-hoots";
import { Question } from "./question";

const Page = () => {
    const {setQuestionTitle, addQuestion, title,questions, activeQuestionId,setActiveQuestion, setOptions, setCheckedOption} = useCreateHoots();
    return (
        <div className="flex flex-col">
            <Question id={activeQuestionId} setTitle={setQuestionTitle} setOption={setOptions} setChecked={setCheckedOption}/>
        </div>
    );
}

export default Page;
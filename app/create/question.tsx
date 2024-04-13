import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Option } from "./option";
import { useCreateHoots } from "@/store/use-create-hoots";


type Props = {
    id: string;
    setTitle: (id: string, title: string) => void;
    setOption: (id: string, type: "triangle" | "circle" | "square" | "diamond", value: string, isCorrect: boolean) => void;
    setChecked: (id: string, type: "triangle" | "circle" | "square" | "diamond", isChecked: boolean) => void;
};


export const Question = ({ id, setTitle, setOption, setChecked }: Props) => {
    const { questions } = useCreateHoots();

    const question = questions.find((question) => question.id === id);

    const getOptionValue = (type: "triangle" | "circle" | "square" | "diamond") => {
        const option = question?.options.find((option) => option.type === type);
        return [option?.answer || "", option?.isCorrect || false];
    }

    return (
        <div className="flex flex-col items-center pt-8">
            {/* input */}
            <div>
                <input className="h-20 min-w-[calc(100vh-48px)] placeholder-green-400 px-20 rounded-lg text-green-500 text-2xl font-bold
            shadow-lg shadow-slate "  placeholder="start typing your question"
                    value={question?.title || ""}
                    onChange={(e) => setTitle(id, e.target.value)}
                />
            </div>
            {/* options */}
            <div className="flex">
                <div className="grid grid-cols-2 pt-8 w-100 gap-2">
                    <Option type="triangle" value={getOptionValue("triangle")[0] as string} imageSrc="/triangle.svg" imageAlt="triangle" color="bg-red-500" placeholder="Add answer 1." questionId={id} setOption={setOption} isChecked={getOptionValue("triangle")[1] as boolean} setChecked={setChecked}/>
                    <Option type="circle" value={getOptionValue("circle")[0] as string} imageSrc="/circle.svg" imageAlt="circle" color="bg-blue-500" placeholder="Add answer 2." questionId={id} setOption={setOption} isChecked={getOptionValue("circle")[1] as boolean} setChecked={setChecked} />
                    <Option type="square" value={getOptionValue("square")[0] as string} imageSrc="/square.svg" imageAlt="square" color="bg-green-500" placeholder="Add answer 3.(optional)" questionId={id} setOption={setOption} isChecked={getOptionValue("square")[1] as boolean} setChecked={setChecked} />
                    <Option type="diamond" value={getOptionValue("diamond")[0] as string} imageSrc="/diamond.svg" imageAlt="diamond" color="bg-yellow-500" placeholder="Add answer 4.(optional)" questionId={id} setOption={setOption} isChecked={getOptionValue("diamond")[1] as boolean} setChecked={setChecked} />
                </div>
            </div>


            <div className="ml-[600px]">
                <Button variant="secondary" className="mt-2 text-lg tracking-wide cursor-pointer">
                    <Plus className="mr-2" />
                    Question</Button>
            </div>

        </div>
    );
} 
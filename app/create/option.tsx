import { cn } from "@/lib/utils";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox"


type Props = {
    type: "triangle" | "circle" | "square" | "diamond";
    imageSrc: string;
    imageAlt: string;
    color: string;
    placeholder: string;
    questionId: string;
    setOption: (id: string, type: "triangle" | "circle" | "square" | "diamond", value: string, isCorrect: boolean) => void;
    setChecked: (id: string, type: "triangle" | "circle" | "square" | "diamond", isChecked: boolean) => void;
    value: string;
    isChecked: boolean;
}

export const Option = ({ imageSrc, imageAlt, color, placeholder, questionId, type, setOption, value, isChecked, setChecked }: Props) => {
    return (
        <div className="flex flex-row rounded-xl shadow-lg shadow-slate">
            <div className={cn("flex bg-red-500 rounded-xl items-center justify-center w-[60px] m-2", color)}>
                <Image src={imageSrc} width={45} height={45} alt={imageAlt} />
            </div>

            <div className="flex rounded-xl flex-col items-end">
                <Checkbox className="h-4 w-4 mr-2 mt-2" checked={isChecked} onCheckedChange={(checked)=> checked && setChecked(questionId, type, checked.valueOf() as boolean)} />
                <input className="h-20 min-w-80 text-xl font-bold rounded-xl mt-2" placeholder={placeholder} onChange={(e) => setOption(questionId, type, e.target.value, isChecked)}  value={value}/>
            </div>
        </div>
    );
}

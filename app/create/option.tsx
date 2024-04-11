import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    type: "triangle" | "circle" | "square" | "diamond";
    imageSrc: string;
    imageAlt: string;
    color: string;
    placeholder: string;
    setOption: (value: string, type: "triangle" | "circle" | "square" | "diamond") => void;
}

export const Option = ({ imageSrc, imageAlt, color, placeholder, type, setOption }: Props) => {
    return (
        <div className="flex flex-row rounded-xl shadow-lg shadow-slate">
            <div className={cn("flex bg-red-500 rounded-xl items-center justify-center w-[60px] m-2", color)}>
                <Image src={imageSrc} width={45} height={45} alt={imageAlt} />
            </div>

            <div className="flex rounded-xl items-center">
                <input className="h-20 min-w-80 text-xl font-bold rounded-xl" placeholder={placeholder} onChange={(e) => setOption(e.target.value, type)} />
            </div>
        </div>
    );
}

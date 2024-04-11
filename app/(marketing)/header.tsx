import Image from "next/image";
import Link from "next/link";

import { PlayIcon } from "lucide-react";

import { Button } from "@/components/ui/button"
export const Header = () => {

    return (<header className="h-20 w-full border-b-2 border-slate-200 px-4 content-center">
        <div className="flex flex-row items-center justify-between">
            {/* logo */}
            <div className="flex flex-row items-center">
                <Image src="/heart.svg" alt="HedgeHoots Logo" className="mr-2" width={40} height={40} />
                <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">HedgeHoots!</h1>
            </div>


            {/* nav */}
            <div className="flex flex-row items-center gap-1">
                <Link href="/create">
                    <Button variant="secondary" className="text-lg text-white tracking-wide">
                        <PlayIcon className="mr-2 text-white" />
                        Play</Button>
                </Link>
            </div>
        </div>
    </header>)
}
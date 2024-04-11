import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (<footer className="h-10 w-full border-t-2 border-slate-200 px-4 content-center">
        <div className="flex flex-col items-center">
            <div className="flex flex-row items-center">
                Made with<Image src="/heart.svg" alt="HedgeHoots Logo" className="mx-2" width={20} height={20} />by
                <Link href="https://github.com/mon7792/cckahoot" className="ml-2 text-lg font-extrabold text-green-600 tracking-wide">HedgeHoots</Link>
            </div>
        </div>
    </footer>)
}
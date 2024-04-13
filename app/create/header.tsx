"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClerkLoaded, ClerkLoading, SignedIn, UserButton, SignInButton, SignedOut } from "@clerk/nextjs";
import { Loader, ChevronRight, Pencil, BadgeX, Save } from "lucide-react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useCreateHoots } from "@/store/use-create-hoots";
export const Header = () => {

    const {title, setTitle} = useCreateHoots();
    const [edit, setEdit] = useState(false);


    const handleTitle = () => {
        if (title.trim() === "") {
            setTitle("Untitled");
        }
        setEdit(false);
    }

    return (<header className="z-[10] h-20 w-full border-b-2 border-slate-200 px-4 content-center bg-white">
        <div className="flex flex-row items-center justify-between">
            {/* logo */}
            <div className="flex flex-row items-center">
                <Image src="/heart.svg" alt="HedgeHoots Logo" className="mr-2" width={40} height={40} />
                <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">HedgeHoots!</h1>
                <ChevronRight className="text-green-600 font-extrabold" />
                {/* TODO: add the validation before we save */}
                {edit ?
                    (<Input value={title} onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleTitle()}
                        className="text-green-600 font-bold w-40 h-10 border-2 border-green-600 rounded-lg px-2"
                    />
                    )
                    : (
                        <div className="flex flex-row items-center">
                            <h2 className="text-xl font-extrabold text-green-600">{title} </h2>
                            <Pencil onClick={() => setEdit(true)} className="text-green-600 mx-2" />
                        </div>
                    )
                }
            </div>


            {/* nav */}
            <div className="flex flex-row items-center gap-1">
                <Link href="/">
                    <Button variant="dangerOutline" className="text-lg tracking-wide">
                        <BadgeX className="mr-2" />
                        Exit</Button>
                </Link>


                {/* TODO: add the link to save the hoots */}
                <Button variant="secondary" className="text-lg text-white tracking-wide">
                    <Save className="mr-2 text-white" />
                    Done</Button>


                {/* user button/ login */}
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className="border-[5px] border-green-600 rounded-3xl">
                            <UserButton afterSignOutUrl="/" />
                        </div>

                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                            mode="modal"
                            afterSignInUrl="/"
                            afterSignUpUrl="/"
                        >
                            <Button variant="ghost" size="lg" className="text-lg">Login</Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </div>
    </header>)
}
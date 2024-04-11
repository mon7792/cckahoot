import Image from "next/image";
import Link from "next/link";
import { Pickaxe } from "lucide-react";

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <Image src="/kwizzard.svg" alt="HedgeHoots Logo" width={100} height={100} />
      <h1 className="text-5xl font-bold text-green-500">Make learning awesome!</h1>
      <h3 className="text-3xl font-bold text-green-500">Engage your audience</h3>
      <Link href="/create" className="pt-4">
        <Button variant="secondary" className="text-lg text-white tracking-wide">
        <Pickaxe className="mr-2" />
          Create</Button>
      </Link>
    </div>
  );
}

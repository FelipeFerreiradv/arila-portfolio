import { ChevronDown, FolderOpen } from "lucide-react";
import Link from "next/link";

const Summary = () => {
  return (
    <section className="relative flex h-[800px] w-full justify-center gap-14 overflow-hidden bg-black py-28">
      <div className="flex">
        <div className="text-muted-foreground flex h-8 w-8 items-center justify-center rounded-full border text-xs">
          1
        </div>
        <div className="flex h-64 flex-col items-center justify-center gap-0">
          <FolderOpen className="h-44 w-44 font-light text-white" />
          <p className="text-muted-foreground text-[15px] font-bold italic">
            blabla
          </p>
        </div>
      </div>
      <div className="mt-28 flex h-64 items-end">
        <div className="flex flex-col items-center justify-center gap-0">
          <FolderOpen className="h-44 w-44 font-light text-white" />
          <p className="text-muted-foreground text-[15px] font-bold italic">
            blabla
          </p>
        </div>
        <div className="text-muted-foreground flex h-8 w-8 items-center justify-center rounded-full border text-xs">
          2
        </div>
      </div>
      <div className="flex h-64 items-center gap-6">
        <div className="text-muted-foreground flex h-8 w-8 items-center justify-center rounded-full border text-xs">
          3
        </div>
        <div className="flex flex-col items-center justify-center gap-0">
          <FolderOpen className="h-44 w-44 font-light text-white" />
          <p className="text-muted-foreground text-[15px] font-bold italic">
            blabla
          </p>
        </div>
      </div>
      <div className="mt-28 flex h-64 items-end">
        <div className="flex flex-col items-center justify-center gap-0">
          <FolderOpen className="h-44 w-44 font-light text-white" />
          <p className="text-muted-foreground text-[15px] font-bold italic">
            blabla
          </p>
        </div>
        <div className="text-muted-foreground flex h-8 w-8 items-center justify-center rounded-full border text-xs">
          2
        </div>
      </div>
      <div className="flex h-64 items-center gap-6">
        <div className="text-muted-foreground flex h-8 w-8 items-center justify-center rounded-full border text-xs">
          3
        </div>
        <div className="flex flex-col items-center justify-center gap-0">
          <FolderOpen className="h-44 w-44 font-light text-white" />
          <p className="text-muted-foreground text-[15px] font-bold italic">
            blabla
          </p>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-6">
        <p className="text-muted-foreground text-[15px]">
          SCROLL TO VIEW MY PROJECTS
        </p>
        <Link href="#about">
          <ChevronDown className="text-muted-foreground h-20 w-20" />
        </Link>
      </div>
    </section>
  );
};

export default Summary;

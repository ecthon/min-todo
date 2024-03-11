import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";


export default function Home() {
  return (
    <div className="flex flex-col w-[816px] h-screen mx-auto mt-10">
      <header className="flex w-[604px] gap-5 items-center">
        <div className="flex w-[80px] h-[80px] items-center justify-center bg-zinc-800">
          <span className="font-bold text-4xl text-white">11</span>
        </div>
        <div className="flex flex-col gap-0">
          <p className="font-bold text-4xl text-zinc-800">MAR</p>
          <p className="">Segunda-feira, 2024</p>
        </div>
      </header>

      <Separator className="mt-10 w-[604px]"/>

      <div className="flex items-center justify-between w-[604px] mt-10">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer"><EllipsisVertical /></DropdownMenuTrigger>
          <DropdownMenuContent className="flex items-center gap-1">
            <DropdownMenuItem className="flex gap-2 cursor-pointer"><Pencil size={18}/></DropdownMenuItem>
            <Separator orientation="vertical" className="h-4 dark:bg-white/10 bg-black/10"/>
            <DropdownMenuItem className="flex gap-2 cursor-pointer"><Trash2 size={18}/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </div>
  );
}

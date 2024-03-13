'use client'
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  taskTitle: z.string().min(2)
})


export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskTitle: "",
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div className="flex flex-col w-[604px] h-screen mx-auto mt-10">
      <header className="flex w-[604px] gap-5 items-center">
        <div className="flex w-[80px] h-[80px] items-center justify-center bg-zinc-800">
          <span className="font-bold text-4xl text-white">11</span>
        </div>
        <div className="flex flex-col gap-0">
          <p className="font-bold text-4xl text-zinc-800">MAR</p>
          <p className="">Segunda-feira, 2024</p>
        </div>
      </header>

      <Separator className="my-10 w-[604px]"/>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-cente">
        <FormField
          control={form.control}
          name="taskTitle"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Adicionar nova tarefa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>

      <div className="flex items-center justify-between w-[604px] py-2">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-center cursor-pointer w-8 h-8 hover:bg-zinc-900/5 rounded-md"><EllipsisVertical size={16}/></DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="flex items-center gap-1">
            <DropdownMenuItem className="flex gap-2 cursor-pointer"><Pencil size={18}/></DropdownMenuItem>
            <Separator orientation="vertical" className="h-4 dark:bg-white/10 bg-black/10"/>
            <DropdownMenuItem className="flex gap-2 cursor-pointer hover:bg-rose-500/10 hover:text-rose-500"><Trash2 size={18}/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

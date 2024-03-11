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
    </div>
  );
}

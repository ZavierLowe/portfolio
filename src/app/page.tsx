import Image from "next/image";
import img from "../../public/images/headshotme.jpg"
import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto">

      <div className="bg-gray w-1/2 h-[400px] rounded-lg p-8 shadow-2xl border border-tertiary mt-4">
      <div className="flex">

        <div>

      <h1 className="text-6xl font-bold font-display">Zavier Lowe</h1>
      <h2 className="text-2xl text-white">Frontend Engineer and UI Designer</h2>
      <h3>I build  visually stunning solutions and focus on results-driven designs</h3>
      <p>Back in 2019 is when I discovered my love for desing and development where I could look into the places and</p>
        <div className="flex mt-4 gap-x-8">

        <span>Github</span>
        <p>Twitter</p>
        <p>Linkedin</p>
        <p>Instagram</p>
        <p>TikTok</p>
        </div>

        </div>

        <div className=" ">
          <Image
          className="rounded-full"
          src={img}
          width={186}
          height={192}
          alt="Headshot"
          />
        </div>

      </div>
      </div>
    </main>
  );
}

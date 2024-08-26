import Image from "next/image";
import img from "../../public/images/headshotme.jpg"
import { Icons } from "@/components/icons"
import  ProjectCard  from "@/components/projectCard";

export default function Home() {
  return (
		<main className="flex flex-col items-center justify-between mx-auto ">
			<div className="bg-gray w-1/2 h-[400px] rounded-lg p-8 shadow-2xl border border-tertiary mt-4 mb-20">
				<div className="flex">
					<div className="w-1/2">
						<h1 className="text-6xl font-bold font-display">Zavier Lowe</h1>
						<h2 className="text-2xl text-white">
							Frontend Engineer and UI Designer
						</h2>
						<h3>
							I build visually stunning solutions and focus on results-driven
							designs
						</h3>
						<p>
							Back in 2019 is when i discovered my love for design and
							development. After attending both a design and development
							bootcamp here I am ready to help solve design problems and create
							the best user experience for people.
						</p>
						<div className="flex mt-4 gap-x-8 font-sans tracking-widest">
							<span>Github</span>
							<p>Twitter</p>
							<p>Linkedin</p>
							<p>Instagram</p>
							<p>TikTok</p>
						</div>
					</div>

					<div className="w-1/2  ">
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

      <ProjectCard/>
		</main>
	);
}

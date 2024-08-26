import React from 'react'
import Image from 'next/image'
import Chips from './chips'
import Button from './button'

import DXC from "../../public/images/DXC-Prod.png"

const projectCard = () => {
  return (
		<div className="bg-gray w-[570px] p-8 rounded-lg shadow-2xl border border-tertiary">
			<Image className="rounded-md" src={DXC} />

			<h4>Frontend Engineer · DXC Productions</h4>
			<div className="flex gap-x-5">
				<Chips className="">UX Design</Chips>
				<Chips>Frontend Development</Chips>
				<Chips>Webflow</Chips>
			</div>
			<p className='font-sans font-normal tracking-wide'>
				{" "}
				I built and maintained a portfolio website for a videographer to help
				her showcase the work she’s done
			</p>
            <Button>Visit Website</Button>
		</div>
	);
}

export default projectCard

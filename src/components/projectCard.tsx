import React from 'react'
import Image from 'next/image'
import Chips from './chips'
import Button from './button'

import DXC from "../../public/images/DXC-Prod.png"

const projectCard = () => {
  return (
		<div className="bg-gray w-[570px] h-[676px] p-6 rounded-lg shadow-2xl border border-tertiary">
			<Image className="rounded-md" src={DXC} alt="DXC-Productions" />
			<div className="flex align-center align-text-top">
				<span className="mt-4 text-2xl">
					Frontend Engineer <span className='inline-block'> · </span> DXC Productions
                   
				</span>
			</div>
			<div className="flex gap-x-5 mt-4">
				<Chips className="">UX Design</Chips>
				<Chips>Frontend Development</Chips>
				<Chips>Webflow</Chips>
			</div>
			<p className="font-sans font-normal tracking-wide mt-4 text-wrap max-w-sm">
				I built and maintained a portfolio website for a videographer to help
				her showcase the work she’s done
			</p>
			<div className="mt-16">
				<Button clasName="mt-8"> Visit Website</Button>
			</div>
		</div>
	);
}

export default projectCard

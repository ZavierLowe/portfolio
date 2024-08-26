import React from 'react'

export default function button({children}:any){
  return (
		<>
			<a
				target="blank_"
				href="https://www.thedxcproductions.com/"
				className="flex w-fit items-center justify-center gap-x-2 mt-2 bg-primary border-2 border-secondary text-secondary px-4 py-2 rounded-md font-semibold text-base tracking-wide hover:bg-secondary hover:text-gray">
				{children}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 20"
					fill="currentColor"
					className="inline-block h-6 w-6  transition-transform "
					aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
						clip-rule="evenodd"></path>
				</svg>
			</a>
		</>
	);
}


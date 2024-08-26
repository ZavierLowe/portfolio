import React, { Children, ReactElement } from 'react'

const chips = ({children}:any) => {
  return (
		<>
			<span className="bg-[#2E2F2D] p-2 rounded-md text-sm font-display font-semibold tracking-wider">
				{children}
				
			</span>
		</>
	);
}

export default chips

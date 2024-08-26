import React from 'react'

export default function button({children}:any){
  return (
    <>
    <button className='bg-primary border-2 border-secondary text-secondary px-4 py-2 rounded-md font-semibold text-base tracking-wide'>
        {children}
    </button>
    </>
      
    
  )
}


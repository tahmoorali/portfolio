import React from 'react'

export default function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
        <div className='flex gap-5 text-6xl sm:text-3xl'>
            <h1 className='T text-secondary font-mono font-extrabold'>T</h1>
            <h1 className='A text-tertiary font-mono font-extrabold'>A</h1>
            <h1 className='Y text-slate-700 font-mono font-extrabold'>Y</h1>
        </div>
    </div>
  )
}

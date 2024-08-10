import React from 'react'

export default function SectionTitle({
    title,
}) {
  return (
    <div className='flex items-center gap-10 py-10'>
    <h1 className='text-3xl text-tertiary font-thin font-serif'>{title}</h1>
    <div className='flex w-60 h-[1px] bg-tertiary'></div>
  </div>
  )
}

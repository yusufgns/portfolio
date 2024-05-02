import React from 'react'

export default function CardContainer({ item }: {
  item: {
    mission: string;
    date: string;
    title: string;
    description: string;
  }
}) {
  return (
    <>
      <div className='flex items-center justify-between'>
        <h2>{item.title}</h2>
        <p className='text-sm opacity-60'>
          <span>{item.date}</span>
        </p>
      </div>
      <h2 className='text-sm'>{item.mission}</h2>
      <h2 className='text-sm text-[#4F4F4F]'>
        {item.description}
      </h2>
    </>
  )
}

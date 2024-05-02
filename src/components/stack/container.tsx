import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function StackContainer({ item }: {
    item: {
        image: string;
        title: string;
        description: string;
        href: string;
    }
}) {
    return (
        <Link href={item.href} target='_blank' className='w-full border border-[#2B2B2B] border-opacity-45 hover:border-[#2B2B2B] hover:shadow-[#2B2B2B] hover:shadow-md duration-300 rounded-xl h-[104px] gap-4 p-6 flex items-center'>
            <Image src={item.image} alt='Next.js' width={64} height={64} className='w-16 h-16 rounded-xl' />
            <div>
                <h1 className='font-medium'>
                    {item.title}
                </h1>
                <p className='font-extralight text-sm opacity-60'>
                    {item.description}
                </p>
            </div>
        </Link>
    )
}

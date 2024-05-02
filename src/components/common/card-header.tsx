import React from 'react'
import Image from 'next/image';

export default function CardHeader({ src, alt, children, headline = "" }: {
    src?: string | undefined;
    alt?: string | undefined;
    children: React.ReactNode;
    headline?: string;
}) {
    return (
        <div className='w-full border-t rounded-xl border-[#2B2B2B] from-[#2b2b2b] bg-gradient-radial to-[rgb(43, 43, 43)] '>
            <div className='rounded-xl border border-[#2B2B2B] p-6 space-y-1 select-none'>
                {(src && alt) && (
                    <Image
                        src={src}
                        alt={alt}
                        className='w-full rounded-xl mb-6 h-[240px]'
                        width={400}
                        height={200}
                    />
                )}
                {children}
            </div>
        </div>
    )
}

import React from 'react'

export default function layout({ children, headline = "" }: {
    children: React.ReactNode;
    headline?: string;
}) {
    return (
        <div className='w-full border-t rounded-xl border-[#2B2B2B]'>
            {headline?.length > 0 && (
                <h5 className='px-6 py-3 text-sm opacity-60'>
                    {headline}
                </h5>
            )}
            <span className='space-y-4 from-[#2b2b2b] bg-gradient-radial to-[rgb(43, 43, 43)]'>
                {children}
            </span>
        </div>
    )
}

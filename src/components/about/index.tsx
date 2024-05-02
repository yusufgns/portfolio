'use client'
import Link from 'next/link'
import React from 'react'
import { Linkedin } from 'lucide-react';
import { X } from 'lucide-react';
import { useRef } from 'react';
import { useHover } from "@/hooks/use-hoover"

export default function About() {
    const elementXRef: any = useRef()
    const hoveredXIcon = useHover(elementXRef)

    const elementLinkedinRef: any = useRef()
    const hoveredLinkedinIcon = useHover(elementLinkedinRef)

    return (
        <div className='w-full rounded-2xl p-6 gap-6 flex flex-col bg-gradient-radial to-[rgb(43, 43, 43)] border border-[#2B2B2B] from-[#2b2b2b]'>
            <div className='flex items-center w-full justify-between'>
                <div className='w-16 h-16 rounded-xl bg-red-400'></div>
                <div className='flex items-center gap-2'>
                    <Link href='https://twitter.com/gunesyusuf0' target='_blank' className='p-2 border rounded-lg border-[#2B2B2B] hover:bg-[#2B2B2B] duration-300' ref={elementXRef}>
                        <X size={18} opacity={hoveredXIcon ? 1 : 0.5} />
                    </Link>

                    <Link href='https://www.linkedin.com/in/yusufgunes/' target='_blank' className='p-2 border rounded-lg border-[#2B2B2B] hover:bg-[#2B2B2B] duration-300' ref={elementLinkedinRef}>
                        <Linkedin size={18} opacity={hoveredLinkedinIcon ? 1 : 0.5} />
                    </Link>
                </div>
            </div>
            <div>
                <h2>Hi. I&apos;m Yusuf</h2>
                <p className='text-sm text-[#4F4F4F]'>
                    I&apos;m a software engineer with a passion for building web applications. I&apos;m currently learning React and Next.js to build modern web applications.
                </p>
            </div>
        </div>
    )
}

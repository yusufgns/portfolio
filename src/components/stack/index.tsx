import React from 'react'
import Layout from "@/components/common/layout"
import StackContainer from "./container"

const ExperienceDummy = [
    {
        image: "/icon/figma.svg",
        title: "Figma",
        description: "Design meaningful products",
        href: "https://figma.com"
    },
    {
        image: "",
        title: "Next.js",
        description: "Build modern web applications",
        href: "https://nextjs.org"
    },
    {
        image: "",
        title: "Tailwind CSS",
        description: "Design without stress",
        href: "https://tailwindcss.com"
    }
]

export default function Stack() {
    return (
        <div className='space-y-3'>
            <Layout headline='Stack'>
                {ExperienceDummy.map((item) => (
                    <StackContainer key={item.title} item={item} />
                ))}

                <div className='w-full py-3 border border-[#2B2B2B] border-opacity-45 text-sm hover:border-[#2B2B2B] text-center rounded-xl'>
                    See more on my all stack
                </div>
            </Layout>
        </div>
    )
}

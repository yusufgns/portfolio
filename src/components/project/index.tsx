import React from 'react'
import CardHeader from "@/components/common/card-header"
import Layout from "@/components/common/layout"
import CardContainer from '../common/card-container'

const ExperienceDummy = [
    {
        src: "/experience/wordigo_seo_banner.png",
        alt: "Wordigo",
        mission: "Frontend Developer",
        date: "09.2023 - 01.2024",
        title: "Wordigo APP",
        description: "I'm a software engineer with a passion for building web applications. I'm currently learning React and Next.js to build modern web applications."
    },
]

export default function Project() {
    return (
        <div className='space-y-3'>
            <Layout headline='Projects'>
                {ExperienceDummy.map((item) => (
                    <CardHeader
                        key={item.title}
                        src={item.src}
                        alt={item.alt}
                    >
                        <CardContainer item={item} />
                    </CardHeader>
                ))}
            </Layout>
        </div>
    )
}

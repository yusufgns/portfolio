import React from 'react'
import CardHeader from "@/components/common/card-header"
import Layout from "@/components/common/layout"
import CardContainer from '../common/card-container'

const ExperienceDummy = [
    {
        src: "/experience/s4e_seo_banner.webp",
        alt: "Cyber Security for Everyone",
        mission: "Frontend Developer",
        date: "09.2023 - Present",
        title: "Cyber Security for Everyone",
        description: "I'm a software engineer with a passion for building web applications. I'm currently learning React and Next.js to build modern web applications."
    }
]

export default function Experience() {
    return (
        <div className='space-y-3'>
            <Layout headline='Experiences'>
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

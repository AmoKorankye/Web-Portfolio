'use client'

import { Badge } from "@/components/ui/badge"

const technologies = [
    {
        name: "Python, Data Science & AI",
        tech: ["python", "R", "SQL", "Natural Language Processing", "Computer Vision", "Machine Learning", "Deep Learning", "django", "flask", "pytorch", "tensorflow", "keras", "scikit-learn", "pandas", "numpy", "matplotlib", "seaborn", "llms"]
    },
    {
        name: "Web Application Development",
        tech: ["react", "next.js", "tailwindcss", "typescript", "streamlit"]
    },
    {
        name: "Other Development Tools",
        tech: ["github", "vscode", "jupyter", "vercel", "hugging face", "figma", "supabase"]
    }
]

export default function Skills() {
    return (
        <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">Tech Stack</h2>
            <div className="mb-6">
                <h3 className="text-sm text-muted-foreground mb-3">GitHub Contributions</h3>
                <img 
                    src="https://ghchart.rshah.org/AmoKorankye" 
                    alt="GitHub contribution chart"
                    className="rounded-lg"
                />
            </div>
            <div className="space-y-6">
                {technologies.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <h3 className="text-sm text-muted-foreground">{item.name}</h3>
                        <div className="flex flex-wrap gap-2">
                            {item.tech.map((techItem, techIndex) => (
                                <Badge key={`${index}-${techIndex}`} variant="secondary">
                                    {techItem}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
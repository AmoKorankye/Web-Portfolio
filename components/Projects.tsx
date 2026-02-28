'use client'

import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Calendar, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from 'next/image'

const projects = [
  {
    name: "polymarket trade automation",
    description: "The coolest part of engineering is building custom solutions to your own problems. One of my 2026 goals was to learn investing, so I decided to engineer my way into it and try automating trades (it's the most talked about thing on polymarket twitter).\n\nI'm currently building a Polymarket trading bot that identifies and executes smart, low-risk micro-trades, complete with daily performance reports and a native mac app so i can interact with my bots.",
    lastModified: "currently building",
    technologies: [],
    repoUrl: "",
    image: "/polymarket.jpg",
  },
  {
    name: "click creators digital marketing suite",
    description: "A suite of social media digital marketing tools for a marketing agency. This project was developed as part of my contribution to AIVS as a fullstack software engineer.\n\n1. Accounts Scraper - This scrapes social media profiles from the follower section of pre-determined target accounts and intelligently distributes the scraped profiles into databases.\n2. Comment Bot - Social Media Account automation using playwright complete with bot anti-detection properties.\n3. Viral Trend Finder - Scrapes Viral Posts across social media apps, identifies trends and generates reports on \"how to go viral\".",
    lastModified: "ongoing",
    technologies: ["python", "apify", "nextjs", "flask", "supabase"],
    repoUrl: "",
  },
  {
    name: "research study - Explaining Deep Networks: Analysis of Interpretability Methods in Medical Imaging",
    description: "Exploring the necessity of xAI in Medical Imaging and how useful understanding the model's results are for the end-user. Research Manuscript and Code Implementation on SHAP and GradCAM for on a multi-class classification task for medical diagnosis on Breast Cancer, Bone Fractures, Lung Cancer and Brain Tumors.",
    lastModified: "2025-05-11",
    technologies: ["python", "jupyter notebooks", "pytorch", "tensorflow"],
    repoUrl: "https://github.com/AmoKorankye/Explaining-Deep-Networks-Analysis-of-Interpretability-Methods",
  },
  {
    name: "agri-predict",
    description: "This project analyses soil data samples and uses a machine learning model to predict the crop best suited to the soil conditions. It aims to modernize farming methods and improve agricultural productivity in Africa by leveraging technology and data-driven insights.",
    lastModified: "2023-03-18",
    technologies: ["python", "HTML-CSS", "streamlit"],
    repoUrl: "https://github.com/AmoKorankye/Agri-Predict"
  },
  {
    name: "thyroid disease classifier",
    description: "Deep learning classification model to predict the likelihood of thyroid disease occurrence using patient demographics and blood test results. This highlights the implementation a multi-class neural network classifier to predict different categories of thyroid disease. The model achieves approximately 75% accuracy on the test set and handles class imbalance through weighted sampling.",
    lastModified: "2024-01-03",
    technologies: ["python", "pytorch", "pandas"],
    repoUrl: "https://github.com/AmoKorankye/Thyroid-Disease-Neural-Network-Classifier"
  },
  {
    name: "fraud message detection",
    description: "Predict potentially fraudulent messages using ML techniques. It applies topic modeling and uses ML to replace rigid keyword blocking with an intelligent scoring system that reduces false positives and automates high-risk message review. This project was developed as part of my contribution to mNotify as an AI Engineer.",
    lastModified: "2026-01-08",
    technologies: ["python", "unsupervised learning", "pandas"],
    repoUrl: "",
  },
  {
    name: "speech applications",
    description: "Speech Applications is a user-friendly toolkit for text-to-speech and speech-to-text tasks. It seamlessly integrates with Google Cloud API.",
    lastModified: "2024-02-29",
    technologies: ["python", "google cloud API"],
    repoUrl: "https://github.com/AmoKorankye/Speech-Applications"
  }
]

export default function Projects() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? [] : [index]))
  }

  return (
    <section id="projects" className="mb-12">
      {/* Thesis Section */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">thesis</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-left group-hover/trigger:underline underline-offset-4 decoration-1 transition-all">multi class classification of medical images using the ResNet-18 architecture</h3>
          <p className="text-sm sm:text-base mb-4">
            An AI-powered platform designed to assist healthcare professionals by providing accurate and efficient 
            diagnoses from medical imaging. Using advanced computer vision techniques, the app supports clinical decision making
            by analyzing X-rays, CT scans, and MRI images to detect the conditions; bone fractures, brain tumors, breast 
            cancer, and lung cancer. 
          </p>
          <p className="text-sm sm:text-base mb-6">
            With an intuitive interface, it allows doctors to upload images, receive detailed analyses, and view heatmaps
            highlighting areas of concern. By enhancing early detection, improving treatment planning, and reducing workloads,
            the platform aims to bring AI-driven diagnostics closer to patients and healthcare providers worldwide.
          </p>
        </div>
        <Image 
          src="/thesis-image.png" 
          width={1024} 
          height={512} 
          alt="AI Medical Diagnostics Dashboard" 
          className="rounded-lg object-cover w-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
          priority
        />
      </div>

      {/* Other Projects Section */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">projects</h2>

      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <Collapsible
              open={openItems.includes(index)}
              onOpenChange={() => toggleItem(index)}
              className="group"
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full hover:bg-muted/20 transition-colors py-3 group/trigger">
                <h3 className="text-lg font-semibold text-left group-hover/trigger:underline underline-offset-4 decoration-1 transition-all">{project.name}</h3>
                <span>
                  {openItems.includes(index) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </CollapsibleTrigger>

              <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                <div className="py-4">
                {project.image ? (
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                      <Image 
                      src={project.image} 
                      fill
                      alt={project.name} 
                      className="rounded-lg object-cover"
                      sizes="(max-width: 640px) 100vw, 192px"
                      priority
                      />
                    </div>
                    <p className="text-sm sm:text-base whitespace-pre-line">{project.description}</p>
                    </div>
                ) : (
                  <p className="text-sm sm:text-base mb-4 whitespace-pre-line">{project.description}</p>
                )}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>Last modified: {project.lastModified}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.repoUrl && (
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm whitespace-nowrap ml-4">
                      view repository
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </div>
              </div>
              </CollapsibleContent>
            </Collapsible>
            {index < projects.length - 1 && <hr className="my-2 border-t border-gray-300" />}
          </div>
        ))}
      </div>

      {/* GitHub Profile Link */}
      <div className="mt-8 pt-6">
        <Link 
          href="https://github.com/AmoKorankye" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 inline-flex items-center text-sm sm:text-base"
        >
          explore additional projects and contributions on github
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </section>
  )
}

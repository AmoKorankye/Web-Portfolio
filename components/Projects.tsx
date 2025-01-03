'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from 'next/image'

interface GithubProjectCardProps {
  name: string
  description: string
  lastModified: string
  technologies: string[]
  repoUrl: string
}

function GithubProjectCard({
  name,
  description,
  lastModified,
  technologies,
  repoUrl
}: GithubProjectCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <Calendar className="h-4 w-4" />
          <span>Last modified: {lastModified}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button asChild>
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            View Repository
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const projects = [
  {
    name: "Agri-Predict",
    description: "Aims to modernize farming methods and improve agricultural productivity in Africa by leveraging technology and data-driven insights.",
    lastModified: "2023-03-18",
    technologies: ["python", "HTML-CSS", "streamlit"],
    repoUrl: "https://github.com/AmoKorankye/Agri-Predict"
  },
  {
    name: "Bone Fracture Detection",
    description: "CNN Model to detect bone fractures in X-ray images. The model classifies X-ray images into two categories: fractured and not fractured bones.",
    lastModified: "2024-12-20",
    technologies: ["python", "tensorflow", "kaggle"],
    repoUrl: "https://github.com/AmoKorankye/Bone-Fracture-Detection-Using-CNNs"
  },
  {
    name: "Thyroid Disease Classifier",
    description: "Deep learning classification model to predict the likelihood of thyroid disease occurrence using patient demographics and blood test results.",
    lastModified: "2024-01-03",
    technologies: ["python", "pytorch", "pandas"],
    repoUrl: "https://github.com/AmoKorankye/Thyroid-Disease-Neural-Network-Classifier",
  },
  {
    name: "Fraud Detection",
    description: "Predict fraudulent transactions using ML techniques and the paysim dataset. The goal is to predict whether a transaction is fraudulent or not.",
    lastModified: "2024-03-29",
    technologies: ["python", "HTML-CSS", "web-widget"],
    repoUrl: "https://github.com/AmoKorankye/Online-Payment-Fraud-Detection",
  },
  {
    name: "Spam Detection",
    description: "Naive Bayes system classifies comments to filter unwanted content on social media. Classifies comments as spam or not, and predicts spam based on input.",
    lastModified: "2024-03-21",
    technologies: ["python", "pandas", "ml classification"],
    repoUrl: "https://github.com/AmoKorankye/Spam-Detection",
  },
  {
    name: "Speech Applications",
    description: "Speech Applications is a user-friendly toolkit for text-to-speech and speech-to-text tasks. It seamlessly integrates with Google Cloud API",
    lastModified: "2024-02-29",
    technologies: ["python", "google cloud API"],
    repoUrl: "https://github.com/AmoKorankye/Speech-Applications",
  }
]

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Projects</h2>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Current Project: AI-Powered Diagnostics Platform</CardTitle>
          <CardDescription>Revolutionizing the way we approach medical diagnostics in underserved areas.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <Image 
              src="/diagnostics.png" 
              width={500} 
              height={500} 
              alt="AI Medical Diagnostics Dashboard" 
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-sm sm:text-base mb-4">
              An AI-powered platform designed to assist healthcare professionals by providing accurate and efficient 
              diagnoses from medical imaging. Using advanced computer vision techniques, the app supports clinical decision making
              by analyzing X-rays, CT scans, and MRI images to detect the conditions; bone fractures, brain tumors, breast 
              cancer, and lung cancer. 
            </p>
            <p className="text-sm sm:text-base">
              With an intuitive interface, it allows doctors to upload images, receive detailed analyses, and view heatmaps
              highlighting areas of concern. By enhancing early detection, improving treatment planning, and reducing workloads,
              the platform aims to bring AI-driven diagnostics closer to patients and healthcare providers worldwide.
            </p>
          </div>
        </CardContent>
      </Card>

      <Carousel className="w-full max-w-5xl relative">
  <CarouselContent>
    {projects.map((project, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <GithubProjectCard {...project} />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <div className="flex justify-center gap-2 mt-4 md:hidden">
    <CarouselPrevious className="static translate-x-0 translate-y-0" />
    <CarouselNext className="static translate-x-0 translate-y-0" />
  </div>
  <CarouselPrevious className="hidden md:flex absolute" />
  <CarouselNext className="hidden md:flex absolute" />
</Carousel>
    </section>
  )
}

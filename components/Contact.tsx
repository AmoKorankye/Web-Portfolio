import Link from 'next/link'
import { Mail, Github, Linkedin, BookOpen } from 'lucide-react'

export default function Contact() {
    return (
        <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">Contact</h2>
            <div className="flex flex-wrap gap-4">
            <Link href="mailto:korankye2004@gmail.com" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5" />
                <span>Email</span>
            </Link>
            <Link href="https://github.com/AmoKorankye" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/kwaku-amo-korankye-7551751b6/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
            </Link>
            <Link href="https://drive.google.com/drive/folders/1jwZS7ayqjDHsphEogJWljo4Y44l0KJRf?usp=drive_link" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5" />
                <span>Links</span>
            </Link>
            </div>
        </section>
    )
}
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://amokorankye.com'

export const metadata: Metadata = {
  title: {
    default: ' kwaku amo-korankye',
    template: '%s | Kwaku Amo-Korankye',
  },
  description:
    'Kwaku Amo-Korankye is a Software Engineer and EIT at MEST Africa. BSc in Artificial Intelligence from Academic City University. Works in Python, Machine Learning, NLP, Computer Vision, React, and Next.js.',
  keywords: [
    'Kwaku Amo-Korankye',
    'Kwaku Amo Korankye',
    'Amo-Korankye',
    'Amo Korankye',
    'MEST Africa',
    'Software Engineer Ghana',
    'AI Engineer Ghana',
    'Artificial Intelligence Developer',
    'Machine Learning Engineer',
    'Python Developer',
    'Academic City University',
    'Meltwater',
    'MEST EIT',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'React Developer',
    'Next.js Developer',
  ],
  authors: [{ name: 'Kwaku Amo-Korankye', url: siteUrl }],
  creator: 'Kwaku Amo-Korankye',
  publisher: 'Kwaku Amo-Korankye',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Kwaku Amo-Korankye',
    title: 'Kwaku Amo-Korankye | Software Engineer & EIT @ MEST Africa',
    description:
      'Kwaku Amo-Korankye is a Software Engineer and EIT at MEST Africa. First-class BSc in Artificial Intelligence from Academic City University.',
    images: [
      {
        url: '/mest-headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Kwaku Amo-Korankye - Software Engineer and EIT @ MEST Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kwaku Amo-Korankye | Software Engineer & EIT @ MEST Africa',
    description:
      'Software Engineer and EIT at MEST Africa. BSc in Artificial Intelligence from Academic City University.',
    images: ['/mest-headshot.jpg'],
    creator: '@amokorankye',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-0E384VCBHS',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kwaku Amo-Korankye',
  alternateName: ['Kwaku Amo Korankye', 'Amo-Korankye', 'Kwaku'],
  url: siteUrl,
  image: `${siteUrl}/mest-headshot.jpg`,
  jobTitle: 'Software Engineer & EIT @ MEST Africa',
  worksFor: {
    '@type': 'Organization',
    name: 'MEST Africa',
    url: 'https://meltwater.org/',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Academic City University',
    url: 'https://acity.edu.gh/',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Python',
    'React',
    'Next.js',
    'Software Engineering',
    'Data Science',
  ],
  sameAs: [
    'https://github.com/AmoKorankye',
    'https://linkedin.com/in/amokorankye',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0E384VCBHS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0E384VCBHS');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


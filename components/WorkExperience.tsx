const jobs = [
  {
    period: 'Jun 2024 - Sep 2024',
    title: 'Data Specialist Intern - Aya Data Ghana',
    description: 'Contributed over 12 hours weekly to annotate picture-based datasets using bounding box, key point techniques, enhancing the accuracy of computer vision models while collaborating with the team to review and ensure high-quality annotations.',
    tech: 'CVAT • LabelBox',
  },
  {
    period: 'May 2024 - Present',
    title: 'Campus Ambassador - Paybox Global',
    description: 'Promoted financial inclusion and entrepreneurship among students and staff through targeted financial literacy programs, outreach, and marketing initiatives.',
    tech: 'Python • Web Payment Widget Integration',
  },
  {
    period: 'Oct 2023 - Feb 2024',
    title: 'Junior Developer - mNotify',
    description: "Developed a web application that streamlined system development and automated internal processes. Spearheaded AI and API integration projects, focusing on Google Cloud technology to boost platform functionality. Developed the project as a strategic initiative during mNotify's Google for Startups cohort.",
    tech: 'Python • Google Cloud API • NLP • TTS • STT • Streamlit',
  },
  {
    period: '2021 - 2022',
    title: 'Software Engineering Intern - DOBIISON VR',
    description: "Directed AI Engineering and Software Development initiatives, including the creation of an innovative Video Processing software for Dobiison's DRIIP programme.",
    tech: 'Python • Javascript • 360 Imaging',
  },
]

export default function WorkExperience() {
  return (
    <section className="mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Work Experience</h2>
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div key={index} className="flex flex-col sm:flex-row">
            <span className="text-sm text-muted-foreground sm:w-40 flex-shrink-0 mb-1 sm:mb-0 sm:pt-1">{job.period}</span>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">{job.title}</h3>
              <p className="text-sm sm:text-base">{job.description}</p>
              <p className="text-sm text-muted-foreground mt-2">{job.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


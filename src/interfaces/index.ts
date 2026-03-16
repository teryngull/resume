interface ContactLink {
    label: string
    href: string
}

interface HighlightItem {
    label: string
    value: string
}

interface ExperienceItem {
    role: string
    company: string
    location: string
    dates: string
    summary: string
    highlights: string[]
    focus: string[]
}

interface Recommendation {
    author: string
    relationship: string
    quote: string
}

interface Publication {
    title: string
    publishedBy: string
    publishedOn: string
    summary: string
    href: string
}

interface Award {
    title: string
    issuer: string
    date: string
    details: string
}

interface SkillCluster {
    label: string
    skills: string[]
}

interface GithubHighlight {
    name: string
    href: string
    details: string
}

interface EducationItem {
    institution: string
    credential: string
    dates: string
    details: string
}

export interface ResumeData {
    name: string
    role: string
    tagline: string
    summary: string
    location: string
    github: string
    contactLinks: ContactLink[]
    highlights: HighlightItem[]
    experience: ExperienceItem[]
    recommendation: Recommendation
    publication: Publication
    awards: Award[]
    skillClusters: SkillCluster[]
    githubHighlights: GithubHighlight[]
    education: EducationItem[]
}

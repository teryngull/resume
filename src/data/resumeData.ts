import type { ResumeData } from "../interfaces"

export const resumeData: ResumeData = {
  name: "Teryn Gull",
  role: "Software Engineering Manager",
  tagline: "Building powerful web applications and high-performing teams at Trimble",
  summary:
    "Software Engineering Manager with 15+ years of experience delivering complex web and mobile products. Collaborative team leader focused on career growth, technical quality, and product delivery.",
  location: "Louisville, Colorado, United States",
  github: "https://github.com/teryngull",
  contactLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/teryngull/" },
    { label: "GitHub", href: "https://github.com/teryngull" },
  ],
  highlights: [
    { label: "Total Experience", value: "19+ years" },
    { label: "Current Role", value: "Engineering Manager at Trimble" },
    { label: "Leadership Focus", value: "Team growth and product delivery" },
  ],
  experience: [
    {
      role: "Manager, Software Engineering",
      company: "Trimble Inc.",
      location: "Westminster, Colorado, United States",
      dates: "May 2025 - Present",
      summary:
        "Leading engineering teams building enterprise web applications with emphasis on delivery quality and team growth.",
      highlights: [
        "Leads teams in a 10,001+ employee global software organization.",
        "Focuses on career path development and product delivery.",
        "Drives collaboration across engineering and technical partners.",
      ],
      focus: ["People Leadership", "Delivery Management", "Web Applications"],
    },
    {
      role: "Team Lead, Software Engineering",
      company: "Trimble Inc.",
      location: "Westminster, Colorado, United States",
      dates: "Jun 2024 - May 2025",
      summary:
        "Led technical execution while guiding engineers and strengthening delivery practices on product teams.",
      highlights: [
        "Bridged strategy and hands-on implementation as a senior engineering lead.",
        "Partnered across teams to keep roadmap priorities and quality aligned.",
      ],
      focus: ["Technical Leadership", "Team Coaching", "Execution"],
    },
    {
      role: "Senior Software Engineer",
      company: "Trimble Inc.",
      location: "Colorado, United States",
      dates: "Aug 2018 - Jun 2024",
      summary:
        "Delivered and supported complex product capabilities across Trimble platforms as a senior individual contributor.",
      highlights: [
        "Recognized by peers for front-end engineering practices in React and Redux.",
        "Contributed across planning, development, testing, and production support.",
      ],
      focus: ["React", "Redux", "Senior IC Work"],
    },
    {
      role: "Software Engineer",
      company: "Colonial Life",
      location: "Columbia, South Carolina Area",
      dates: "May 2008 - Aug 2018",
      summary:
        "Progressed through multiple promotions while delivering web, mobile, and desktop solutions for sales and operations teams.",
      highlights: [
        "Led a mobile app rewrite using Xamarin.Forms and helped define a Vue.js web template POC.",
        "Designed an automation process to reprint duplicate policies, saving hundreds of hours of manual effort.",
        "Served as sole developer on a C# .NET desktop application used by 100+ home-office employees.",
        "Supported 1,000+ mainframe batch jobs and acted as IT lead for annual disaster recovery exercises.",
      ],
      focus: ["Xamarin.Forms", "Vue.js", "C#", ".NET", "Mainframe"],
    },
    {
      role: "IT Support Web Admin",
      company: "Fligel Image Apparel",
      location: "Charlotte, North Carolina Area",
      dates: "Jan 2007 - May 2008",
      summary:
        "Delivered early web operations support by managing storefront setup and digital product content workflows.",
      highlights: [
        "Built and configured client storefronts through a database-backed interface.",
        "Owned product photography and helped design order forms for web purchasing.",
      ],
      focus: ["Web Operations", "Database Tools", "Ecommerce Support"],
    },
  ],
  recommendation: {
    author: "Shane Upchurch",
    relationship: "Former teammate recommendation",
    quote:
      "Teryn is the senior engineer every developer hopes to work alongside. She is extremely knowledgeable in multiple facets of engineering, has a sharp eye for detail, is always open to collaborate, and takes full ownership of her work.",
  },
  publication: {
    title: "Colonial Life Drives Field Sales Productivity with .NET, Mobile, and DevOps",
    publishedBy: "Lacey Butler and Matthew Baston",
    publishedOn: "January 2018",
    summary:
      "Featured story on how the Colonial Life engineering team rebuilt its agent app with C#, Xamarin.Forms, automated testing, crash reporting, and continuous delivery practices.",
    href: "https://blog.xamarin.com/colonial-life-drives-field-sales-productivity-net-mobile-devops/",
  },
  awards: [
    {
      title: "Aspire Employee Recognition Conference",
      issuer: "Colonial Life",
      date: "May 2013",
      details:
        "Recognized for outstanding customer support and selected for company recognition conference.",
    },
    {
      title: "OPTIM: Global Services Recognition Program",
      issuer: "Colonial Life",
      date: "Mar 2013",
      details:
        "Received the Optimization Award for creating a process that saved hundreds of hours of manual policy reprint work.",
    },
    {
      title: "Aspire Employee Recognition Conference",
      issuer: "Colonial Life",
      date: "May 2011",
      details: "Selected again for outstanding customer support.",
    },
  ],
  skillClusters: [
    {
      label: "Leadership",
      skills: [
        "Engineering Management",
        "Team Leadership",
        "Career Path Development",
        "Cross-Functional Collaboration",
        "Product Delivery",
      ],
    },
    {
      label: "Web and Mobile Engineering",
      skills: [
        "React",
        "Redux",
        "Vue.js",
        "Xamarin.Forms",
        "TypeScript",
        "JavaScript",
        "C#",
        ".NET",
      ],
    },
    {
      label: "Delivery and Operations",
      skills: [
        "Testing",
        "Analysis and Design",
        "Documentation",
        "Production Support",
        "Business Requirements",
        "Disaster Recovery",
      ],
    },
  ],
  githubHighlights: [
    {
      name: "datagrid-poc",
      href: "https://github.com/teryngull/datagrid-poc",
      details: "Proof-of-concept work with 24 recorded contributions.",
    },
    {
      name: "TunnelDistanceConsole",
      href: "https://github.com/teryngull/TunnelDistanceConsole",
      details:
        "Console app solving shortest travel-distance scenarios using Manhattan distance and tunnel data.",
    },
    {
      name: "resume",
      href: "https://github.com/teryngull/resume",
      details: "Personal resume site and ongoing front-end showcase.",
    },
    {
      name: "TestColumbia",
      href: "https://github.com/teryngull/TestColumbia",
      details: "Geocoder testing project focused on Columbia, SC.",
    },
  ],
  education: [
    {
      institution: "University of North Carolina at Charlotte",
      credential: "Bachelor of Arts, Computer and Information Sciences",
      dates: "2005 - 2008",
      details:
        "Software and Information Systems program with outside concentration in Mechanical Engineering.",
    },
  ],
}

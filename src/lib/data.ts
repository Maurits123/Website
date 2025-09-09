





// Data fetching utilities for JSON files in public folder

export interface Profile {
  name: string
  tagline: string
  email: string
  bio: string
  socials: {
    name: string
    url: string
    icon: string
  }[]
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  link: string
  image?: string
}

// Cache for data to avoid multiple fetches
let profileCache: Profile | null = null
let projectsCache: Project[] | null = null

export async function getProfile(): Promise<Profile> {
  if (profileCache) {
    return profileCache
  }

  try {
    const response = await fetch('/data/profile.json')
    if (!response.ok) {
      throw new Error('Failed to fetch profile data')
    }
    profileCache = await response.json()
    return profileCache!
  } catch (error) {
    console.error('Error fetching profile:', error)
    // Return fallback data
    return {
      name: "Alex Johnson",
      tagline: "ECE + Plan II Honors",
      email: "alex.johnson@example.com",
      bio: "I'm a passionate Electrical and Computer Engineering student with a focus on digital systems design and FPGA development.",
      socials: [
        {
          name: "GitHub",
          url: "https://github.com/alexjohnson",
          icon: "github"
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/alexjohnson",
          icon: "linkedin"
        },
        {
          name: "Email",
          url: "mailto:alex.johnson@example.com",
          icon: "email"
        }
      ]
    }
  }
}

export async function getProjects(): Promise<Project[]> {
  if (projectsCache) {
    return projectsCache
  }

  try {
    const response = await fetch('/data/projects.json')
    if (!response.ok) {
      throw new Error('Failed to fetch projects data')
    }
    projectsCache = await response.json()
    return projectsCache!
  } catch (error) {
    console.error('Error fetching projects:', error)
    // Return fallback data
    return [
      {
        id: 1,
        title: "Sample Project",
        description: "A sample project description.",
        tags: ["Sample", "Project"],
        link: "https://github.com",
        image: "/images/project1.jpg"
      }
    ]
  }
}



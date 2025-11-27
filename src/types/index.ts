export interface LocalizedString {
    en: string;
    fr: string;
}

export interface LocalizedArray {
    en: string[];
    fr: string[];
}

export interface Experience {
    id: string;
    company: string;
    position: LocalizedString;
    duration: LocalizedString;
    location: LocalizedString;
    description: LocalizedArray;
    technologies: string[];
    logo?: string;
}

export interface Project {
    id: string;
    title: LocalizedString;
    description: LocalizedString;
    longDescription?: LocalizedString;
    technologies: string[];
    image: string;
    images?: string[]; // Additional images for detail page
    solutions?: LocalizedArray; // Key solutions/features
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}

export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'other';
    level: number; // 1-100
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface Education {
    id: string;
    institution: LocalizedString;
    degree: LocalizedString;
    duration: LocalizedString;
    location: LocalizedString;
    description: LocalizedArray;
}

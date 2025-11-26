import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        title: 'Proway – AI Career Guidance Platform',
        description: 'AI-assisted career guidance platform powered by microservices and OpenAI.',
        longDescription:
            'Developed an innovative AI-driven career guidance platform using a microservices architecture. '
            + 'Built the backend with Spring Boot microservices communicating via RabbitMQ, and the frontend with React + TypeScript. '
            + 'Integrated Azure OpenAI API to generate intelligent career recommendations. '
            + 'Implemented secure authentication and authorization using Keycloak and Spring Security.',
        technologies: [
            'Spring Boot',
            'React',
            'TypeScript',
            'RabbitMQ',
            'Azure OpenAI',
            'Keycloak',
            'Spring Security',
            'Docker',
        ],
        image: '/projects/proway.png',
        featured: true,
    },

    {
        id: '2',
        title: 'SportCoachApp',
        description: 'AI-powered mobile fitness coaching app.',
        longDescription:
            'Built a cross-platform AI-powered fitness coaching application using React Native and Firebase. '
            + 'Implemented secure Google Authentication using Firebase Auth and integrated FastAPI for backend services. '
            + 'Added AI-driven personalized nutrition plans and training recommendations using large language models.',
        technologies: [
            'React Native',
            'Firebase Auth',
            'FastAPI',
            'MongoDB',
            'Python',
            'Node.js',
        ],
        image: '/projects/sca.png',
        featured: true,
    },

    {
        id: '3',
        title: 'OptiLab – Laboratory Management System',
        description: 'A microservices-based system for managing medical laboratory operations.',
        longDescription:
            'Developed a medical laboratory management system using a microservices architecture built with Spring Boot. '
            + 'Implemented staff management, test tracking, and patient data modules. '
            + 'Created a responsive frontend using Angular and packaged deployments using Docker.',
        technologies: [
            'Spring Boot',
            'Angular',
            'Docker',
            'Eureka Server',
            'RabbitMQ',
            'Keycloak',
        ],
        image: '/projects/optilab.png',
        featured: true,
    },

    {
        id: '4',
        title: 'Quizzy – Interactive Quiz Platform',
        description: 'Online quiz platform with real-time scoring and authentication.',
        longDescription:
            'Designed and developed an interactive quiz platform using Spring Boot for the backend and Angular for the frontend. '
            + 'Implemented real-time score tracking, secure authentication with Keycloak, and a modern responsive UI.',
        technologies: [
            'Spring Boot',
            'Angular',
            'Tailwind CSS',
            'Keycloak',
            'Docker',
        ],
        image: '/projects/quizzy.png',
        featured: true,
    },

    {
        id: '5',
        title: 'StageTrack – Internship Management System',
        description: 'Modern web platform for managing internships and student progress.',
        longDescription:
            'Developed an internship management application using Next.js for the frontend and Spring Boot for the backend. '
            + 'Implemented student profile management, internship tracking, and supervisor dashboards.',
        technologies: [
            'Next.js',
            'Spring Boot',
            'PostgreSQL',
            'Tailwind CSS',
        ],
        image: '/projects/stagetrack.png',
        featured: false,
    },

    {
        id: '6',
        title: 'PropertyPulse – Real Estate Platform',
        description: 'Property rental and booking platform built with modern web technologies.',
        longDescription:
            'Created a full-featured real estate rental platform using Next.js, NextAuth, and MongoDB. '
            + 'Implemented property listings, booking management, authentication, and secure session handling.',
        technologies: [
            'Next.js',
            'NextAuth',
            'MongoDB',
            'TypeScript',
            'Tailwind CSS',
        ],
        image: '/projects/propertypulse.png',
        featured: false,
    },
];

// Helper function to add new project
export const addProject = (project: Project) => {
    projects.push(project);
};

// Helper function to get featured projects
export const getFeaturedProjects = () => {
    return projects.filter(project => project.featured);
};

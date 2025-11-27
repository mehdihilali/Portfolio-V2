import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        title: {
            en: 'Proway – AI Career Guidance Platform',
            fr: 'Proway – Plateforme d\'orientation professionnelle IA'
        },
        description: {
            en: 'AI-assisted career guidance platform powered by microservices and OpenAI.',
            fr: 'Plateforme d\'orientation professionnelle assistée par IA, propulsée par des microservices et OpenAI.'
        },
        longDescription: {
            en: 'Developed an innovative AI-driven career guidance platform using a microservices architecture. '
                + 'Built the backend with Spring Boot microservices communicating via RabbitMQ, and the frontend with React + TypeScript. '
                + 'Integrated Azure OpenAI API to generate intelligent career recommendations. '
                + 'Implemented secure authentication and authorization using Keycloak and Spring Security.',
            fr: 'Développement d\'une plateforme innovante d\'orientation professionnelle pilotée par l\'IA utilisant une architecture microservices. '
                + 'Backend construit avec des microservices Spring Boot communiquant via RabbitMQ, et frontend avec React + TypeScript. '
                + 'Intégration de l\'API Azure OpenAI pour générer des recommandations de carrière intelligentes. '
                + 'Mise en œuvre d\'une authentification et d\'une autorisation sécurisées utilisant Keycloak et Spring Security.'
        },
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
        title: {
            en: 'SportCoachApp',
            fr: 'SportCoachApp'
        },
        description: {
            en: 'AI-powered mobile fitness coaching app.',
            fr: 'Application mobile de coaching fitness propulsée par l\'IA.'
        },
        longDescription: {
            en: 'Built a cross-platform AI-powered fitness coaching application using React Native and Firebase. '
                + 'Implemented secure Google Authentication using Firebase Auth and integrated FastAPI for backend services. '
                + 'Added AI-driven personalized nutrition plans and training recommendations using large language models.',
            fr: 'Création d\'une application de coaching fitness multiplateforme propulsée par l\'IA utilisant React Native et Firebase. '
                + 'Mise en œuvre de l\'authentification Google sécurisée via Firebase Auth et intégration de FastAPI pour les services backend. '
                + 'Ajout de plans nutritionnels personnalisés et de recommandations d\'entraînement pilotés par l\'IA utilisant de grands modèles de langage.'
        },
        technologies: [
            'React Native',
            'NativeWind',
            'Firebase Auth',
            'FastAPI',
            'MongoDB',
            'Node.js',
            'Express.js',
            'Gemini API'
        ],
        image: '/projects/sca.png',
        featured: true,
    },

    {
        id: '3',
        title: {
            en: 'OptiLab – Laboratory Management System',
            fr: 'OptiLab – Système de gestion de laboratoire'
        },
        description: {
            en: 'A microservices-based system for managing medical laboratory operations.',
            fr: 'Système basé sur des microservices pour la gestion des opérations de laboratoire médical.'
        },
        longDescription: {
            en: 'Developed a medical laboratory management system using a microservices architecture built with Spring Boot. '
                + 'Implemented staff management, test tracking, and patient data modules. '
                + 'Created a responsive frontend using Angular and packaged deployments using Docker.',
            fr: 'Développement d\'un système de gestion de laboratoire médical utilisant une architecture microservices construite avec Spring Boot. '
                + 'Mise en œuvre des modules de gestion du personnel, de suivi des tests et des données patients. '
                + 'Création d\'un frontend responsive utilisant Angular et empaquetage des déploiements avec Docker.'
        },
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
        title: {
            en: 'Quizzy – Interactive Quiz Platform',
            fr: 'Quizzy – Plateforme de quiz interactifs'
        },
        description: {
            en: 'Online quiz platform with real-time scoring and authentication.',
            fr: 'Plateforme de quiz en ligne avec score en temps réel et authentification.'
        },
        longDescription: {
            en: 'Designed and developed an interactive quiz platform using Spring Boot for the backend and Angular for the frontend. '
                + 'Implemented real-time score tracking, secure authentication with Keycloak, and a modern responsive UI.',
            fr: 'Conception et développement d\'une plateforme de quiz interactive utilisant Spring Boot pour le backend et Angular pour le frontend. '
                + 'Mise en œuvre du suivi des scores en temps réel, de l\'authentification sécurisée avec Keycloak et d\'une interface utilisateur moderne et responsive.'
        },
        technologies: [
            'Spring Boot',
            'Angular',
            'Tailwind CSS',
            'Keycloak',
            'Docker',
            'JWT',
            'Spring Security',
        ],
        image: '/projects/quizzy.png',
        featured: true,
    },

    {
        id: '5',
        title: {
            en: 'StageTrack – Internship Management System',
            fr: 'StageTrack – Système de gestion de stages'
        },
        description: {
            en: 'Modern web platform for managing internships and student progress.',
            fr: 'Plateforme web moderne pour la gestion des stages et le suivi des étudiants.'
        },
        longDescription: {
            en: 'Developed an internship management application using Next.js for the frontend and Spring Boot for the backend. '
                + 'Implemented student profile management, internship tracking, and supervisor dashboards.',
            fr: 'Développement d\'une application de gestion de stages utilisant Next.js pour le frontend et Spring Boot pour le backend. '
                + 'Mise en œuvre de la gestion des profils étudiants, du suivi des stages et des tableaux de bord superviseurs.'
        },
        technologies: [
            'Next.js',
            'Spring Boot',
            'PostgreSQL',
            'Tailwind CSS',
            'Keycloak',
            'Docker',
            'Eureka Server',
            'RabbitMQ',
            'JWT',
            'Spring Security',
        ],
        image: '/projects/stagetrack.png',
        featured: false,
    },

    {
        id: '6',
        title: {
            en: 'PropertyPulse – Real Estate Platform',
            fr: 'PropertyPulse – Plateforme immobilière'
        },
        description: {
            en: 'Property rental and booking platform built with modern web technologies.',
            fr: 'Plateforme de location et de réservation immobilière construite avec des technologies web modernes.'
        },
        longDescription: {
            en: 'Created a full-featured real estate rental platform using Next.js, NextAuth, and MongoDB. '
                + 'Implemented property listings, booking management, authentication, and secure session handling.',
            fr: 'Création d\'une plateforme complète de location immobilière utilisant Next.js, NextAuth et MongoDB. '
                + 'Mise en œuvre des annonces immobilières, de la gestion des réservations, de l\'authentification et de la gestion sécurisée des sessions.'
        },
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

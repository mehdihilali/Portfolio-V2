import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        title: {
            en: 'MSPS – Ministry of Health Portal Automation & Optimization',
            fr: 'MSPS – Automatisation & Optimisation du Portail du Ministère de la Santé'
        },
        description: {
            en: 'Automation and optimization of the Ministry of Health portal, including bulk upload/download and system migration.',
            fr: 'Automatisation et optimisation du portail du Ministère de la Santé, incluant le téléchargement et l’upload en masse ainsi que la migration du système.'
        },
        longDescription: {
            en:
                'Developed a high-performance solution to automate the Ministry of Health portal using bulk download and upload scripts. '
                + 'Implemented data migration from the old system to the new web platform. '
                + 'Optimized workflows and ensured reliable synchronization between both platforms.',
            fr:
                'Développement d’une solution performante pour automatiser le portail du Ministère de la Santé grâce à des scripts de téléchargement et d’upload en masse. '
                + 'Mise en place de la migration des données de l’ancien système vers la nouvelle plateforme. '
                + 'Optimisation des workflows et garantie d’une synchronisation fiable entre les deux plateformes.'
        },
        technologies: [
            'React',
            'Java/Spring Boot',
            'TypeScript',
            'Automatisation',
            'Rasa',
            'Nginx',
            'SSMA',
            'SSMS',
            'Web Scraping',
            'Bulk Scripts'
        ],
        image: '/projects/msps.png',
        images: [
            '/projects/msps.png',
            '/projects/msps2.png',
            '/projects/msps3.png',
        ],
        solutions: {
            en: [
                'Deployment of the non-static frontend using Nginx and PM2, ensuring continuous availability.',
                'Creation of a startup script allowing PM2 services to automatically restart after server reboot.',
                'Database migration from MySQL to SQL Server, with resolution of compatibility issues post-migration.',
                'Development of a custom Electronic Document Management (EDM) module from scratch to avoid dependency on external tools and maintain full control.',
                'Automation of bulk data processing using scripted mass download and upload operations.',
                'Improved system performance and reliability through optimized data synchronization workflows.'
            ],
            fr: [
                'Déploiement du frontend non statique via Nginx et PM2, garantissant une disponibilité continue.',
                'Création d’un script de démarrage permettant le redémarrage automatique des services PM2 après un reboot serveur.',
                'Migration de la base de données de MySQL vers SQL Server, avec correction des problèmes d’incompatibilité après migration.',
                'Développement d’un module personnalisé de Gestion des Documents Électroniques (GED) entièrement conçu en interne pour plus de contrôle.',
                'Automatisation du traitement de données en masse grâce à des scripts de téléchargement et d’upload bulk.',
                'Amélioration des performances et de la fiabilité du système grâce à l’optimisation des workflows de synchronisation.'
            ]
        },
        featured: true
    },
    {
        id: '2',
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
        images: [
            '/projects/proway.png',
            '/projects/proway1.png',
            '/projects/proway2.png',
            '/projects/proway3.png',
        ],
        solutions: {
            en: [
                'Microservices architecture for scalability and maintainability',
                'AI-powered career recommendations using Azure OpenAI',
                'Real-time messaging between services using RabbitMQ',
                'Secure authentication and authorization with Keycloak',
                'Responsive and modern UI built with React and TypeScript',
                'Containerized deployment using Docker for easy scaling'
            ],
            fr: [
                'Architecture microservices pour l\'évolutivité et la maintenabilité',
                'Recommandations de carrière pilotées par l\'IA utilisant Azure OpenAI',
                'Messagerie en temps réel entre services utilisant RabbitMQ',
                'Authentification et autorisation sécurisées avec Keycloak',
                'Interface utilisateur responsive et moderne construite avec React et TypeScript',
                'Déploiement conteneurisé utilisant Docker pour une mise à l\'échelle facile'
            ]
        },
        featured: true,
    },

    {
        id: '3',
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
        solutions: {
            en: [
                'Implemented a fully custom Exercise API instead of relying on paid third-party services, ensuring full control and zero recurring cost.',
                'Designed the mobile UI using NativeWind for a clean, responsive, and customizable design system optimized for React Native.',
                'Integrated Google Authentication through Firebase Auth to provide a secure and seamless login experience.',
                'Built backend services with FastAPI to handle AI requests, user data, and personalized training workflows.',
                'Added AI-generated nutrition plans and workout recommendations powered by advanced LLMs for personalized coaching.',
                'Optimized cross-platform performance by leveraging React Native best practices and modular architecture.'
            ],
            fr: [
                'Mise en place d’une API personnalisée pour les exercices au lieu d’utiliser des services externes payants, offrant un contrôle total et aucun coût récurrent.',
                'Conception de l’interface mobile avec NativeWind pour un design propre, responsive et facilement personnalisable, optimisé pour React Native.',
                'Intégration de l’authentification Google via Firebase Auth pour une expérience de connexion sécurisée et fluide.',
                'Développement de services backend avec FastAPI pour gérer les requêtes IA, les données utilisateurs et les workflows d’entraînement personnalisés.',
                'Ajout de plans nutritionnels et de recommandations d’entraînement générés par l’IA grâce à des modèles de langage avancés.',
                'Optimisation des performances multiplateformes en appliquant les bonnes pratiques React Native et une architecture modulaire.'
            ]
        },
        featured: true,
    },

    {
        id: '4',
        title: {
            en: 'OptiLab – Laboratory Management System',
            fr: 'OptiLab – Système de gestion de laboratoire'
        },
        description: {
            en: 'A microservices-based system for managing medical laboratory operations.',
            fr: 'Système basé sur des microservices pour la gestion des opérations de laboratoire médical.'
        },
        longDescription: {
            en:
                'Developed a medical laboratory management system using a microservices architecture built with Spring Boot. '
                + 'Implemented staff management, test tracking, and patient data modules. '
                + 'Created a responsive frontend using Angular and packaged deployments using Docker.',
            fr:
                'Développement d\'un système de gestion de laboratoire médical utilisant une architecture microservices construite avec Spring Boot. '
                + 'Mise en œuvre des modules de gestion du personnel, de suivi des tests et des données patients. '
                + 'Création d\'un frontend responsive utilisant Angular et empaquetage des déploiements avec Docker.'
        },
        solutions: {
            en: [
                'Designed a modular microservices architecture using Spring Boot, enabling independent scaling of laboratory services.',
                'Implemented service discovery and inter-service communication using Eureka Server and RabbitMQ.',
                'Secured user authentication and role-based access using Keycloak with custom realms and clients.',
                'Built the frontend in Angular with a clean, responsive UI for laboratory staff and administrators.',
                'Containerized the entire system using Docker for easy deployment and environment consistency.',
                'Optimized data flow between services to ensure reliable test tracking and patient data updates.'
            ],
            fr: [
                'Conception d’une architecture microservices modulaire avec Spring Boot, permettant une montée en charge indépendante des services.',
                'Mise en place de la découverte de services et de la communication interservices via Eureka Server et RabbitMQ.',
                'Sécurisation de l’authentification et des rôles utilisateurs via Keycloak avec configuration personnalisée.',
                'Développement du frontend Angular avec une interface moderne et responsive adaptée au personnel du laboratoire.',
                'Conteneurisation complète du système avec Docker pour un déploiement simplifié et homogène.',
                'Optimisation des flux de données entre services pour un suivi fiable des tests et des informations patients.'
            ]
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
        images: [
            '/projects/optilab.png',
            '/projects/optilab1.png',
            '/projects/optilab2.png',
            '/projects/optilab3.png',
        ],
        featured: true,
    },


    {
        id: '5',
        title: {
            en: 'Quizzy – Interactive Quiz Platform',
            fr: 'Quizzy – Plateforme de quiz interactifs'
        },
        description: {
            en: 'Online quiz platform with real-time scoring and authentication.',
            fr: 'Plateforme de quiz en ligne avec score en temps réel et authentification.'
        },
        longDescription: {
            en:
                'Designed and developed an interactive quiz platform using Spring Boot for the backend and Angular for the frontend. '
                + 'Implemented real-time score tracking, secure authentication with Keycloak, and a modern responsive UI.',
            fr:
                'Conception et développement d\'une plateforme de quiz interactive utilisant Spring Boot pour le backend et Angular pour le frontend. '
                + 'Mise en œuvre du suivi des scores en temps réel, de l\'authentification sécurisée avec Keycloak et d\'une interface utilisateur moderne et responsive.'
        },

        /* 🔥 Added solutions */
        solutions: {
            en: [
                'Built a scalable backend with Spring Boot, designed to handle multiple concurrent quiz sessions.',
                'Integrated Keycloak for secure authentication and role-based access control.',
                'Developed a responsive Angular interface with Tailwind CSS for a smooth, modern user experience.',
                'Implemented real-time score updates and question progression using efficient backend endpoints.',
                'Containerized the platform using Docker for reliable deployment across environments.',
                'Added JWT and Spring Security layers to enhance request protection and session integrity.'
            ],
            fr: [
                'Développement d’un backend scalable avec Spring Boot, capable de gérer plusieurs sessions de quiz simultanées.',
                'Intégration de Keycloak pour une authentification sécurisée et une gestion des rôles avancée.',
                'Création d’une interface Angular responsive avec Tailwind CSS pour une expérience utilisateur fluide et moderne.',
                'Mise en place de la mise à jour en temps réel des scores et de la progression des questions via des endpoints optimisés.',
                'Conteneurisation de la plateforme avec Docker pour un déploiement fiable sur différents environnements.',
                'Ajout de JWT et Spring Security pour renforcer la sécurité des requêtes et l’intégrité des sessions.'
            ]
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
        images: [
            '/projects/quizzy.png',
            '/projects/quizzy1.png',
            '/projects/quizzy2.png'
        ],
        featured: true,
    },

    {
        id: '6',
        title: {
            en: 'StageTrack – Internship Management System',
            fr: 'StageTrack – Système de gestion de stages'
        },
        description: {
            en: 'Modern web platform for managing internships and student progress.',
            fr: 'Plateforme web moderne pour la gestion des stages et le suivi des étudiants.'
        },
        longDescription: {
            en:
                'Developed an internship management application using Next.js for the frontend and Spring Boot for the backend. '
                + 'Implemented student profile management, internship tracking, and supervisor dashboards.',
            fr:
                'Développement d\'une application de gestion de stages utilisant Next.js pour le frontend et Spring Boot pour le backend. '
                + 'Mise en œuvre de la gestion des profils étudiants, du suivi des stages et des tableaux de bord superviseurs.'
        },

        /* 🔥 Added solutions */
        solutions: {
            en: [
                'Developed a clean and responsive UI using Next.js and Tailwind CSS for an enhanced user experience.',
                'Implemented a secure authentication layer using Keycloak with role-based access for students and supervisors.',
                'Integrated RabbitMQ and Eureka Server to support microservices communication within the backend.',
                'Designed internship tracking workflows, allowing supervisors to monitor student progress in real time.',
                'Containerized the application using Docker to simplify deployment across environments.',
                'Used PostgreSQL for structured data, ensuring consistency and efficient internship record management.'
            ],
            fr: [
                'Développement d’une interface moderne et responsive avec Next.js et Tailwind CSS pour une meilleure expérience utilisateur.',
                'Mise en place d’une authentification sécurisée via Keycloak avec gestion des rôles étudiants et superviseurs.',
                'Intégration de RabbitMQ et Eureka Server pour gérer la communication entre microservices du backend.',
                'Conception de workflows de suivi de stage permettant aux superviseurs de consulter l’avancement en temps réel.',
                'Conteneurisation de l’application avec Docker pour un déploiement simplifié et homogène.',
                'Utilisation de PostgreSQL pour une gestion cohérente et performante des données de stages.'
            ]
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
        id: '7',
        title: {
            en: 'PropertyPulse – Real Estate Platform',
            fr: 'PropertyPulse – Plateforme immobilière'
        },
        description: {
            en: 'Property rental and booking platform built with modern web technologies.',
            fr: 'Plateforme de location et de réservation immobilière construite avec des technologies web modernes.'
        },
        longDescription: {
            en:
                'Created a full-featured real estate rental platform using Next.js, NextAuth, and MongoDB. '
                + 'Implemented property listings, booking management, authentication, and secure session handling.',
            fr:
                'Création d\'une plateforme complète de location immobilière utilisant Next.js, NextAuth et MongoDB. '
                + 'Mise en œuvre des annonces immobilières, de la gestion des réservations, de l\'authentification et de la gestion sécurisée des sessions.'
        },

        /* 🔥 Added solutions */
        solutions: {
            en: [
                'Developed a fully responsive and modern interface using Next.js and Tailwind CSS.',
                'Implemented secure authentication and session handling using NextAuth with JWT.',
                'Built property listing and filtering features with dynamic routing and server-side rendering.',
                'Created a booking system allowing users to reserve properties with integrated availability checks.',
                'Used MongoDB to manage flexible property data models and scalable storage.',
                'Ensured smooth user experience with optimized API routes and client-side caching.'
            ],
            fr: [
                'Développement d’une interface moderne et entièrement responsive avec Next.js et Tailwind CSS.',
                'Mise en place d’une authentification sécurisée et gestion des sessions via NextAuth et JWT.',
                'Création de fonctionnalités d’annonces immobilières et de filtrage avec routing dynamique et rendu côté serveur.',
                'Développement d’un système de réservation permettant aux utilisateurs de réserver des biens avec vérification de disponibilité.',
                'Utilisation de MongoDB pour une gestion flexible et évolutive des données immobilières.',
                'Amélioration de l’expérience utilisateur grâce à des routes API optimisées et au caching côté client.'
            ]
        },

        technologies: [
            'Next.js',
            'NextAuth',
            'MongoDB',
            'TypeScript',
            'Tailwind CSS',
        ],
        image: '/projects/propertypulse.png',
        images: [
            '/projects/propertypulse.png',
            '/projects/propertypulse1.png'
        ],
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

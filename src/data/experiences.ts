import type { Experience } from '../types';

export const experiences: Experience[] = [
    {
        id: '1',
        company: 'Clever Council',
        position: {
            en: 'Full Stack Developer (Java / React)',
            fr: 'Développeur Full Stack (Java / React)'
        },
        duration: {
            en: 'Aug 2025 - Present',
            fr: 'Août 2025 - Présent'
        },
        location: {
            en: 'Casablanca, Morocco',
            fr: 'Casablanca, Maroc'
        },
        description: {
            en: [
                'Developed Spring Boot microservices and React frontend for the Ministry of Health portal',
                'Designed and integrated an advanced Document Management System (GED) with secure storage and search',
                'Built an intelligent chatbot for user assistance using Rasa',
                'Implemented CI/CD pipelines using GitLab for automated testing and reliable deployments',
                'Deployed Spring Boot backend using Nginx (reverse proxy) and React frontend using PM2',
                'Migrated the database from MySQL to SQL Server using tools such as MMSA and SSMS to ensure optimal performance and data integrity',
                'Automated large-scale data extraction and transfer from the old Ministry website to the new platform using custom bulk download/upload scripts, improving migration efficiency by 40%'
            ],
            fr: [
                'Développement de microservices Spring Boot et d’un frontend React pour le portail du Ministère de la Santé',
                'Conception et intégration d’un système avancé de gestion documentaire (GED) avec stockage et recherche sécurisés',
                'Création d’un chatbot intelligent pour l’assistance utilisateur utilisant Rasa',
                'Mise en œuvre de pipelines CI/CD utilisant GitLab pour des tests automatisés et des déploiements fiables',
                'Déploiement du backend Spring Boot utilisant Nginx (reverse proxy) et du frontend React utilisant PM2',
                'Migration de la base de données de MySQL vers SQL Server en utilisant des outils tels que MMSA et SSMS pour garantir performance optimale et intégrité des données',
                'Automatisation du téléchargement et de l’upload massif (scraping) depuis l’ancien site du Ministère vers la nouvelle plateforme à l’aide de scripts de bulk download/upload, augmentant l’efficacité de la migration de 40%'
            ]
        },
        technologies: [
            'Spring Boot',
            'React',
            'Microservices',
            'GitLab CI/CD',
            'Docker',
            'Rasa',
            'Nginx',
            'PM2',
            'MySQL',
            'SQL Server',
            'SSMA',
            'SSMS',
            'Web Scraping',
            'Bulk Scripts'
        ],
    },
    {
        id: '2',
        company: 'PowerGo',
        position: {
            en: 'Full Stack Engineering Intern (Java / React)',
            fr: 'Stagiaire Ingénieur Full Stack (Java / React)'
        },
        duration: {
            en: 'Mar 2025 - Jul 2025',
            fr: 'Mars 2025 - Juil 2025'
        },
        location: {
            en: 'Casablanca, Morocco',
            fr: 'Casablanca, Maroc'
        },
        description: {
            en: [
                'Designed and developed Proway, an AI-powered career guidance platform',
                'Built Spring Boot microservices with asynchronous communication using RabbitMQ',
                'Secured authentication and authorization using Keycloak',
                'Documented APIs with Swagger/OpenAPI',
                'Achieved 75% test coverage using JUnit and Mockito'
            ],
            fr: [
                'Conception et développement de Proway, une plateforme d\'orientation professionnelle propulsée par l\'IA',
                'Construction de microservices Spring Boot avec communication asynchrone utilisant RabbitMQ',
                'Sécurisation de l\'authentification et de l\'autorisation utilisant Keycloak',
                'Documentation des API avec Swagger/OpenAPI',
                'Atteinte de 75% de couverture de tests utilisant JUnit et Mockito'
            ]
        },
        technologies: [
            'Spring Boot',
            'React',
            'RabbitMQ',
            'Keycloak',
            'Swagger',
            'JUnit',
            'Mockito',
            'Docker'
        ],
    },
    {
        id: '3',
        company: 'PowerGo',
        position: {
            en: 'Mobile Application Developer (Internship)',
            fr: 'Développeur d\'applications mobiles (Stage)'
        },
        duration: {
            en: 'Jul 2024 - Sep 2024',
            fr: 'Juil 2024 - Sep 2024'
        },
        location: {
            en: 'Casablanca-Settat, Morocco',
            fr: 'Casablanca-Settat, Maroc'
        },
        description: {
            en: [
                'Developed a mobile application for AI-powered sports coaching using React Native and Node.js/Express.js with MongoDB',
                'Implemented Google authentication via Firebase for secure and seamless user access',
                'Integrated the Gemini API to generate personalized nutrition recommendations and training programs',
                'Delivered an innovative solution that combines modern technologies and AI to provide tailored coaching experiences'
            ],
            fr: [
                'Développement d\'une application mobile pour le coaching sportif assisté par IA utilisant React Native et Node.js/Express.js avec MongoDB',
                'Mise en œuvre de l\'authentification Google via Firebase pour un accès utilisateur sécurisé et fluide',
                'Intégration de l\'API Gemini pour générer des recommandations nutritionnelles et des programmes d\'entraînement personnalisés',
                'Livraison d\'une solution innovante combinant technologies modernes et IA pour offrir des expériences de coaching sur mesure'
            ]
        },
        technologies: [
            'React Native',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Firebase Auth',
            'Gemini API'
        ],
    },
];

// Helper function to add new experience
export const addExperience = (experience: Experience) => {
    experiences.push(experience);
};

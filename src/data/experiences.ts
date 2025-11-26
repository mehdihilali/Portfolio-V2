import type { Experience } from '../types';

export const experiences: Experience[] = [
    {
        id: '1',
        company: 'Clever Council',
        position: 'Full Stack Developer (Java / React)',
        duration: 'Aug 2025 - Present',
        location: 'Casablanca, Morocco',
        description: [
            'Developed Spring Boot microservices and React frontend for the Ministry of Health portal',
            'Designed and integrated an advanced Document Management System (GED) with secure storage and search',
            'Built an intelligent chatbot for user assistance using Rasa',
            'Implemented CI/CD pipelines using GitLab for automated testing and reliable deployments',
            'Deployed Spring Boot backend using Nginx (reverse proxy) and React frontend using PM2'
        ],
        technologies: [
            'Spring Boot',
            'React',
            'Microservices',
            'GitLab CI/CD',
            'Docker',
            'Rasa',
            'Nginx',
            'PM2'
        ],
    },
    {
        id: '2',
        company: 'PowerGo',
        position: 'Full Stack Engineering Intern (Java / React)',
        duration: 'Mar 2025 - Jul 2025',
        location: 'Casablanca, Morocco',
        description: [
            'Designed and developed Proway, an AI-powered career guidance platform',
            'Built Spring Boot microservices with asynchronous communication using RabbitMQ',
            'Secured authentication and authorization using Keycloak',
            'Documented APIs with Swagger/OpenAPI',
            'Achieved 75% test coverage using JUnit and Mockito'
        ],
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
        position: 'Mobile Application Developer (Internship)',
        duration: 'Jul 2024 - Sep 2024',
        location: 'Casablanca-Settat, Morocco',
        description: [
            'Developed a mobile application for AI-powered sports coaching using React Native and Node.js/Express.js with MongoDB',
            'Implemented Google authentication via Firebase for secure and seamless user access',
            'Integrated the Gemini API to generate personalized nutrition recommendations and training programs',
            'Delivered an innovative solution that combines modern technologies and AI to provide tailored coaching experiences'
        ],
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

import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with payment integration',
        longDescription: 'Built a comprehensive e-commerce solution with user authentication, product management, shopping cart, and secure payment processing using Stripe.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
        image: '/projects/ecommerce.jpg',
        githubUrl: 'https://github.com/yourusername/ecommerce',
        liveUrl: 'https://ecommerce-demo.com',
        featured: true,
    },
    {
        id: '2',
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates',
        longDescription: 'A real-time task management application with drag-and-drop functionality, team collaboration features, and notifications.',
        technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Socket.io'],
        image: '/projects/taskmanager.jpg',
        githubUrl: 'https://github.com/yourusername/taskmanager',
        liveUrl: 'https://taskmanager-demo.com',
        featured: true,
    },
    {
        id: '3',
        title: 'Weather Dashboard',
        description: 'Beautiful weather dashboard with forecasts and maps',
        longDescription: 'An elegant weather application showing current conditions, 7-day forecasts, and interactive weather maps using OpenWeather API.',
        technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
        image: '/projects/weather.jpg',
        githubUrl: 'https://github.com/yourusername/weather',
        liveUrl: 'https://weather-demo.com',
        featured: false,
    },
    {
        id: '4',
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for social media metrics',
        longDescription: 'A comprehensive analytics dashboard that aggregates data from multiple social media platforms with beautiful visualizations.',
        technologies: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL', 'Prisma'],
        image: '/projects/social.jpg',
        githubUrl: 'https://github.com/yourusername/social-dashboard',
        featured: false,
    },
    {
        id: '5',
        title: 'Portfolio CMS',
        description: 'Content management system for portfolios',
        longDescription: 'A headless CMS built specifically for managing portfolio content with an intuitive admin interface.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
        image: '/projects/cms.jpg',
        githubUrl: 'https://github.com/yourusername/portfolio-cms',
        featured: false,
    },
    {
        id: '6',
        title: 'Fitness Tracker',
        description: 'Mobile-first fitness and workout tracking app',
        longDescription: 'A progressive web app for tracking workouts, nutrition, and fitness goals with offline support.',
        technologies: ['React', 'PWA', 'IndexedDB', 'Chart.js', 'Tailwind CSS'],
        image: '/projects/fitness.jpg',
        githubUrl: 'https://github.com/yourusername/fitness-tracker',
        liveUrl: 'https://fitness-demo.com',
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

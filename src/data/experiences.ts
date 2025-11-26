import type { Experience } from '../types';

export const experiences: Experience[] = [
    {
        id: '1',
        company: 'Tech Company Inc.',
        position: 'Senior Software Engineer',
        duration: 'Jan 2022 - Present',
        location: 'San Francisco, CA',
        description: [
            'Led development of microservices architecture serving 1M+ users',
            'Mentored junior developers and conducted code reviews',
            'Improved application performance by 40% through optimization',
            'Implemented CI/CD pipelines reducing deployment time by 60%'
        ],
        technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
    },
    {
        id: '2',
        company: 'Startup Solutions',
        position: 'Full Stack Developer',
        duration: 'Jun 2020 - Dec 2021',
        location: 'Remote',
        description: [
            'Built responsive web applications using React and Next.js',
            'Developed RESTful APIs with Node.js and Express',
            'Collaborated with design team to implement pixel-perfect UIs',
            'Integrated third-party services and payment gateways'
        ],
        technologies: ['React', 'Next.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    },
    {
        id: '3',
        company: 'Digital Agency',
        position: 'Frontend Developer',
        duration: 'Jan 2019 - May 2020',
        location: 'New York, NY',
        description: [
            'Created interactive and animated web experiences',
            'Optimized websites for SEO and performance',
            'Worked with clients to understand requirements',
            'Maintained and updated existing client websites'
        ],
        technologies: ['JavaScript', 'React', 'SASS', 'WordPress', 'jQuery'],
    },
];

// Helper function to add new experience
export const addExperience = (experience: Experience) => {
    experiences.push(experience);
};

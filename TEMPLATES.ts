/**
 * TEMPLATES FOR ADDING NEW CONTENT
 * 
 * Copy these templates when adding new projects or experiences
 */

// ============================================
// PROJECT TEMPLATE
// ============================================
// Copy this and add to src/data/projects.ts

const newProject = {
    id: 'unique-id-here', // e.g., '7', 'project-name', etc.
    title: 'Project Title',
    description: 'A brief one-line description of your project',
    longDescription: 'A more detailed description explaining what the project does, the problem it solves, and key features.',
    technologies: [
        'Technology 1',
        'Technology 2',
        'Technology 3',
        // Add more as needed
    ],
    image: '/projects/your-image.jpg', // Place image in public/projects/
    githubUrl: 'https://github.com/yourusername/project-name', // Optional
    liveUrl: 'https://your-project-demo.com', // Optional
    featured: false, // Set to true to show "Featured" badge
};

// ============================================
// EXPERIENCE TEMPLATE
// ============================================
// Copy this and add to src/data/experiences.ts

const newExperience = {
    id: 'unique-id-here', // e.g., '4', 'company-name', etc.
    company: 'Company Name',
    position: 'Your Job Title',
    duration: 'Month Year - Month Year', // e.g., 'Jan 2022 - Present'
    location: 'City, State/Country', // e.g., 'San Francisco, CA'
    description: [
        'Key achievement or responsibility #1',
        'Key achievement or responsibility #2',
        'Key achievement or responsibility #3',
        'Key achievement or responsibility #4',
        // Add more bullet points as needed
    ],
    technologies: [
        'Technology 1',
        'Technology 2',
        'Technology 3',
        // Add all relevant technologies used in this role
    ],
    logo: '/logos/company-logo.png', // Optional - for future use
};

// ============================================
// SKILL TEMPLATE (for About section)
// ============================================
// Add to the skills object in src/components/About.tsx

const skillsExample = {
    frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma'],
    // You can add more categories like:
    // mobile: ['React Native', 'Flutter'],
    // testing: ['Jest', 'Cypress', 'Testing Library'],
};

// ============================================
// SOCIAL LINK TEMPLATE
// ============================================
// For updating social links in Hero.tsx or Footer.tsx

const socialLinkExample = {
    icon: '<FaIconName />', // Import from react-icons/fa
    href: 'https://your-profile-url.com',
    label: 'Platform Name', // For accessibility
};

// ============================================
// EXAMPLE: COMPLETE PROJECT ENTRY
// ============================================

const completeProjectExample = {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment processing',
    longDescription: 'Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, order management, and secure payment processing via Stripe. Implemented admin dashboard for inventory management and sales analytics.',
    technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Express',
        'MongoDB',
        'Stripe',
        'Redux Toolkit',
        'Tailwind CSS',
        'JWT',
    ],
    image: '/projects/ecommerce.jpg',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
};

// ============================================
// EXAMPLE: COMPLETE EXPERIENCE ENTRY
// ============================================

const completeExperienceExample = {
    id: 'senior-dev-techcorp',
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    duration: 'March 2022 - Present',
    location: 'Remote',
    description: [
        'Led development of microservices architecture serving 500K+ daily active users',
        'Reduced API response time by 60% through database optimization and caching strategies',
        'Mentored team of 5 junior developers through code reviews and pair programming',
        'Implemented comprehensive testing suite achieving 85% code coverage',
        'Collaborated with product team to define technical requirements and roadmap',
    ],
    technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Redis',
        'Docker',
        'Kubernetes',
        'AWS',
        'GraphQL',
        'Jest',
    ],
};

export { }; // Makes this a module

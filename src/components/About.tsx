import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
    const skills = {
        frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
        backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
        tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma'],
    };

    const highlights = [
        {
            icon: <FaCode />,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable, and well-documented code',
        },
        {
            icon: <FaRocket />,
            title: 'Performance',
            description: 'Optimizing applications for speed and efficiency',
        },
        {
            icon: <FaLightbulb />,
            title: 'Innovation',
            description: 'Staying updated with latest technologies and best practices',
        },
        {
            icon: <FaUsers />,
            title: 'Collaboration',
            description: 'Working effectively in teams and mentoring others',
        },
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Passionate software engineer with a love for creating elegant solutions
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-primary-400">My Story</h3>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                I'm a software engineer with a passion for building beautiful and functional web applications.
                                With over 5 years of experience, I've worked on projects ranging from small startups to
                                enterprise-level applications.
                            </p>
                            <p>
                                I specialize in full-stack development with a focus on modern JavaScript frameworks and
                                cloud technologies. I believe in writing clean, maintainable code and creating exceptional
                                user experiences.
                            </p>
                            <p>
                                When I'm not coding, you can find me contributing to open-source projects, writing technical
                                articles, or exploring new technologies.
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-primary-400">Technical Skills</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-3 text-accent-400">Frontend</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.frontend.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 glass-effect rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-3 text-accent-400">Backend</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.backend.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 glass-effect rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-3 text-accent-400">Tools & Others</h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 glass-effect rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="text-4xl text-primary-400 mb-4 group-hover:scale-110 transition-transform inline-block">
                                {highlight.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                            <p className="text-slate-400 text-sm">{highlight.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

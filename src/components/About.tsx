import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    const skills = {
        frontend: ['React', 'Angular', 'Next.js', 'React Native', 'TypeScript', 'HTML5', 'CSS', 'Tailwind CSS'],
        backend: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'PHP', 'Laravel', 'Nest.js'],
        tools: ['Git', 'Github', 'GitHub Actions', 'GitLab CI/CD', 'Docker', 'Keycloak', 'RabbitMQ', 'Nginx'],
    };

    const highlights = [
        {
            icon: <FaCode />,
            title: t('about.highlights.cleanCode.title'),
            description: t('about.highlights.cleanCode.description'),
        },
        {
            icon: <FaRocket />,
            title: t('about.highlights.microservices.title'),
            description: t('about.highlights.microservices.description'),
        },
        {
            icon: <FaLightbulb />,
            title: t('about.highlights.innovation.title'),
            description: t('about.highlights.innovation.description'),
        },
        {
            icon: <FaUsers />,
            title: t('about.highlights.agile.title'),
            description: t('about.highlights.agile.description'),
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
                        {t('about.title')}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        {t('about.description1')}
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
                        <h3 className="text-2xl font-bold mb-4 text-primary-400">{t('about.story')}</h3>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                {t('about.description1')}
                            </p>
                            <p>
                                {t('about.description2')}
                            </p>
                            <p>
                                {t('about.description3')}
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
                        <h3 className="text-2xl font-bold mb-4 text-primary-400">{t('about.skills')}</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-3 text-accent-400">{t('about.frontend')}</h4>
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
                                <h4 className="text-lg font-semibold mb-3 text-accent-400">{t('about.backend')}</h4>
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
                                <h4 className="text-lg font-semibold mb-3 text-accent-400">{t('about.tools')}</h4>
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

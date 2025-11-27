import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import type { Project, LocalizedString } from '../types';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const { t, i18n } = useTranslation();
    const lang = (i18n.language.startsWith('fr') ? 'fr' : 'en') as keyof LocalizedString;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass-effect rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
        >
            <Link to={`/project/${project.id}`} className="block">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title[lang]}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                                // Optional: fallback if image fails to load
                                e.currentTarget.style.display = 'none';
                                // Or show fallback emoji
                            }}
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl opacity-20">🚀</div>
                        </div>
                    )}

                    {project.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                            Featured
                        </div>
                    )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                        {project.title[lang]}
                    </h3>
                    <p className="text-slate-400 mb-4 line-clamp-2">
                        {project.longDescription?.[lang] || project.description[lang]}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 5).map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 5 && (
                            <span className="px-3 py-1 text-xs font-medium bg-slate-500/10 text-slate-400 rounded-full border border-slate-500/20">
                                +{project.technologies.length - 5}
                            </span>
                        )}
                    </div>
                </div>
            </Link>

            {/* Links - Outside of main Link to prevent nested links */}
            <div className="px-6 pb-6 flex gap-4">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors"
                    >
                        <FaGithub className="text-xl" />
                        <span className="text-sm font-medium">{t('projects.viewCode')}</span>
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors"
                    >
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="text-sm font-medium">{t('projects.liveDemo')}</span>
                    </a>
                )}
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/50 rounded-xl transition-all duration-300 pointer-events-none" />
        </motion.div>
    );
};

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('projects.title')}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

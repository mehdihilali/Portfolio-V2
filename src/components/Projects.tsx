import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import type { Project } from '../types';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass-effect rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
        >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                </div>
                {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                        Featured
                    </div>
                )}
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-2">
                    {project.longDescription || project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors"
                        >
                            <FaGithub className="text-xl" />
                            <span className="text-sm font-medium">Code</span>
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors"
                        >
                            <FaExternalLinkAlt className="text-lg" />
                            <span className="text-sm font-medium">Live Demo</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/50 rounded-xl transition-all duration-300 pointer-events-none" />
        </motion.div>
    );
};

const Projects = () => {
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
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience
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

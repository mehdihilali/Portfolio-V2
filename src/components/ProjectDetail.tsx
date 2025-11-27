import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import type { LocalizedString, LocalizedArray } from '../types';

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const lang = (i18n.language.startsWith('fr') ? 'fr' : 'en') as keyof LocalizedString;
    const arrayLang = (i18n.language.startsWith('fr') ? 'fr' : 'en') as keyof LocalizedArray;

    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        {lang === 'fr' ? 'Projet non trouvé' : 'Project not found'}
                    </h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                    >
                        {lang === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
                    </button>
                </div>
            </div>
        );
    }

    const allImages = project.images || [project.image];

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white hover:text-primary-400 transition-all duration-300 group hover:border-primary-400/50 hover:shadow-lg hover:shadow-primary-500/20"
                >
                    <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium text-base">{lang === 'fr' ? 'Retour aux projets' : 'Back to Projects'}</span>
                </motion.button>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {project.title[lang]}
                    </h1>
                    <p className="text-xl text-slate-300 mb-6">
                        {project.description[lang]}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
                            >
                                <FaGithub />
                                <span>{lang === 'fr' ? 'Voir le code' : 'View Code'}</span>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-all"
                            >
                                <FaExternalLinkAlt />
                                <span>{lang === 'fr' ? 'Démo en direct' : 'Live Demo'}</span>
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Images Gallery - Enhanced Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    {allImages.length === 1 ? (
                        // Single Image - Full Width
                        <div className="glass-effect rounded-2xl overflow-hidden group max-w-5xl mx-auto">
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={allImages[0]}
                                    alt={project.title[lang]}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'https://via.placeholder.com/1200x675/1e293b/64748b?text=Project+Image';
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        // Multiple Images - Featured + Grid Layout
                        <div className="space-y-6">
                            {/* Featured Main Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="glass-effect rounded-2xl overflow-hidden group max-w-5xl mx-auto"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={allImages[0]}
                                        alt={`${project.title[lang]} - Main`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://via.placeholder.com/1200x675/1e293b/64748b?text=Project+Image';
                                        }}
                                    />
                                    {/* Overlay gradient for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>

                            {/* Additional Images Grid */}
                            {allImages.length > 1 && (
                                <div className={`grid gap-4 max-w-5xl mx-auto ${allImages.length === 2
                                    ? 'grid-cols-1'
                                    : allImages.length === 3
                                        ? 'grid-cols-1 md:grid-cols-2'
                                        : 'grid-cols-1 md:grid-cols-3'
                                    }`}>
                                    {allImages.slice(1).map((img, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                            className="glass-effect rounded-xl overflow-hidden group"
                                        >
                                            <div className="relative aspect-video overflow-hidden">
                                                <img
                                                    src={img}
                                                    alt={`${project.title[lang]} - ${index + 2}`}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.src = 'https://via.placeholder.com/800x450/1e293b/64748b?text=Project+Image';
                                                    }}
                                                />
                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Long Description */}
                        {project.longDescription && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="glass-effect rounded-xl p-8"
                            >
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    {lang === 'fr' ? 'À propos du projet' : 'About the Project'}
                                </h2>
                                <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                                    {project.longDescription[lang]}
                                </p>
                            </motion.div>
                        )}

                        {/* Solutions/Features */}
                        {project.solutions && project.solutions[arrayLang].length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="glass-effect rounded-xl p-8"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    {lang === 'fr' ? 'Solutions clés' : 'Key Solutions'}
                                </h2>
                                <ul className="space-y-4">
                                    {project.solutions[arrayLang].map((solution, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="text-primary-400 text-xl mt-1">✓</span>
                                            <span className="text-slate-300">{solution}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Technologies */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="glass-effect rounded-xl p-6 sticky top-24"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">
                                {lang === 'fr' ? 'Technologies' : 'Technologies'}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.05 }}
                                        className="px-3 py-1.5 text-sm font-medium bg-accent-500/10 text-accent-400 rounded-full border border-accent-500/20"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;

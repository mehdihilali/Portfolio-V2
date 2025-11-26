import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../data/experiences';
import type { Experience as ExperienceType } from '../types';

const ExperienceCard = ({ experience, index }: { experience: ExperienceType; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-12 border-l-2 border-primary-500/30 last:pb-0"
        >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-primary-500 ring-4 ring-slate-900" />
            </div>

            <div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                            {experience.position}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-400 font-semibold mt-1">
                            <FaBriefcase className="text-sm" />
                            <span>{experience.company}</span>
                        </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                        <div className="text-slate-400 text-sm font-medium">
                            {experience.duration}
                        </div>
                        <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                            <FaMapMarkerAlt className="text-xs" />
                            <span>{experience.location}</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                    {experience.description.map((item, i) => (
                        <li key={i} className="text-slate-300 flex items-start">
                            <span className="text-primary-400 mr-2 mt-1.5">▹</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium bg-accent-500/10 text-accent-400 rounded-full border border-accent-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        My professional journey and the amazing companies I've worked with
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={experience.id} experience={experience} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

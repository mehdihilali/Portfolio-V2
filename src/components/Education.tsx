import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { education } from '../data/education';
import type { Education as EducationType, LocalizedString, LocalizedArray } from '../types';

const EducationCard = ({ edu, index }: { edu: EducationType; index: number }) => {
    const { i18n } = useTranslation();
    const lang = (i18n.language.startsWith('fr') ? 'fr' : 'en') as keyof LocalizedString;
    const descLang = (i18n.language.startsWith('fr') ? 'fr' : 'en') as keyof LocalizedArray;

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-12 border-l-2 border-accent-500/30 last:pb-0"
        >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <motion.div
                    className="w-4 h-4 rounded-full bg-accent-500 ring-4 ring-slate-900"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </div>

            <div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent-400 transition-colors">
                            {edu.degree[lang]}
                        </h3>
                        <div className="flex items-center gap-2 text-accent-400 font-semibold mt-1">
                            <FaGraduationCap className="text-sm" />
                            <span>{edu.institution[lang]}</span>
                        </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                        <div className="text-slate-400 text-sm font-medium">
                            {edu.duration[lang]}
                        </div>
                        <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                            <FaMapMarkerAlt className="text-xs" />
                            <span>{edu.location[lang]}</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <ul className="space-y-2">
                    {edu.description[descLang].map((item, i) => (
                        <li key={i} className="text-slate-300 flex items-start">
                            <span className="text-accent-400 mr-2 mt-1.5">▹</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Education = () => {
    const { t } = useTranslation();

    return (
        <section id="education" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('education.title')}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        {t('education.subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <EducationCard key={edu.id} edu={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

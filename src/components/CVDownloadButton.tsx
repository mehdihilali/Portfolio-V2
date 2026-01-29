import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// SVG Flag Components
const UKFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="24" className="rounded-sm shadow-sm ring-1 ring-white/10">
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
    </svg>
);

const FrenchFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="24" height="24" className="rounded-sm shadow-sm ring-1 ring-white/10">
        <rect width="900" height="600" fill="#ED2939" />
        <rect width="600" height="600" fill="#fff" />
        <rect width="300" height="600" fill="#002395" />
    </svg>
);

const CVDownloadButton = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleDownload = (language: 'fr' | 'en') => {
        const fileName = language === 'fr'
            ? 'Elhilali_Elmehdi_CV_DEV_FR.pdf'
            : 'Elhilali_Elmehdi_CV_DEV_ENG.pdf';

        const link = document.createElement('a');
        link.href = `/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('hero.downloadCV')}
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[280px] glass-effect rounded-lg shadow-xl border border-white/10 z-[100]"
                        style={{ maxHeight: 'none' }}
                    >
                        <div className="flex flex-col">
                            <button
                                onClick={() => handleDownload('en')}
                                className="w-full px-6 py-4 text-left hover:bg-white/10 transition-colors duration-200 flex items-center gap-3 group rounded-t-lg"
                                type="button"
                            >
                                <UKFlag />
                                <div className="flex-1">
                                    <div className="font-semibold group-hover:text-primary-400 transition-colors">
                                        {t('hero.cvLanguages.english')}
                                    </div>
                                    <div className="text-xs text-slate-400 mt-0.5">
                                        {t('hero.cvLanguages.englishVersion')}
                                    </div>
                                </div>
                            </button>

                            <div className="h-px bg-white/10 mx-4" />

                            <button
                                onClick={() => handleDownload('fr')}
                                className="w-full px-6 py-4 text-left hover:bg-white/10 transition-colors duration-200 flex items-center gap-3 group rounded-b-lg"
                                type="button"
                            >
                                <FrenchFlag />
                                <div className="flex-1">
                                    <div className="font-semibold group-hover:text-primary-400 transition-colors">
                                        {t('hero.cvLanguages.french')}
                                    </div>
                                    <div className="text-xs text-slate-400 mt-0.5">
                                        {t('hero.cvLanguages.frenchVersion')}
                                    </div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CVDownloadButton;

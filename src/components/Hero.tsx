import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <motion.div
                className="container mx-auto px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium text-primary-400 mb-4">
                            👋 Welcome to my portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        Hi, I'm{' '}
                        <span className="text-gradient">Elmehdi ELHILALI</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-slate-300 mb-8"
                    >
                        Software Engineer specializing in building exceptional digital experiences
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
                    >
                        I craft beautiful, performant, and accessible web applications using modern technologies.
                        Passionate about clean code, user experience, and continuous learning.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="flex gap-6 justify-center"
                    >
                        <a
                            href="https://github.com/mehdihilali"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-primary-400 transition-colors duration-300 text-2xl"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/elhilali-elmehdi/?locale=en-US"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-primary-400 transition-colors duration-300 text-2xl"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:elhilali.elmehdi.edu@gmail.com"
                            className="text-slate-400 hover:text-primary-400 transition-colors duration-300 text-2xl"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-primary-400 transition-colors cursor-pointer"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <FaArrowDown className="text-2xl" />
            </motion.a>
        </section>
    );
};

export default Hero;

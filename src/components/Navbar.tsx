import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${isScrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div
                    className={`
            flex items-center justify-between px-6 transition-all duration-300
            ${isScrolled
                            ? 'w-[90%] md:w-[80%] max-w-5xl bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-primary-500/5 h-14'
                            : 'w-full container bg-transparent h-16'
                        }
          `}
                >
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="text-xl font-bold text-gradient cursor-pointer tracking-tight"
                    >
                        &lt;Elmehdi ELHILALI /&gt;
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, '#contact')}
                            className={`
                px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${isScrolled
                                    ? 'bg-primary-500 text-white hover:bg-primary-600'
                                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                                }
              `}
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-xl text-slate-300 hover:text-white transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-8 p-6 w-full max-w-sm">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-2xl font-medium text-slate-300 hover:text-primary-400 transition-colors"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                                href="#contact"
                                onClick={(e) => handleNavClick(e, '#contact')}
                                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full font-semibold text-white shadow-lg shadow-primary-500/25 mt-4"
                            >
                                Hire Me
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

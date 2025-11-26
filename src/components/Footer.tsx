import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithub />, href: 'https://github.com/mehdihilali', label: 'GitHub' },
        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/elhilali-elmehdi/?locale=en-US', label: 'LinkedIn' },
        { icon: <FaEnvelope />, href: 'mailto:elhilali.elmehdi.edu@gmail.com', label: 'Email' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="relative border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-gradient mb-4">&lt;Elmehdi ELHILALI /&gt;</h3>
                        <p className="text-slate-400 mb-4">
                            Software Engineer passionate about creating beautiful and functional web experiences.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="text-slate-400 hover:text-primary-400 transition-colors duration-300 text-xl"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter or CTA */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
                        <p className="text-slate-400 mb-4">
                            Interested in working together? Feel free to reach out!
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm text-center md:text-left">
                        © {currentYear} Elmehdi ELHILALI. All rights reserved.
                    </p>
                    <p className="text-slate-400 text-sm flex items-center gap-2">
                        Made with <FaHeart className="text-red-500" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

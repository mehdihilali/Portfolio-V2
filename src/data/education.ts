import type { Education } from '../types';

export const education: Education[] = [
    {
        id: 'ensa-khouribga',
        institution: {
            en: 'National School of Applied Sciences of Khouribga',
            fr: 'École Nationale des Sciences Appliquées de Khouribga'
        },
        degree: {
            en: 'Software Engineering Degree',
            fr: 'Diplôme d\'Ingénieur en Génie Logiciel'
        },
        duration: {
            en: '2023 - 2025',
            fr: '2023 - 2025'
        },
        location: {
            en: 'Khouribga, Morocco',
            fr: 'Khouribga, Maroc'
        },
        description: {
            en: [
                'Specialized in software engineering with focus on web development and cloud technologies',
                'Developed multiple full-stack applications using modern frameworks and best practices',
                'Participated in various hackathons and coding competitions',
                'Strong foundation in algorithms, data structures, and software architecture'
            ],
            fr: [
                'Spécialisé en génie logiciel avec un focus sur le développement web et les technologies cloud',
                'Développé plusieurs applications full-stack en utilisant des frameworks modernes et les meilleures pratiques',
                'Participé à divers hackathons et compétitions de programmation',
                'Solide formation en algorithmes, structures de données et architecture logicielle'
            ]
        }
    },
    {
        id: 'cpge',
        institution: {
            en: 'Preparatory Classes for Engineering Schools (ENSA Khouribga)',
            fr: 'Classes Préparatoires (ENSA Khouribga)'
        },
        degree: {
            en: 'Preparatory Classes for Engineering Schools',
            fr: 'Classes Préparatoires'
        },
        duration: {
            en: '2021 - 2023',
            fr: '2021 - 2023'
        },
        location: {
            en: 'Khouribga, Morocco',
            fr: 'Khouribga, Maroc'
        },
        description: {
            en: [
                'Intensive two-year program in mathematics, physics, and engineering sciences',
                'Developed strong analytical and problem-solving skills',
                'Prepared for competitive entrance exams to engineering schools',
                'Built solid foundation in mathematics and scientific methodology'
            ],
            fr: [
                'Programme intensif de deux ans en mathématiques, physique et sciences de l\'ingénieur',
                'Développé de solides compétences analytiques et de résolution de problèmes',
                'Préparé aux concours d\'entrée aux écoles d\'ingénieurs',
                'Construit une base solide en mathématiques et méthodologie scientifique'
            ]
        }
    },
    {
        id: 'baccalaureat',
        institution: {
            en: 'High School',
            fr: 'Lycée'
        },
        degree: {
            en: 'Baccalaureate in Physical Sciences',
            fr: 'Baccalauréat Sciences Physiques'
        },
        duration: {
            en: '2019 - 2021',
            fr: '2019 - 2021'
        },
        location: {
            en: 'Khouribga, Morocco',
            fr: 'Khouribga, Maroc'
        },
        description: {
            en: [
                'Graduated with honors in Physical Sciences',
                'Strong performance in physics, chemistry, and mathematics',
                'Developed analytical thinking and scientific rigor',
                'Participated in academic competitions and science clubs'
            ],
            fr: [
                'Diplômé avec mention Trés Bien en Sciences Physiques',
                'Excellentes performances en physique, chimie et mathématiques',
                'Développement d’un esprit analytique et d’une rigueur scientifique',
                'Participation à des compétitions académiques et clubs scientifiques'
            ]
        }
    }

];

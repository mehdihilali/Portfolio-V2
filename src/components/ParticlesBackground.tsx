import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container) => {
        console.log(container);
    };

    if (!init) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: {
                            enable: true,
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.5,
                            },
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#38bdf8",
                    },
                    links: {
                        color: "#38bdf8",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;

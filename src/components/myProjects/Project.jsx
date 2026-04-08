import React, { useCallback } from 'react'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import './project.css'

function Project() {

    const textRef = React.useRef(null);
    const text = 'MY PROJECTS'
    const scramble = useCallback(() => {
        const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        const original = text.split('');

        // Clear existing spans
        if (textRef.current) {
            textRef.current.innerHTML = '';
        }

        // Create spans for each character
        original.forEach((char, i) => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = char;
            textRef.current.appendChild(span);
        });

        // Animate each character
        Array.from(textRef.current.children).forEach((span, i) => {
            if (span.textContent === ' ') return;

            let ticks = 0;
            const target = original[i];
            const delay = i * 40;
            const settle = 8 + Math.floor(Math.random() * 6);

            setTimeout(() => {
                const interval = setInterval(() => {
                    if (ticks >= settle) {
                        span.textContent = target;
                        span.style.color = '#E8EAF0';
                        clearInterval(interval);
                        if (i === original.length - 1 && onComplete) {
                            onComplete();
                        }
                    } else {
                        span.textContent = CHARS[Math.floor(Math.random() * CHARS.length)];
                        span.style.color = '#E05104';
                        ticks++;
                    }
                }, 50);
            }, delay);
        });
    }, [text]);

    // Auto-run on mount
    React.useEffect(() => {
        const timer = setTimeout(scramble, 300);
        console.log(text);
        return () => clearTimeout(timer);
    }, [scramble]);
    


    const projectsRef = useRef([]);
    const projectCards = [
        {
            title: "Purse Website",
            description: "Full-stack e-commerce solution with React, CSS , GSAP and real-time inventory management.",
            image: "Projects-Images/HadaHand website Hero page.png",
            link: "https://inquisitive-cranachan-316ac4.netlify.app/#",
        },
        {
            title: "Other Project Was in process...",
            description: "There's no description",
            image: "project2.jpg",
            tags: ["React", "GSAP", "Tailwind", "Framer Motion"],
            link: "#",
        },
        // {
        //     title: "Task Management App",
        //     description: "Collaborative task manager with drag & drop, real-time sync, and team collaboration features.",
        //     image: "project3.jpg",
        //     tags: ["Next.js", "Socket.io", "Prisma", "TypeScript"],
        //     link: "#",
        //     gradient: "from-emerald-500 to-teal-500"
        // },
        // {
        //     title: "Weather Dashboard",
        //     description: "Real-time weather app with animated charts, geolocation, and 7-day forecasts using multiple APIs.",
        //     image: "project4.jpg",
        //     tags: ["Vue.js", "Chart.js", "OpenWeather", "Pinia"],
        //     link: "#",
        //     gradient: "from-orange-500 to-red-500"
        // },
        // {
        //     title: "Social Media Clone",
        //     description: "Instagram/Twitter clone with infinite scroll, likes, comments, and dark/light mode toggle.",
        //     image: "project5.jpg",
        //     tags: ["React", "Firebase", "Tailwind", "React Query"],
        //     link: "#",
        //     gradient: "from-rose-500 to-fuchsia-500"
        // },
        // {
        //     title: "NFT Marketplace",
        //     description: "Blockchain-powered NFT marketplace with wallet connect, IPFS storage, and smart contracts.",
        //     image: "project6.jpg",
        //     tags: ["Next.js", "Web3.js", "IPFS", "Ethereum"],
        //     link: "#",
        //     gradient: "from-yellow-500 to-amber-500"
        // }
    ];

    return (
        <div>
            <div style={{ height: "100vh" }} className="projectHeroSection bg-black d-flex flex-column p-5 justify-content-center align-items-center">
                <div className="gradient position-absolute"></div>
                <div className='hero-content h-auto'>
                    <h1 ref={textRef} style={{ fontSize: 'clamp(1rem, 5vw + 2rem, 8rem)' }} className='text-white hero-title'></h1>
                    <h5 className='p-5 text-white m-3 text-center hero-subtitle'>My projects reflect my passion for building modern, animated, and responsive web experiences. I focus on creating smooth interactions, clean designs, and high-performance applications that provide real value to users.</h5>
                </div>
            </div>

            <div className="projectSection bg-black">
                <div className="projects-grid bg-black container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
                        {projectCards.map((project, index) => (
                            <a className='text-decoration-none' href={project.link}>
                                <div
                                    key={index}
                                    style={{ marginBottom: "20px" }}
                                    ref={(el) => (projectsRef.current[index] = el)}
                                    className="project-card group cursor-pointer"
                                >
                                    <div className="project-image overflow-hidden rounded-3xl bg-gradient-to-br relative h-64 md:h-72 lg:h-80 group-hover:h-72 md:group-hover:h-80 lg:group-hover:h-88 transition-all duration-500">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    </div>

                                    <div className="p-6 md:p-8 lg:p-10">

                                        <h3 className="project-title text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-black text-white mb-3 ms-3 leading-tight group-hover:text-orange-400 transition-colors duration-300 ">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6 line-clamp-3 ms-3 text-white ">
                                            {project.description}
                                        </p>

                                        <a
                                            href={project.link}
                                            className="group/link flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-sm md:text-base transition-all duration-300 ms-3"
                                        >
                                            View Project
                                        </a>

                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project

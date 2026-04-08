import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

import "./skill.css";
import FallingText from './FallingText';

export default function Skill() {

    /* ---------------- heading page animation ---------------- */

    const cursor = (e) => {
        gsap.to(".skillCursordiv", {
            duration: 0.7,
            x: e.clientX - 750,
            y: e.clientY - 100,
        })
    }

    const cursorEnter = () => {
        gsap.to(".skillCursordiv", {
            scale: 3
        })
    }

    const cursorLeave = () => {
        gsap.to(".skillCursordiv", {
            scale: 1
        })
    }

    useGSAP(() => {
        gsap.from(".main-heading h1", {
            y: -200,
            delay: 0.5,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            delay: 0.5
        })
    }, [])


    /* ---------------- second page animation ---------------- */

    useGSAP(() => {
        let split = new SplitText(".content-text", {
            type: "words",
        });

        gsap.from(split.words, {
            opacity: 0,
            stagger: 0.2,
            y: -300,
            scrollTrigger: {
                trigger: ".section",
                start: "top 40%",
                end: "bottom 50%",
                scrub: 2
            },
        });

        return () => split.revert(); // very important
    });

    useGSAP(() => {
        let split_2 = new SplitText(".content-text-2", {
            type: "words",
        });

        gsap.from(split_2.words, {
            opacity: 0.15,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".section-2",
                start: "top 40%",
                end: "bottom 50%",
                scrub: 2
            },
        });

        return () => split_2.revert(); // very important
    });

    useGSAP(() => {
        let split_3 = new SplitText(".content-text-3", {
            type: "words",
        });

        gsap.from(split_3.words, {
            opacity: 0,
            stagger: 0.2,
            y: -300,
            scrollTrigger: {
                trigger: ".section-3",
                start: "top 40%",
                end: "bottom 50%",
                scrub: 2,
            },
        });

        return () => split_3.revert(); // very important
    });

    useGSAP(() => {
        let split_4 = new SplitText(".content-text-4", {
            type: "words",
        });

        gsap.from(split_4.words, {
            opacity: 0.15,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".section-4",
                start: "top 40%",
                end: "bottom 50%",
                scrub: 2,
            },
        });

        return () => split_4.revert(); // very important
    });

    /* ---------------- third page animation ---------------- */

    useGSAP(() => {
        const cards = gsap.utils.toArray(".hover-card");

        cards.forEach((card) => {
            const bg = card.querySelectorAll(".bg-fill");
            const text = card.querySelectorAll(".hover-text");

            card.addEventListener("mouseenter", () => {
                gsap.to(bg, { width: "100%", duration: 0.4, display: "block" });
                gsap.to(text, { color: "black", duration: 0.4 });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(bg, { width: "0%", duration: 0.4, display: "none" });
                gsap.to(text, { color: "white", duration: 0.4 });
            });
        })

    })

    useGSAP(() => {
        let toolsHeadingSplit = new SplitText(".tools-heading", {
            type: "words",
        });

        gsap.from(toolsHeadingSplit.words, {
            y: -300,
            opacity: 0,
            stagger: 0.4,
            scrollTrigger: {
                trigger: ".outerDiv",
                start: "30%",
            }
        })
    })

    let toolsData = [
        {
            heading: "VS Code",
            text: "My primary code editor for writing, debugging, and managing projects efficiently with powerful extensions and customization."
        },
        {
            heading: "ChatGPT",
            text: "I use ChatGPT to speed up development, solve coding problems, explore new concepts, and improve code quality."
        },
        {
            heading: "Gemini",
            text: "Gemini helps me with research, idea generation, and exploring alternative approaches to development challenges."
        },
        {
            heading: "GitHub",
            text: "I use GitHub for version control, managing repositories, and tracking project progress professionally."
        },
        {
            heading: "Swiper",
            text: "Swiper helps me create modern, responsive sliders and interactive touch-based components for better user experience."
        },
        {
            heading: "GSAP",
            text: "I use GSAP to create smooth, professional animations and scroll-based interactive experiences."
        },
        {
            heading: "Claude AI",
            text: "I use browser developer tools to debug, test responsiveness, and optimize performance."
        },
        {
            heading: "BlackBox",
            text: "I use browser developer tools to debug, test responsiveness, and optimize performance."
        }
    ]

    useEffect(() => {
        gsap.from(".reveal-card", {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".feature-section",
                start: "top 60%",
            }
        });
    }, []);


    return (
        <div onMouseMove={cursor} style={{ height: "fit-content" }} className='bg-black'>
            <div onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className='main-heading h-50 d-flex justify-content-center bg-transparent'>
                <div className="skillCursordiv d-sm-none d-md-none d-lg-block"></div>
                <div className='skill-heading h-100 w-75 d-flex justify-content-around position-relative bg-transparent overflow-hidden'>
                    <h1 style={{ fontSize: 'clamp(1rem, 11vw + 2rem, 15rem)', fontFamily: "BBH Hegarty, sans-serif", fontWeight: "700", fontStyle: "normal"}} className="text-white z-3">S</h1>
                    <h1 style={{ fontSize: 'clamp(1rem, 11vw + 2rem, 15rem)', fontFamily: "BBH Hegarty, sans-serif", fontWeight: "700", fontStyle: "normal"}} className="text-white z-3">K</h1>
                    <h1 style={{ fontSize: 'clamp(1rem, 11vw + 2rem, 15rem)', fontFamily: "BBH Hegarty, sans-serif", fontWeight: "700", fontStyle: "normal"}} className="text-white z-3">I</h1>
                    <h1 style={{ fontSize: 'clamp(1rem, 11vw + 2rem, 15rem)', fontFamily: "BBH Hegarty, sans-serif", fontWeight: "700", fontStyle: "normal"}} className="text-white z-3">L</h1>
                    <h1 style={{ fontSize: 'clamp(1rem, 11vw + 2rem, 15rem)', fontFamily: "BBH Hegarty, sans-serif", fontWeight: "700", fontStyle: "normal"}} className="text-white z-3">L</h1>
                    <h1 style={{ fontSize: 'clamp(1rem, 11vw + 2rem, 15rem)', fontFamily: "BBH Hegarty, sans-serif", fontWeight: "700", fontStyle: "normal"}} className="text-white z-3">S</h1>
                    <div style={{ left: "70px" }} className='heading-image position-absolute top-50 h-75 w-100 d-flex justify-content-evenly bg-transparent'>
                        <img className='h-50 z-1' src="Skills-Images/Skills-HTML-image.png" alt="" />
                        <img className='h-50 z-3' src="Skills-Images/Skills-CSS-image.png" alt="" />
                        <img className='h-50 z-3' src="Skills-Images/Skills-JS-image.png" alt="" />
                        <img className='h-50 z-3' src="Skills-Images/Skills-TailWind-image.png" alt="" />
                        <img className='h-50 z-1' src="Skills-Images/Skills-React-image.png" alt="" />
                        <img className='h-50 z-3 me-4' src="Skills-Images/Skills-Gsap-image.png" alt="" />
                    </div>
                </div>
            </div>

            {/*--------------------- second page----------------------- */}

            {/* Section 1 */}
            <div style={{ height: "660px" }} className="smooth-wrapper text-scroller d-flex justify-content-center align-items-center">
                <div className="smooth-content w-75 w-md-90 w-lg-85 p-0 mx-auto my-5">
                    <section className='section'>
                        <div className="container px-3 px-md-4 px-lg-5">
                            <div onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className="content-wrapper d-flex flex-column justify-content-center" style={{ width: "80%" }}>
                                <h2 className='content-text my-3 my-md-4 my-lg-5 me-0 me-md-3 text-orange text-center'>Frontend Development</h2>
                                <h1 className='content-text revealText text-white lh-lg' style={{ fontSize: "clamp(28px, 5vw, 45px)" }}>
                                    I build responsive, modern user interfaces using HTML, CSS, JavaScript, and React. My focus is on creating clean layouts, reusable components, and smooth user experiences. I ensure every interface looks great across all devices and screen sizes.
                                </h1>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Section 2 */}
            <div style={{ height: "600px" }} className="smooth-wrapper text-scroller d-flex justify-content-center align-items-center border-top">
                <div className="smooth-content w-75 w-md-90 w-lg-85 p-0 mx-auto my-2">
                    <section className='section-2'>
                        <div className="container px-3 px-md-4 px-lg-5">
                            <div onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className="content-wrapper d-flex flex-column justify-content-center text-end text-md-start" style={{ width: "80%" }}>
                                <h2 className='content-text-2 my-3 my-md-4 my-lg-5 me-0 me-md-3 text-orange text-center'>Animations & Interactions</h2>
                                <h1 className='content-text-2 revealText text-white lh-lg w-100' style={{ fontSize: "clamp(28px, 5vw, 45px)" }}>
                                    I create engaging scroll animations and micro-interactions using GSAP and Framer Motion. Motion is used thoughtfully to guide users and make interfaces feel alive. I believe animation should enhance usability, not distract from it.
                                </h1>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Section 3 */}
            <div style={{ height: "600px" }} className="smooth-wrapper text-scroller d-flex justify-content-center align-items-center border-top">
                <div className="smooth-content w-75 w-md-90 w-lg-85 p-0 mx-auto my-2">
                    <section className='section-3'>
                        <div className="container px-3 px-md-4 px-lg-5">
                            <div onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className="content-wrapper d-flex flex-column justify-content-center text-end text-md-start" style={{ width: "80%" }}>
                                <h2 className='content-text-3 my-3 my-md-4 my-lg-5 me-0 me-md-3 text-orange text-center'>UI Styling & Layout</h2>
                                <h1 className='content-text-3 revealText text-white lh-lg w-100' style={{ fontSize: "clamp(28px, 5vw, 45px)" }}>
                                    I design structured, scalable layouts using Tailwind CSS and modern design principles. I pay attention to spacing, typography, and visual hierarchy to make content easy to read and navigate
                                </h1>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Section 4 */}
            <div style={{ height: "500px" }} className="smooth-wrapper text-scroller d-flex justify-content-center align-items-center border-top">
                <div className="smooth-content w-75 w-md-90 w-lg-85 p-0 mx-auto my-2">
                    <section className='section-4'>
                        <div className="container px-3 px-md-4 px-lg-5">
                            <div onMouseEnter={cursorEnter} onMouseLeave={cursorLeave} className="content-wrapper d-flex flex-column justify-content-center text-end text-md-start" style={{ width: "80%" }}>
                                <h2 className='content-text-4 my-3 my-md-4 my-lg-5 me-0 me-md-3 text-orange text-center'>Performance & Clean Code</h2>
                                <h1 className='content-text-4 revealText text-white lh-lg w-100' style={{ fontSize: "clamp(28px, 5vw, 45px)" }}>
                                    I write optimized, maintainable code with a strong focus on performance and best practices. My goal is to build fast-loading websites that are easy to scale and update.
                                </h1>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/*--------------------- third page----------------------- */}

            <p style={{ color: "orange" }} className="container ps-5 w-75">Language i learned</p>

            <div className='container-fluid outerDiv position-relative'>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>HTML</h1>
                </div>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>CSS</h1>
                </div>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>Java Script</h1>
                </div>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>React</h1>
                </div>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>Bootstrap 5</h1>
                </div>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>GSAP</h1>
                </div>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>Node JS</h1>
                </div>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>Express JS</h1>
                </div>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>Python</h1>
                </div>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>Numpy</h1>
                </div>
                <div className="hover-card row d-flex justify-content-center border-top border-bottom h-100">
                    <div className="bg-fill"></div>
                    <h1 style={{ fontSize: "80px" }} className='hover-text p-0 ps-5 m-0 w-75'>Pandas</h1>
                </div>

            </div>

            <div className='tools-container position-relative text-center py-5'>
                <div className='overflow-hidden'>
                    <h1 style={{ fontSize: "100px" }} className='tools-heading text-white'>TOOLS I USE</h1>
                </div>
                <h1 className="bg-text">FOCUS</h1>

                <div className="container p-5 feature-section ">
                    <div className="row g-0">
                        {
                            toolsData.map((v, k) => (
                                <div key={k} className="col-md-6 reveal-card">
                                    <div className="feature-card">
                                        <span className="number">0{k}</span>
                                        <h4>{v.heading}</h4>
                                        <p>{v.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/*--------------------- Last page----------------------- */}

            <div className='w-100 d-flex justify-content-center bg-black p-4'>
                <div style={{ height: "400px" }} className='border d-flex justify-content-center w-75 flex-column text-center'>
                    <h1 className='w-100 text-white p-1'>Have a Project in Mind?</h1>
                    <FallingText
                        text={`I’m passionate about building modern, interactive, and high-performance web experiences. If you’re looking for a developer who cares about design, performance, and user experience, let’s connect and build something great.`}
                        highlightWords={["interactive", "web", "experiences", "developer", "experience", "build", "something"]}
                        highlightClass="highlighted"
                        trigger="hover"
                        backgroundColor="transparent"
                        wireframes={false}
                        gravity={0.76}
                        fontSize="2rem"
                        mouseConstraintStiffness={0.9}
                    />
                </div>
            </div>

        </div >
    )
}

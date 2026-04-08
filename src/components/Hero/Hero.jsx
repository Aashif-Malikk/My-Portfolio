import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import portfolioImg from "../../assets/portfolio-image.png";
import sticker from "../../assets/background-sticker.png"
import "./hero.css";


gsap.registerPlugin(ScrollTrigger);

function Hero() {
  /* ---------------- initial intro animation ---------------- */

  useGSAP(() => {
    gsap.to(".backgroundAnimation img", {
      transform: "translate(-550%)",
      repeat: -1,
      ease: "none",
      duration: 10,
      yoyo: true,
      delay: 0.3
    })
  }, [])

  const cursor = (e) => {
    gsap.to(".cursordiv", {
      duration: 0.7,
      x: e.clientX - 8,
      y: e.clientY - 100,
    })
  }

  useGSAP(() => {
    gsap.to(".first-view", {
      height: 0,
      width: 0,
      delay: 1,
      duration: 1,
      borderRadius: 1000,
      ease: "power3.inOut",
    });

    gsap.to(".first-view h2", {
      display: "none",
      delay: 1.1
    })

  }, []);

  /* ---------------- second page animation ---------------- */


  useGSAP(() => {
    gsap.from(".textanimation", {
      opacity: 0,
      transform: "translate(-50px)",
      duration: 1.6,
      scrollTrigger: {
        trigger: ".secondPage",
        scroller: "body",
        start: "top 75%",
      }
    })
  }, [])

  useGSAP(() => {
    gsap.from("svg", {
      delay: 1.5,
      width: 0,
      scrollTrigger: {
        trigger: ".secondPage",
        scroller: "body",
        start: "top 75%",
      }
    })
  }, [])

  let svg_initialstate = "M 10 80 Q 400 80 780 80";
  let pathref = useRef()

  const svgfunc_mouseleave = () => {
    gsap.to(pathref.current, {
      attr: { d: svg_initialstate },
      duration: 1.2,
      ease: "elastic.out(1,0.2)"
    });
  };

  const svgfunc_mousemove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - 8;
    const y = e.clientY - 100;
    console.log(x);


    gsap.to(pathref.current, {
      attr: { d: `M 10 80 Q ${x} ${y} 780 80` },
      duration: 0.3,
      ease: "power3.out"
    });
  };

  useGSAP(() => {
    if (window.innerWidth <= 991) return; // skip on mobile/tablet

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".servicesScroller .cards", {
      xPercent: -60,
      ease: "none",
      scrollTrigger: {
        trigger: ".servicesScroller",
        start: "top top",
        end: "+=150%",
        scrub: 2,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
  });


  return (
    <div onMouseMove={cursor}>

      <div className="hero">
        <div className="cursordiv d-lg-block d-md-none d-sm-none"></div>
        <div className="buttondiv">
          <button>Frontent Developer</button>
          <button>Backend Developer</button>
        </div>


        <div className="main position-relative d-flex justify-content-center align-items-center" style={{ height: "540px", width: "100%" }}>
          <div className="about-me d-lg-block d-none">
            <h3>About Me</h3>
            <p>I’m a front-end developer passionate about crafting clean, interactive, and visually engaging websites. I enjoy turning ideas into smooth, animated user experiences using modern web technologies. I focus on performance, responsiveness, and thoughtful design.</p>
          </div>a

          <div className="backgroundAnimation">
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
            <img src={sticker} alt="" srcSet="" />
          </div>


          <div className="imageDiv">
            <div className="top-circle"></div>
            <h1 className="text-white">AASHIF MALIK</h1>
            <div className="mainImage">
              <img src={portfolioImg} alt="" srcSet="" />
            </div>
          </div>
        </div>



        <div className="position-relative d-md-none d-sm-none d-lg-block justify-content-center align-items-center">
          <div className="first-view">
            <h2 className="text-light position-absolute bottom-50 start-50">Welcome...</h2>
          </div>
        </div>

      </div>

      {/* ---------------- Second page ----------------  */}


      <div style={{ height: "fit-content", backgroundColor: "black", color: "white" }} className="secondPage p-4 position-relative">
        <div style={{ width: "75%" }} className="whatido">
          <h1 className="textanimation" style={{ color: "white", fontSize: "clamp(4rem, 3vw + 1rem, 20rem)" }}>What i do </h1>
          <h4 style={{ color: "rgb(224, 81, 4)" }} className="textanimation fs-2 mb-3 w-100">I build modern, animated, responsive web experiences.</h4>
          <p className="textanimation w-100" style={{ color: "white", fontSize: "25px", width: "70%" }}> I specialize in creating interactive interfaces using HTML, CSS, JavaScript, React, Tailwind, GSAP, and Framer Motion to deliver smooth and engaging user journeys.</p>
        </div>

        <div style={{ top: "400px", right: "0" }} className="layer-blur position-absolute"></div>
        <img style={{ top: "200px", right: "0" }} className="image-gradient position-absolute" src="gradient.png" />

        <div style={{ left: "220px", top: "0px" }} className="svgline position-absolute">
          <svg onMouseMove={svgfunc_mousemove} onMouseLeave={svgfunc_mouseleave} width="800" height="200">
            <path ref={pathref} d="M 10 80 Q 400 80 780 80" width="20px" stroke="white" fill="transparent" />
          </svg>
        </div>

        <div className="whatido d-flex justify-content-end p-md-0 w-100">
          <h1 style={{ fontSize: "clamp(5rem, 16vw + 3.6rem, 20rem)" }} className="me-lg-5 me-md-0 me-sm-0">SERVICES</h1>
        </div>

        <div className="servicesScroller-small d-lg-none d-md-block d-sm-block">
          <div className="cards row gx-5">
            <div className="col-lg-3 col-md-6 mb-4 d-lg-block d-md-none">
              <div className="h-100 d-flex align-items-center">
                <h2 className="text-white h3 fw-bold">How can I<br />assist you?</h2>
              </div>
            </div>

            {/* Service Cards */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 rounded-4 shadow-lg border-0 bg-dark text-white p-4 service-card">
                <img src="/designImage.jpg" alt="Design" className="rounded-circle mb-3 mx-auto d-block" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                <div className="card-body text-center">
                  <h3 className="card-title h4 fw-bold mb-3">Design</h3>
                  <p className="card-text small lh-lg">I design interfaces that are visually appealing and intuitive. Every layout and interaction guides users smoothly through meaningful experiences.</p>
                  <div className="position-absolute end-0 bottom-0 me-3 mb-2">
                    <span className="badge bg-light text-dark fs-5 px-3 py-2 rounded-pill">01</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 rounded-4 shadow-lg border-0 bg-orange text-black p-4 service-card">
                <img src="/designImage.jpg" alt="Development" className="rounded-circle mb-3 mx-auto d-block" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                <div className="card-body text-center">
                  <h3 className="card-title h4 fw-bold mb-3">Development</h3>
                  <p className="card-text small lh-lg">I turn designs into fast, responsive websites using modern technologies. Clean code, performance, and smooth interactions across all devices.</p>
                  <div className="position-absolute end-0 bottom-0 me-3 mb-2">
                    <span className="badge bg-black text-light fs-5 px-3 py-2 rounded-pill">02</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 rounded-4 shadow-lg border-0 bg-dark text-white p-4 service-card">
                <img src="/designImage.jpg" alt="Design" className="rounded-circle mb-3 mx-auto d-block" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                <div className="card-body text-center">
                  <h3 className="card-title h4 fw-bold mb-3">Optimization</h3>
                  <p className="card-text small lh-lg">I optimize websites for speed and performance. From lazy loading to code splitting, I ensure lightning-fast experiences for users.</p>
                  <div className="position-absolute end-0 bottom-0 me-3 mb-2">
                    <span className="badge bg-light text-dark fs-5 px-3 py-2 rounded-pill">03</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="servicesScroller d-lg-flex d-sm-none d-md-none align-items-center container-md">
          <div className="cards row-cols-md-auto flex-md-column flex-lg-row">
            <div className="bg-transparent d-lg-block d-md-none" style={{ width: "10%", height: "75%" }}>
              <div>
                <h1 className="text-white">How can I <br /> assist you?</h1>
              </div>
            </div>

            <div className="card rounded-5 p-4 d-flex flex-row col-md-12" style={{ width: "20%", height: "100%", backgroundColor: "rgb(23,23,23)" }}>
              <div>
                <img style={{ borderRadius: "50%", height: "140px", width: "140px" }} className="card-img-top" src="/designImage.jpg" />
                <div className="card-body py-0 pt-3 px-4">
                  <h1 className="card-title text-white">Design</h1>
                </div>
              </div>
              <div className="card-text p-3 text-white position-relative">
                <p>Here are clean 2–3 lines you can place under the <span className="fw-bold text-white">Design That Moves</span> heading:

                  I design interfaces that are not only visually appealing but also intuitive to use. Every layout, animation, and interaction is crafted to guide users smoothly through the experience. My focus is on clarity, motion, and meaningful design that enhances usability.
                </p>

                <h2 className="position-absolute end-0 text-dark fs-1 me-3">01</h2>
              </div>
            </div>

            <div className="card rounded-5 p-4 d-flex flex-row col-md-12" style={{ width: "20%", height: "100%", backgroundColor: "rgb(242, 106, 33)" }}>
              <div>
                <img style={{ borderRadius: "50%", height: "140px", width: "140px" }} className="card-img-top" src="/designImage.jpg" alt="" />
                <div className="card-body py-0 pt-3 px-0">
                  <h1 className="card-title text-black">Development</h1>
                </div>
              </div>
              <div className="card-text p-3 text-black">
                <p>I turn designs into fast, responsive, and functional websites using modern web technologies. My development approach focuses on clean code, performance, and smooth interactions. I build scalable interfaces that work seamlessly across all devices and browsers.
                </p>

                <h2 className="position-absolute end-0 text-dark fs-1 me-4 mt-4">02</h2>

              </div>
            </div>

            <div className="card rounded-5 p-4 d-flex flex-row col-md-12" style={{ width: "20%", height: "100%", backgroundColor: "rgb(23, 23, 23)" }}>
              <div>
                <img style={{ borderRadius: "50%", height: "140px", width: "140px" }} className="card-img-top" src="/designImage.jpg" alt="" />
                <div className="card-body py-0 pt-3 px-4">
                  <h1 className="card-title text-white">Design</h1>
                </div>
              </div>
              <div className="card-text p-3 text-white">
                <p>Here are clean 2–3 lines you can place under the <span className="fw-bold text-white">Design That Moves</span> heading:

                  I design interfaces that are not only visually appealing but also intuitive to use. Every layout, animation, and interaction is crafted to guide users smoothly through the experience. My focus is on clarity, motion, and meaningful design that enhances usability.
                </p>

                <h2 className="position-absolute end-0 text-dark fs-1 me-5">03</h2>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* ---------------- Third page ----------------  */}

      <section className="contact-section bg-black text-white py-5 position-relative overflow-hidden">
        <div className="container px-4 px-lg-5">
          <div className="row align-items-center min-vh-75 g-5">
            {/* Left Column - Heading */}
            <div className="col-lg-6">
              <div className="text-center text-lg-start heading-container">
                {/* Desktop Version - Split heading */}
                <div className="d-none d-lg-block">
                  <h1 className="footer-heading mb-3">Let's Start</h1>
                  <div className="d-flex justify-content-center justify-content-lg-start mb-3">
                    <h1 className="footer-heading mb-0">Coding</h1>
                  </div>
                  <h1 className="footer-heading mb-0">Together...</h1>
                </div>

                {/* Mobile Version - Single line */}
                <div className="d-lg-none">
                  <h1 className="footer-heading-mobile mb-0">Let's Start Coding Together...</h1>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="col-lg-6">
              <form className="contact-form">
                <div className="mb-4 position-relative">
                  <input
                    type="text"
                    className="form-control contact-input fs-5 py-4 px-4"
                    placeholder="Name"
                    name="name"
                  />
                  <div className="input-underline"></div>
                </div>

                <div className="mb-4 position-relative">
                  <input
                    type="email"
                    className="form-control contact-input fs-5 py-4 px-4"
                    placeholder="Email"
                    name="email"
                  />
                  <div className="input-underline"></div>
                </div>

                <div className="mb-4 position-relative">
                  <input
                    type="tel"
                    className="form-control contact-input fs-5 py-4 px-4"
                    placeholder="Phone Number"
                    name="phone"
                  />
                  <div className="input-underline"></div>
                </div>

                <div className="mb-5 position-relative">
                  <textarea
                    className="form-control contact-input fs-5 py-4 px-4"
                    rows="5"
                    placeholder="How may I help you?"
                    name="message"
                  ></textarea>
                  <div className="input-underline"></div>
                </div>

                <button type="submit" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold rounded-pill w-100 w-lg-auto">
                  Get In Touch
                  <i className="fas fa-arrow-right ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Last page ----------------  */}

      <footer className="footer-section bg-black text-white border-top border-light border-opacity-25 py-4">
        <div className="container px-4 px-lg-5">
          <div className="row align-items-center g-4 g-lg-0">
            {/* Brand Name */}
            <div className="col-12 col-md-4 col-lg-3 text-center text-md-start">
              <h3 className="brand-name mb-0 fw-bold">
                Aashif Malik
              </h3>
            </div>

            {/* Contact Info */}
            <div className="col-6 col-md-4 col-lg-3 text-center">
              <div className="contact-item">
                <i className="fas fa-phone me-2 text-orange"></i>
                <span className="contact-text">+91 9971617035</span>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 text-center">
              <div className="contact-item">
                <i className="fas fa-envelope me-2 text-orange"></i>
                <span className="contact-text">aashifmalik776@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="col-12 col-md-8 col-lg-3 text-center text-md-end mt-2 mt-md-0">
              <div className="social-links d-flex justify-content-center justify-content-md-end gap-3 gap-lg-4">
                <a href="https://www.instagram.com/itz_aashif_malik?igsh=emI4eHdkd3B1cTVr" className="social-link" aria-label="Instagram">
                  <FontAwesomeIcon icon={['fab', 'instagram']} className="social-icon" />
                </a>
                <a href="https://github.com/Aashif-Malikk" className="social-link" aria-label="GitHub">
                  <FontAwesomeIcon icon={['fab', 'github']} className="social-icon" />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} className="social-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Line */}
          <div className="footer-divider mt-4 pt-3">
            <hr className="footer-line opacity-25" />
            <div className="text-center text-muted small mt-2">
              © 2024 Aashif Malik. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div >
  );
}

export default Hero;

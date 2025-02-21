/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import image1 from "./svgs/1.svg";
import image2 from "./svgs/2.svg";
import image3 from "./svgs/3.svg";
import image4 from "./svgs/4.svg";
import image5 from "./svgs/5.svg";
import image6 from "./svgs/6.svg";
import "./navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      var { scrollY } = window;
      if (scrollY > lastScrollTop.current) {
        setIsVisible(false);
      } else if (scrollY < lastScrollTop.current) {
        setIsVisible(true);
      }
      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page navbar-1-page">
      <nav className={`navbar-1 ${isVisible ? "visible" : ""}`}>
        <h1>F</h1>
        <div className="nav-items">
          <a href="#">About</a>
          <a href="#">Services</a>
          <Link to='/carousel'>Products</Link>
         
          <a href="#">Contact</a>
        </div>
      </nav>
      <section>
        <div>
          <h2>About</h2>
          <p>
            Discover Fuzion, where innovation meets excellence. With a dedicated
            team, we redefine standards to deliver top-notch solutions.
          </p>
        </div>
        <img src={image1} />
      </section>
      <section className="shaded">
        <img src={image2} />
        <div>
          <h2>Services</h2>
          <p>
            Explore tailored solutions at Fuzion. From consulting to technology,
            we propel your business forward.
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>Products</h2>
          <p>
            Experience innovation with Fuzion's exceptional products. Crafted
            for performance, each reflects our commitment to excellence.
          </p>
        </div>
        <img src={image3} />
      </section>
      <section className="shaded">
        <img src={image4} />
        <div>
          <h2>Contact</h2>
          <p>
            Ready to bring ideas to life? Connect with us today. Whether
            questions or collaboration, we're here to assist.
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>My Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            itaque corporis optio unde quia, modi pariatur ea magni dolorum?
          </p>
        </div>
        <img src={image5} />
      </section>
      <section className="shaded">
        <img src={image6} />
        <div>
          <h2>My Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            itaque corporis optio unde quia, modi pariatur ea magni dolorum?
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>My Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            itaque corporis optio unde quia, modi pariatur ea magni dolorum?
          </p>
        </div>
        <img src={image1} />
      </section>
    </div>
  );
};

export default Navbar;

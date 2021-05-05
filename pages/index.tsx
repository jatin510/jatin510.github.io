import React, { useEffect } from "react";
import Footer from "../components/footer.component";
import Header from "../components/header.component";
import Nav from "../components/nav.component";
import Projects from "../components/projects.component";
import Contact from "../components/contact.component";
import About from "../components/about.component";

export default function Home(props) {
  useEffect(() => {
    console.log("Mounted");
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    console.log("FOREST", forest);

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      // if (scrollPos <= window.innerHeight) {
      //   forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      // }

      // if (scrollPos - 100 <= window.innerHeight)
      //   header.style.visibility =
      //     header.style.visibility === "hidden" && "visible";
      // else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();

    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/_posts`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/_posts/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
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

    // <div>
    //   <_Header />

    //   <div id="welcome-section">
    //     <div className="forest" />
    //     {/* <div className="silhouette" /> */}
    //     {/* <div className="moon" /> */}
    //     {/* <div className="container">
    //       <h1>
    //         <span className="line">I do</span>
    //         <span className="line">graphic design</span>
    //         <span className="line">
    //           <span className="color">&</span> code.
    //         </span>
    //       </h1>
    //       <div className="buttons">
    //         <a href="#projects">my portfolio</a>
    //         <a href="#contact" className="cta">
    //           get in touch
    //         </a>
    //       </div>
    //     </div>
    //      */}
    //     {/* <div className="site-layout"> */}
    //     <div className="profile">
    //       <div className="image">
    //         <Avatar
    //           size={{ xs: 216, sm: 216, md: 216, lg: 216, xl: 216, xxl: 216 }}
    //           src="https://avatars3.githubusercontent.com/u/4160246?s=460&v=4"
    //           // src="https://lh3.googleusercontent.com/pw/ACtC-3cLYpXDVQoR5I4o_WwK7i7psH9xEcU330aE9Xm6Y_R-IwufuWDROIOw3pvShKLpgG0Vdqnh4Peaq-T8jY-Hp0H3GJ5Mw1DYZ4Sx5BGBZrmqFpXB7ClIbfQx7cwU8aQcWnSqvLvQJ1XDdETFxdvji5AL=s640-no"
    //         />
    //       </div>
    //       <div className="info">
    //         <h1>
    //           Hey! I’m <b>Jagdish</b>
    //         </h1>
    //         <p>
    //           Breakfast procuring no end happiness allowance assurance frank.
    //           Met simplicity nor difficulty unreserved who. Entreaties mr
    //           conviction dissimilar me astonished estimating cultivated.
    //         </p>

    //         <List
    //           itemLayout="vertical"
    //           dataSource={socialIcons}
    //           renderItem={(icon) => (
    //             <Tooltip title={icon.title}>
    //               <a href={icon.url} target="_blank">
    //                 {icon.icon}
    //               </a>
    //             </Tooltip>
    //           )}
    //           grid={{
    //             xxl: 10,
    //             xl: 10,
    //             lg: 10,
    //             md: 10,
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </div>

    //   <About />
    //   <p>List of posts:</p>
    //   <ul>
    //     {props.blogs.map((blog, idx) => {
    //       return (
    //         <li key={blog.id}>
    //           <Link href={`/posts/${blog.slug}`}>
    //             <a>{blog.title}</a>
    //           </Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
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

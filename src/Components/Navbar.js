// import React from "react";
// import Logo from "../Images/Logo.JPG";
// import Playstore from "../Images/Playstore.png";
// import { Button } from "@mui/material";
// // import { Link } from "react-router-dom";

// import Scrollspy from "react-scrollspy";
// import { Link } from "react-router-dom";

// const Style = {
//     navstyle: "font-semibold hover:text-[blue] cursor-pointer  active:text-[blue] active:no-underline",

//   };

// const Navbar = () => {
//   return (
//     <>
//     <Scrollspy>
//       <header className=" h-[70px] bg-white text-inherit flex justify-evenly  shadow-md  w-full p-[0 20] items-center">

//         <div>
//           <img className="w-full h-12 lg:h-12 p-1" src={Logo} alt="Logo" />
//         </div>

//         <div className="flex justify-evenly">
//           <ul className="flex gap-8 p-2 mr-8">
//             <Link className={Style.navstyle} >Curriculum</Link>
//             <Link className={Style.navstyle}>Reviews</Link>
//             <Link className={Style.navstyle} >Teaching</Link>
//             <Link className={Style.navstyle} >Mentorship</Link>
//             <Link className={Style.navstyle}>Community</Link>
//             <Link className={Style.navstyle} >Careers</Link>
//             <Link className={Style.navstyle}>FAQs</Link>
//           </ul>

//           <div className="flex gap-4">
//             <img className="w-10 h-10 p-1" src={Playstore} alt="" />
//             <Button variant="contained" color="error">
//               APPLY NOW
//             </Button>
//             <Button variant="outlined" href="#outlined-buttons">
//               Login
//             </Button>
//           </div>
//         </div>

//       </header>
//       </Scrollspy>
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import Logo from "../Images/Logo.JPG";
import Playstore from "../Images/Playstore.png";
import { Button } from "@mui/material";
import { SectionIds } from "./SectionIds";
import { Link } from "react-router-dom";

const Style = {
  navstyle:
    "font-semibold hover:text-[blue] cursor-pointer  active:text-[blue] active:no-underline",

    

    

};


const Navbar = () => {
  //State to track the active link and scroll state
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setisScrolled] = useState(false);

  //Function to smoothly scroll to section by its id
  const scrollToSection = (SectionIds) => {
    const element = document.getElementById(SectionIds);
    if (element) {
      const marginTop = 0;
      const ScrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: ScrollToY, behavior: "smooth" });
    }
  };

  //Function to determiine the active section while scrolling

  const determineActivesection = () => {
    for (let i = SectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(SectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(SectionIds[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
      determineActivesection();
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="stickyHeader h-[70px] bg-white text-inherit flex justify-evenly   w-full p-[0 20] items-center ">
      <div>
        <img className="w-full h-12 lg:h-12 p-1" src={Logo} alt="Logo" />
      </div>

      <div className="flex justify-evenly">
        <ul className="flex gap-8 p-2 mr-8">
          {/*  */}
          {SectionIds.map((SectionIds, i) => (
            <li key={i} onClick={() => scrollToSection(SectionIds)}>
              <Link
                to="/"
                className={`${Style.navstyle} ${
                  activeLink === SectionIds ? "active" : ""
                } `}
              >
                {SectionIds}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <img className="w-10 h-10 p-1" src={Playstore} alt="" />
          <Button variant="contained" color="error">
            APPLY NOW
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

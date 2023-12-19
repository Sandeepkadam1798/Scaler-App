import React from "react";
import banner from "../Images/banner-background-34136d3a9ddff172e6bae6e3d8283c452231dcda2196b055bfa2e34e222754b7.svg";
import { Button, TextField } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

import first from "../Images/First.JPG"
import Two from "../Images/Two.JPG"
import Three from "../Images/Three.JPG"
import Four from "../Images/Four.JPG"
import Five from "../Images/Five.JPG"
import Six from "../Images/Six.JPG"
import Seven from "../Images/Seven.JPG"
import Eight from "../Images/Eight.JPG"
import Nine from "../Images/Nine.JPG"
import Ten from "../Images/Ten.JPG"
import Eleven from "../Images/Eleven.JPG"

const Hero = () => {
  return (
    <>
    <div className="relative m-0  h-[82.8rem] ">
      <img src={banner} alt="" className="w-full  bg-center" />

      <div className="absolute top-24 left-20 h-full text-cyan-50 ">
        <div className="flex flex-wrap text-sm p-[0.4rem] text-[1.20rem] bg-white bg-opacity-10 rounded-lg ">
          <div className="flex p-[0.4rem] ">
            <div className="font-bold">126%</div>
            <div>Avg. CTC Hike</div>
          </div>

          <div className="flex p-[0.4rem] ">
            <div className="font-bold">Top 1%</div>
            <div>Industry Instructors</div>
          </div>

          <div className="flex p-[0.4rem]">
            <div className="font-bold ">900+</div>
            <div>Placement Partners</div>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-3xl font-bold">Your Path to a Successful</h1>
          <h1 className="text-3xl font-bold"> Tech Career!</h1>

          <h1 className="text-[#bac6d8] text-2xl mt-2">
            {" "}
            Now experience the program for
            <b>
              <span className="m-2 text-[3rem] text-white">FREE</span>
            </b>
          </h1>

          <div className="flex flex-row gap-5 mt-2 p-[1.5rem]">
            <Button
              variant="contained"
              size="large"
              color="error"
              style={{ height: "60px" }}
            >
              BOOK LIVE CLASS
            </Button>

            <Button
              variant="contained"
              size="large"
              className=""
              style={{
                color: "#0041ca",
                backgroundColor: "#fff",
                height: "60px",
              }}
            >
              EXPLORE ACADEMY
            </Button>
          </div>

          <div className="mt-2 text-lg">
            NEXT BATCH STARTS{" "}
            <b>
              <span className="text-yellow-500">MID DECEMBER</span>
            </b>
          </div>
        </div>
      </div>

      <div className="absolute top-12 right-32 w-[470px] h-[480px] bg-white p-8 rounded-lg shadow-md">
        <h2
          className="flex flex-wrap  gap-4 mb-0 m-0"
          style={{
            lineHeight: "3.2rem",
            fontSize: "30px ",
            fontWeight: "400px",
          }}
        >
          Book a Live Class,For{" "}
          <b>
            <h2 className="text-red-600">Free !</h2>
          </b>
        </h2>

        <div className="mb-4">
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            maxRows={4}
            style={{ width: "400px" }}
            required
          />
        </div>

        <div className="mb-4">
          <TextField
            id="outlined-multiline-flexible"
            label="Email"
            multiline
            maxRows={4}
            type="email"
            style={{ width: "400px" }}
            required
          />
        </div>

        <div className="mb-4">
          <TextField
            id="outlined-multiline-flexible"
            label="Mobile"
            multiline
            maxRows={4}
            style={{ width: "400px" }}
            required
          />
        </div>

        <div className="flex gap-1  justify-evenly">
          <Button
            variant="contained"
            color="error"
            style={{
              width: "300px",
              fontSize: "12px",
              fontFamily: "sans-serif",
            }}
          >
            Continue Booking Live Class
          </Button>
          <Button size="medium" style={{ width: "200px", fontSize: "12px" }}>
            Limited seats left
          </Button>
        </div>

        <p className="mt-4">
          Already have an account?{" "}
          <Link to={"#"} className="underline hover:clear-none ">
            Click here
          </Link>
        </p>
        <p>
          By creating an account I have read and agree to Scaler’s Terms and
          Privacy Policy
        </p>
      </div>
      <div className="absolute top-[550px] mx-auto bg-white rounded-md shadow-xl flex flex-wrap justify-evenly gap-5 ml-20 mr-20 p-5">
      <div className="w-full flex justify-center mb-4">
    <h6 className="text-3xl">A program for engineers to master <b>Problem Solving & System Design </b></h6>
  </div>
  <div className="bg-[rgb(15,140,255)] p-4 mb-2 h-[250px] w-[350px] flex flex-col justify-center items-center">
    <img src={first} alt="first Image" className="mb-4  h-auto" />
    <p className="text-white text-2xl text-center"><b>Structured, industry vetted curriculum</b></p>
  </div>

  <div className="bg-[#ea576f] p-4 mb-2 h-[250px] w-[350px] flex flex-col justify-center items-center">
    <img src={Two} alt="first Image" className="mb-4 " />
    <p className="text-white text-xl text-center"><b className="text-2xl">Live classes by faculty</b> who have been there, done that</p>
  </div>

  <div className="bg-[#5cdb57] p-4 mb-2 h-[250px] w-[350px] flex flex-col justify-center items-center">
    <img src={Three} alt="first Image" className="mb-4 " />
    <p className="text-white text-center"><b className="text-xl">Practical experience through real-life projects</b></p>
  </div>

  <div className="bg-[rgb(88,163,233)] p-4 mb-2 h-[250px] w-[350px] flex flex-col justify-center items-center">
    <img src={Four} alt="first Image" className="mb-4 " />
    <p className="text-white text-2xl text-center"><b>Regular 1:1 mentorship from industry veterans</b></p>
  </div>

  <div className="bg-[#fca733] p-4 mb-2 h-[250px] w-[350px] flex flex-col justify-center items-center">
    <img src={Five} alt="first Image" className="mb-4 " />
    <p className="text-white text-2xl text-center"><b>Career support via a dedicated recruitment team, alumni network, etc.</b></p>
  </div>

  <div className="bg-[#a768d7] mb-2 h-[250px] w-[350px] flex flex-col justify-center items-center">
    <img src={Six} alt="first Image" className="mb-4" />
    <p className="text-white text-2xl text-center"><b>Aspirational peer group of 2,000+ Scaler students & alumni</b></p>
  </div>
</div>








    </div>
    <div className="relative  mx-auto bg-white rounded-md  flex flex-col items-center ">
    <h6 className="text-center mb-4 text-4xl  ">We have designed a <b>flexible program </b>for you</h6>
  
    <div className="flex flex-wrap justify-evenly gap-5 mb-4">
      <div className=" p-4 h-[200px] w-[300px] flex flex-col justify-center items-center border border-solid border-[#a9bad2] rounded-[1rem] m-5 ">
        <img src={Seven} alt="Image 1" className="" />
        <p className="text-black text-2xl text-center "><b>Missed a class?</b></p>
        <p className="text-center">Watch the recording later, with teaching assistants available to solve your doubts</p>
      </div>
  
      <div className=" p-4 h-[200px] w-[300px] flex flex-col justify-center items-center border border-solid border-[#a9bad2] rounded-[1rem] m-5">
        <img src={Eight} alt="Image 2" className="" />
        <p className="text-black text-2xl text-center "><b>Work / family needs time?</b></p>
        <p className="text-center">Pause your course and restart a month later with the next batch!</p>
      </div>
  
      <div className=" p-4 h-[200px] w-[300px] flex flex-col justify-center items-center border border-solid border-[#a9bad2] rounded-[1rem] m-5">
        <img src={Nine} alt="Image 3" className="" />
        <p className=" text-2xl text-center "><b>Jobs & class timings clash?</b></p>
        <p className="text-center">Decide your ideal class timing together with your classmates</p>
      </div>
    </div>
  
    <div className="flex flex-wrap justify-evenly gap-5">
      <div className=" p-4 h-[200px] w-[300px] flex flex-col justify-center items-center border border-solid border-[#a9bad2] rounded-[1rem] m-5">
        <img src={Ten} alt="Image 4" className="" />
        <p className="text-black text-2xl text-center "><b>Want to revise?</b></p>
        <p className="text-center">Access assignments/notes lifelong and recordings up to 6 months post course completion</p>
      </div>
  
      <div className=" p-4 h-[200px] w-[300px] flex flex-col justify-center items-center border border-solid border-[#a9bad2] rounded-[1rem] m-5">
        <img src={Eleven} alt="Image 5" className="" />
        <p className=" text-2xl text-center "><b>Have doubts?</b></p>
        <p className="text-center">Get them resolved over text / video by our expert teaching assistants!</p>
      </div>
    </div>
  </div>
  </>
  );
};

export default Hero;

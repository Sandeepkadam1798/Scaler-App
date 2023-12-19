import React, { useState } from "react";

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  let tabContent;

  if (activeTab === 1) {
    tabContent = (
      <div className="flex flex-wrap justify-evenly gap-5">
        <div>
          <ul>
            <div className="bg-[#cae0fe] h-20 w-[557px] flex flex-col justify-center items-center">
              <div className="mt-5">
                <h1 className="m">MODULE 1</h1>
              </div>
              <div className="flex justify-evenly items-center p-1">
                <h1>DSA: Introduction to Problem Solving</h1>
                <div className="mx-2"></div> {/* Add some space here */}
                <h1>2 Months</h1>
              </div>
            </div>

            <div className="bg-[#cae0fe] h-20 w-[557px] flex flex-col justify-center items-center mt-5">
              <div className="mt-5">
                <h1 className="m">MODULE 1</h1>
              </div>
              <div className="flex justify-evenly items-center p-1">
                <h1>DSA: Introduction to Problem Solving</h1>
                <div className="mx-2"></div> {/* Add some space here */}
                <h1>2 Months</h1>
              </div>
            </div>

            <div className="bg-[#cae0fe] h-20 w-[557px] flex flex-col justify-center items-center mt-5">
              <div className="mt-5">
                <h1 className="m">MODULE 1</h1>
              </div>
              <div className="flex justify-evenly items-center p-1">
                <h1>DSA: Introduction to Problem Solving</h1>
                <div className="mx-2"></div> {/* Add some space here */}
                <h1>2 Months</h1>
              </div>
            </div>

            <div className="bg-[#cae0fe] h-20 w-[557px] flex flex-col justify-center items-center mt-5">
              <div className="mt-5">
                <h1 className="m">MODULE 1</h1>
              </div>
              <div className="flex justify-evenly items-center p-1">
                <h1>DSA: Introduction to Problem Solving</h1>
                <div className="mx-2"></div> {/* Add some space here */}
                <h1>2 Months</h1>
              </div>
            </div>

            <div className="bg-[#cae0fe] h-20 w-[557px] flex flex-col justify-center items-center mt-5">
              <div className="mt-5">
                <h1 className="m">MODULE 1</h1>
              </div>
              <div className="flex justify-evenly items-center p-1">
                <h1>DSA: Introduction to Problem Solving</h1>
                <div className="mx-2"></div> {/* Add some space here */}
                <h1>2 Months</h1>
              </div>
            </div>

            <div className="bg-[#cae0fe] h-20 w-[557px] flex flex-col justify-center items-center mt-5">
              <div className="mt-5">
                <h1 className="m">MODULE 1</h1>
              </div>
              <div className="flex justify-evenly items-center p-1">
                <h1>DSA: Introduction to Problem Solving</h1>
                <div className="mx-2"></div> {/* Add some space here */}
                <h1>2 Months</h1>
              </div>
            </div>
            
          </ul>
        </div>

        <div className="bg-sky-500 h-[740px] w-[487px] p-4">
  <h1 className="text-white text-2xl mb-4 border-b pb-2">2 Months</h1>

      <ul className="list-disc pl-6 text-white">
      <li className="ml-0">Introduction to Problem Solving</li>
      </ul>
  <ul className="list-disc pl-6 text-white">
    
    <li>Introduction to Time Complexity Analysis</li>
    <li>Introduction to Basic Data Structures (1D and 2D Arrays, Strings, Hashmaps, Linked Lists, Trees)</li>
    <li>Introduction to Maths Problem Solving Patterns (Modular Arithmetic, Powers)</li>
    <li>Introduction to Bit Manipulation</li>
    <li>Introduction to Problem Solving Techniques (Prefix, Sliding Windows, Subarrays, Subsets, Subsequences, Sorting, Hashing, Recursion)</li>
    <li className="border-b">Basic OOP For Problem Solving</li>
  </ul>

  <p className="text-white mt-4">
    <strong>Read Next:</strong> Module 2 - DSA: Data Structures and Algorithms
  </p>
</div>

      </div>
    );
  } else if (activeTab === 2) {
    tabContent = (
      <div>
        <h2 className="text-xl font-semibold mb-2">MODULE - 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          molestias obcaecati distinctio architecto voluptates quibusdam alias
          id culpa fuga libero consequatur quas officiis voluptatum in, atque
          veritatis magnam animi mollitia?
        </p>
      </div>
    );
  } else if (activeTab === 3) {
    tabContent = (
      <div>
        <h2 className="text-xl font-semibold mb-2">MODULE - 3</h2>
        <p>Sandeep</p>
      </div>
    );
  }

  return (
    <>
      <section id="Curriculum">
        <div className="p-4 bg-blue-100 ">
          <h1 className="text-3xl  mb-4">
            <b>Curriculum</b> is designed to make you a <b>solid engineer</b>
          </h1>

          <div className="flex justify-center h-20 gap-10 ">
            <button
              className={`relative w-[405px] rounded-sm overflow-hidden group ${
                activeTab === 1 ? "bg-[#cae0fe]" : "bg-white"
              } w-60`}
              onClick={() => changeTab(1)}
            >
              <span className="block py-2 px-4 rounded-full text-2xl">
                Beginner
              </span>
              <span className="block ">11.5 Months</span>
              <div className="absolute top-0 right-0 h-full w-20">
                <div className="h-full w-full flex justify-center items-center">
                  <div
                    className={`w-10 h-10 rounded-full border border-gray-500 ${
                      activeTab === 1 ? "bg-blue-500" : "bg-white"
                    }`}
                  ></div>
                </div>
              </div>
            </button>

            <button
              className={`relative overflow-hidden w-[405px]  group ${
                activeTab === 2 ? "bg-[#cae0fe]" : "bg-white"
              } w-60`}
              onClick={() => changeTab(2)}
            >
              <span className="block py-2 px-4 rounded-full text-2xl">
                Intermediate
              </span>
              <div className="absolute top-0 right-0 h-full w-20">
                <div className="h-full w-full flex justify-center items-center">
                  <div
                    className={`w-10 h-10 rounded-full border border-gray-500 ${
                      activeTab === 2 ? "bg-blue-500" : "bg-white"
                    }`}
                  ></div>
                </div>
              </div>
            </button>

            <button
              className={`relative overflow-hidden w-[405px] group ${
                activeTab === 3 ? "bg-[#cae0fe]" : "bg-white"
              } w-60`}
              onClick={() => changeTab(3)}
            >
              <span className="block py-2 px-4 rounded-full text-2xl">
                Advanced
              </span>
              <div className="absolute top-0 right-0 h-full w-20">
                <div className="h-full w-full flex justify-center items-center">
                  <div
                    className={`w-10 h-10 rounded-full border border-gray-500 ${
                      activeTab === 3 ? "bg-blue-500" : "bg-white"
                    }`}
                  ></div>
                </div>
              </div>
            </button>
          </div>

          <div className="mt-4">{tabContent}</div>
        </div>
      </section>
    </>
  );
};

export default Curriculum;

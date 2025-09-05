import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { getAuthUser } from "../store/slices/auth";

const LandingPage = () => {
  const [option, setOption] = useState(null);
  const dispatch = useDispatch()
  useEffect( ()=>{
    dispatch(getAuthUser())
  },[])
  return (
    <main className="raltive px-10 md:px-20 h-screen md:grid md:grid-flow-col  ">
      {/* LEFT SIDE  */}
      <div className="py-20 md:w-3/6">
        <div className="flex flex-col gap-16 h-full ">
          <div className="font-semibold text-5xl text-black flex justify-center w-full">
            Find Real Estate & Get Your Dream Place
          </div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </div>
          <div className="space-y-1">
          <div className="w-[11rem] flex justify-between">
            <button
              onClick={(e) => {
                setOption(e.target.name);
              }}
              name="buy"
              className={`btn  ${
                option === "buy" ? "bg-cyan-800 text-white" : "btn-outline"
              } w-20`}
            >
              buy
            </button>
            <button
              onClick={(e) => setOption(e.target.name)}
              name="rent"
              className={`btn  ${
                option === "rent" ? "bg-cyan-800 text-white" : "btn-outline"
              } w-20`}
            >
              rent
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full md:flex-row ">
            <input
              type="text"
              placeholder="city"
              className="input w-full h-[3rem] md:h-[5rem] input-neutral"
            />
            <input
              type="text"
              placeholder="min price"
              className="input w-full h-[3rem] md:h-[5rem] input-neutral"
            />
            <input
              type="text"
              placeholder="max price"
              className="input w-full h-[3rem] md:h-[5rem] input-neutral"
            />
            <Link to={'/posts'} className="btn w-full md:w-1/6 md:h-[5rem]  rounded-b-md hover:bg-cyan-700 bg-cyan-800 text-base-200">
              <img className="w-[1.3rem]" src="/search.png" alt="search" />
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE  */}
      <img className="hidden md:block absolute  right-20 lg:right-22 lg:top-25 w-[20rem] lg:w-[25rem] xl:w-[30rem] " src="/bg.png" alt="" />
    </main>
  );
};

export default LandingPage;

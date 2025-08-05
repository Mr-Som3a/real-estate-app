import React from "react";

const LandingPage = () => {
  return (
    <main className="p-10 h-screen ">
      <div className="flex flex-col">
        <div className="text-5xl mb-28 text-black flex justify-center w-full">
          Find Real Estate & Get Your Dream Place
        </div>
        <div className=" mb-28">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo
          suscipit cum eius, iure est nulla animi consequatur facilis id
          pariatur fugit quos laudantium temporibus dolor ea repellat provident
          impedit!
        </div>
        <div className="flex flex-col gap-3 w-full">
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
          <input
            type="text"
            placeholder="city"
            class="input w-4/6 input-neutral"
          />
          <input
            type="text"
            placeholder="min price"
            class="input w-4/6 input-neutral"
          />
          <input
            type="text"
            placeholder="max price"
            class="input w-4/6 input-neutral"
          />
          <button className="btn rounded-b-md hover:bg-cyan-700 bg-cyan-800 text-base-200  w-4/6">
            Search
          </button>
        </div>
      </div>
      <div className="w-[40rem] bg-cyan-400 opacity-30">
        
      </div>
    </main>
  );
};

export default LandingPage;

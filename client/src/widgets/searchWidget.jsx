import React from "react";

const SearchWidget = () => {
  return (
    <>
      <h3 className="text-2xl mb-4">Search results for</h3>
      <div className="h-[12rem] space-y-2 ">
        <div className="">
          <label htmlFor="city">Location</label>
          <input
            className="btn text-start w-full outline-1 bg-transparent"
            type="text"
            name="city"
            placeholder="City Location"
          />
        </div>
        <div className="flex gap-x-2 items-center flex-wrap">
          <div className="flex flex-col">
            <label className="text-[14px]" htmlFor="type">
              Type
            </label>
            <select
              className="w-[6rem] h-[2.5rem] border-1 rounded-md p-1"
              name="type"
              id="#type"
            >
              <option value>any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-[14px]" htmlFor="type">
              Property
            </label>
            <select
              className="w-[6rem] h-[2.5rem] border-1 rounded-md p-1"
              name="type"
              id="#type"
            >
              <option value>any</option>
              <option value="buy">Apartment</option>
              <option value="rent">House</option>
              <option value="rent">Condo</option>
              <option value="rent">Land</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-[14px]" htmlFor="type">
              Min Price
            </label>
            <input
              className="w-[6rem] h-[2.5rem] border-1 rounded-md p-1"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[14px]" htmlFor="type">
              Max Price
            </label>
            <input
              className="w-[6rem] h-[2.5rem] border-1 rounded-md p-1"
              type="text"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-[14px]" htmlFor="type">
              Bedroom
            </label>
            <input
              placeholder="any"
              className="w-[6rem] h-[2.5rem] border-1 rounded-md p-1"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchWidget;

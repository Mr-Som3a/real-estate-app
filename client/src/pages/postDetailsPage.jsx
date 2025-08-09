import { useState } from "react";
import { useLocation } from "react-router-dom";

const PostDetails = () => {
    const location = useLocation();
  const { post } = location.state || {};
  const [index, setIndex]=useState(0)

  const handleClick = (item)=>{
    const images = [...post.images]
    const newIndex = images.indexOf(item)
    setIndex(newIndex)
  }
  if (post) {
    return (
      <div className=" flex flex-col items-center px-10 gap-y-10 md:flex-row md:items-start md:space-x-10 my-20 md:mx-auto lg:m-20">
        <section>
          <div className="">
            <div className=" w-96 mb-4 ">
              <img className="shadow-xl rounded-2xl" src={post.images[index]} />
            </div>
          </div>
          <div className="flex space-x-4 ">
            {post.images.map((item) => (
              <div role="button" key={item} className="avatar">
                <button
                  onClick={() => handleClick(item)}
                  className=" transition duration-300 ease-in-out hover:shadow-teal-800 hover:shadow-md rounded-xl w-20"
                >
                  <img className="rounded-lg" src={item} />
                </button>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h1 className="text-4xl mb-4 font-bold">{post.title}</h1>
          <p className=" text-lg font-semibold">Property type: <span>{post.property}</span></p>
          <p className=" text-lg font-semibold">Type: <span>{post.type}</span></p>
          <p className=" text-lg font-semibold">City: <span>{post.city}</span></p>
          <div className="text-xl font-semibold"> Price : {post.price}$</div>
          <h2 className="text-2xl my-2">Description</h2>
          <p className="text-lg">{post.text}
            <ul className="block">It Contains :</ul>
            <li className="">{post.bedroom} bedroom</li>
            <li className="">{post.bathroom} bathroom</li>
          </p>
          <div className="flex space-x-4 flex-wrap   mt-8">
            {/* <AddToCart
              item={{ id: post.id, item: post, quantity: 1 }}
              style="btn-outline max-w-56"
            >
              Add To Cart
            </AddToCart>
            <AddToCart
              item={{ id: post.id, item: post, quantity: 1 }}
              style="btn-info max-w-56"
            >
              Buy Now
            </AddToCart> */}
          </div>
          <div className="my-4 text-sm link text-slate-500 underline underline-offset-1">
            delivery Terms & Condition
          </div>
          <div className="my-2 font-semibold ">Secure your payment</div>
          <div className="flex my-3 space-x-4">
            <img src="/mastercard.svg" alt="masterCard" />
            <img src="/visa.svg" alt="localBank" />
            <img src="/paypal.svg" alt="visa" />
          </div>
          <div className="card-bordered border-2 p-4 rounded-lg">
            <div className="font-bold">
              <img
                className="inline-block"
                src="/return.svg"
                alt="return-cashback-money"
              />
              Return
            </div>
            <div>
              You have 60 days to return the item(s) using any of the following
              methods:
            </div>
            <div>
              <img className="inline-block" src="/dot.svg" alt="" />
              Free store return
            </div>
            <div>
              <img className="inline-block" src="/dot.svg" alt="" />
              Free returns via USPS Dropoff Service
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <>not foound</>;
  }
};

export default PostDetails;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Bed, Home, DollarSign } from "lucide-react";

const PostWidget = ({ posts:estates ,setSelectedEstate}) => {
  const navigate=useNavigate()
  return (
  <>
  {/* Real Estate Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {estates.map((estate) => (
            <div
              key={estate.id}
              className="card bg-base-100 shadow hover:shadow-lg cursor-pointer transition"
              onClick={() => {
                setSelectedEstate(estate) 
                
              }}>
              <div className="rounded-t-xl overflow-hidden h-40">
                        <img src={estate.images[0]} className="w-full h-full object-cover" alt="Property Image"/>
                    </div>
              <div className="card-body">
                <h3 className="card-title">{estate.title}</h3>
                <p className="flex items-center gap-2 text-sm">
                  <MapPin size={16} /> {estate.city}
                </p>
                <p className="flex items-center gap-2">
                  <DollarSign size={16} /> {estate.price}
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <Bed size={16} /> {estate.bedrooms} Bedrooms
                </p>
                <span className="badge badge-outline">{estate.type}</span>
                <Link to={"/postDetails"} className="btn bg-teal-600" state={estate}>
                 Details
               </Link>
              </div>
            </div>
          ))}
        </div>
  </>
  );
};

export default PostWidget;

    // <>
    //   {posts.map((post) => (
    //     <div key={post.id} className="card card-side bg-base-100 shadow-sm">
    //       <figure className="">
    //         <img
    //           className="p-3 rounded-2xl w-[20rem] h-auto "
    //           src={post.images[0] || "https://static.thenounproject.com/png/737043-200.png"}
    //           alt="Movie"
    //         />
    //       </figure>
    //       <div className="card-body">
    //         <h2 className="card-title">{post.title}</h2>
    //         <div className="text-xl">
    //           Pirce: <span className="text-red-500">{post.price}$</span>{" "}
    //         </div>
    //         <p className="textarea-md">{post.text}</p>
    //         <p className="text-blue-950 font-semibold">City: {post.city}</p>
    //         <div className="card-actions justify-end">
    //           <Link to={"/postDetails"} className="btn btn-primary" state={{post}}>
    //             Details
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </>
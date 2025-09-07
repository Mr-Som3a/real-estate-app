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

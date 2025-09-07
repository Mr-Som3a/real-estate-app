import React, { useEffect, useState } from "react";
import PostWidget from "../widgets/postWidget";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/slices/post";
import LoadingSpinner from "../component/loadingSpinner";
import { Bed, DollarSign, MapPin } from "lucide-react";
import EstateMap from "../component/estateMap";
const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
const [selectedEstate, setSelectedEstate] = useState(null)
  return (
    <>
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* LEFT SIDE */}
      <div className="lg:col-span-2 space-y-6">
        {/* Search Bar */}
        <div className="card bg-base-100 shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Search results for</h2>
          <div className="flex flex-wrap gap-2">
            <input type="text" placeholder="City Location" className="input input-bordered flex-1" />
            <select className="select select-bordered">
              <option>any</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
            <input type="number" placeholder="Min Price" className="input input-bordered w-28" />
            <input type="number" placeholder="Max Price" className="input input-bordered w-28" />
            <input type="number" placeholder="Bedrooms" className="input input-bordered w-24" />
          </div>
        </div>

          {/* Todo enhance UX */}
          {!posts ? <div>Not Posts founds!</div> :
            (posts.length === 0 && <LoadingSpinner />) || <PostWidget setSelectedEstate={setSelectedEstate} posts={posts} />}
        
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">
        {/* Map Section */}
        <div className="card bg-base-100 shadow-md ">
          <div className="card-body">
            <h3 className="card-title">Map</h3>
            <div className="flex items-center justify-center  text-gray-400">
              {/* 🗺️ Map Placeholder */}

              <EstateMap posts={posts} />
            </div>
          </div>
        </div>

        {/*  Selected Estate Widget */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title border-b pb-2">Selected Property</h3>
            {selectedEstate ? (
              <div className="mt-4">
                <div className="rounded-t-xl mb-2 overflow-hidden h-40">
                        <img src={selectedEstate.images[0]} className="w-full h-full object-cover" alt="Property Image"/>
                    </div>
                <h4 className="font-bold">{selectedEstate.title}</h4>
                <p className="flex items-center gap-2 text-sm">
                  <MapPin size={16} /> {selectedEstate.city}
                </p>
                <p className="flex items-center gap-2">
                  <DollarSign size={16} /> {selectedEstate.price}
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <Bed size={16} /> {selectedEstate.bedrooms} Bedrooms
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-500 mt-2">Select a property to see details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  

    </>

    
  );
};

export default PostsPage;



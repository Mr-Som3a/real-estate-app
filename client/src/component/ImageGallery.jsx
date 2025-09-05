import React, { useState } from 'react'
import {motion } from "framer-motion"
 const ImageGallery = ({property}) => {
      const [activeImage, setActiveImage] = useState(0);
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="card bg-base-100 shadow-xl">
              <div className="card-body p-3 md:p-4">
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden">
                  <img src={property.images[activeImage]} alt="Property" className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {property.images.map((img, idx) => (
                    <button key={idx} className={`rounded-xl overflow-hidden border ${activeImage === idx ? "ring ring-primary" : "border-base-300"}`} onClick={() => setActiveImage(idx)}>
                      <img src={img} alt={`Preview ${idx + 1}`} className="h-16 w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
  )
}

export default ImageGallery
import { useMemo, useState } from "react";
import { MapPin, BedDouble, Bath, Ruler, Home, Heart, Share2, CheckCircle2, ShieldCheck, Car, Leaf } from "lucide-react";
import {demoProperty} from '../demo.js'
import AgentWidget from '../widgets/agentWidget.jsx'
import ImageGallery from "../component/ImageGallery.jsx";
import MortgageCard from "../widgets/mortgageCard.jsx";
import { useLocation } from "react-router-dom";


// --- Map component (simple, drop-in). Replace with your preferred map later.
function PropertyMap({ lat, lng, address }) {
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lng}`;
  return (
    <div className="w-full h-72 rounded-2xl overflow-hidden border border-base-300">
      <iframe title={`Map of ${address || "property"}`} className="w-full h-full" src={src} />
    </div>
  );
}

function formatAED(n) {
  return new Intl.NumberFormat("en-AE", { style: "currency", currency: "AED", maximumFractionDigits: 0 }).format(n);
}

export default function PostDetails() {
  const estate = useLocation().state || demoProperty
  const [favorited, setFavorited] = useState(false);
  
  
console.log(estate)
  const pricePerSqft = useMemo(() => Math.round(estate.price / estate.areaSqft), [estate]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // Simple toast using daisyUI alert
      const el = document.getElementById("copy-toast");
      if (el) {
        el.classList.remove("hidden");
        setTimeout(() => el.classList.add("hidden"), 1500);
      }
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 lg:px-6 py-6">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li><a>Home</a></li>
            <li><a>Properties</a></li>
            <li>{estate.type}</li>
          </ul>
        </div>

        {/* Title & Actions */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="badge badge-primary bg-teal-600 badge-lg">{estate.status}</span>
              <span className="badge badge-ghost">{estate.type}</span>
              <span className="badge badge-ghost">Built {estate.yearBuilt}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">{estate.title}</h1>
            <p className="mt-1 flex items-center gap-2 text-base-content/70"><MapPin className="w-4 h-4" /> {estate.address}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className={`btn btn-circle ${favorited ? "btn-secondary" : "btn-ghost"}`} aria-label="Save" onClick={() => setFavorited((v) => !v)}>
              <Heart className="w-5 h-5" />
            </button>
            <button className="btn btn-ghost btn-circle" aria-label="Share" onClick={copyLink}>
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sticky Price Bar on desktop */}
        <div className="mb-4">
          <div className="flex items-end gap-3">
            <div className="text-3xl md:text-4xl font-extrabold">{formatAED(estate.price)}</div>
            <div className="text-base-content/70">({pricePerSqft} AED/sqft)</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Gallery + Details */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Image Gallery */}
            <ImageGallery property={estate} />

            {/* Key Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="stat bg-base-100 rounded-2xl shadow-sm">
                <div className="stat-figure text-primary"><BedDouble className="w-6 h-6" /></div>
                <div className="stat-title">Bedrooms</div>
                <div className="stat-value text-xl">{estate.beds}</div>
              </div>
              <div className="stat bg-base-100 rounded-2xl shadow-sm">
                <div className="stat-figure text-primary"><Bath className="w-6 h-6" /></div>
                <div className="stat-title">Bathrooms</div>
                <div className="stat-value text-xl">{estate.baths}</div>
              </div>
              <div className="stat bg-base-100 rounded-2xl shadow-sm">
                <div className="stat-figure text-primary"><Ruler className="w-6 h-6" /></div>
                <div className="stat-title">Area</div>
                <div className="stat-value text-xl">{estate.areaSqft}</div>
                <div className="stat-desc">sqft</div>
              </div>
              <div className="stat bg-base-100 rounded-2xl shadow-sm">
                <div className="stat-figure text-primary"><Home className="w-6 h-6" /></div>
                <div className="stat-title">Type</div>
                <div className="stat-value md:text-sm text-xl">{estate.type}</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div role="tablist" className="tabs tabs-bordered">
                  <a role="tab" className="tab tab-active" id="tab-overview">Overview</a>
                  <a role="tab" className="tab" id="tab-features">Features</a>
                  <a role="tab" className="tab" id="tab-map">Map</a>
                </div>
                {/* Panels */}
                <div className="mt-4">
                  {/* Overview */}
                  <div id="panel-overview" aria-labelledby="tab-overview" className="prose max-w-none">
                    <p>{estate.description}</p>
                    <ul>
                      {estate.nearby.map((n, i) => (
                        <li key={i}>{n}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div id="panel-features" aria-labelledby="tab-features" className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {estate.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 rounded-xl border border-base-300">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span>{f}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2 p-3 rounded-xl border border-base-300">
                        <ShieldCheck className="w-5 h-5" /> 24/7 Security
                      </div>
                      <div className="flex items-center gap-2 p-3 rounded-xl border border-base-300">
                        <Car className="w-5 h-5" /> Covered Parking
                      </div>
                      <div className="flex items-center gap-2 p-3 rounded-xl border border-base-300">
                        <Leaf className="w-5 h-5" /> Energy Efficient
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div id="panel-map" aria-labelledby="tab-map" className="mt-4">
                    <PropertyMap lat={estate.lat} lng={estate.lng} address={estate.address} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6 flex flex-col gap-6">
              {/* Agent Card */}
              <AgentWidget property={estate} />

              {/* Quick Mortgage Estimator */}
              <MortgageCard price={estate.price} />
            </div>
          </div>
        </div>
      </div>

      {/* Copy toast */}
      <div id="copy-toast" className="toast toast-end hidden">
        <div className="alert alert-success">
          <span>Link copied!</span>
        </div>
      </div>
    </div>
  );
}

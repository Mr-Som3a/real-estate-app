import React, { useState } from "react";
import { Phone, Mail, Calendar } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";
const AgentWidget = ({ property }) => {

  const [tourDate, setTourDate] = useState("");
  const [tourTime, setTourTime] = useState("");
  const [agent, setAgent] = useState(property.agent);
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        import.meta.env.VITE_API_URL + "/api/agents/" + property.agentId
      );
      setAgent(data);
    };
    fetch();
  }, [property]);

  return (
    <>
      {/* Agent Card */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={agent?.avatar} alt={agent?.name} />
              </div>
            </div>
            <div>
              <div className="font-semibold">{agent?.name}</div>
              <div className="text-sm text-base-content/70">
                {agent?.company}
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <a className="btn btn-outline w-full" href={`tel:${agent?.phone}`}>
              <Phone className="w-4 h-4" /> Call
            </a>
            <a
              className="btn btn-outline w-full"
              href={`mailto:${agent?.email}`}
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>

          <div className="divider my-4">Schedule a Tour</div>

          <form
            className="form-control space-y-2 gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="input input-bordered w-full flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <input
                type="date"
                className="grow"
                value={tourDate}
                onChange={(e) => setTourDate(e.target.value)}
              />
            </label>
            <label className="input input-bordered w-full flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <input
                type="time"
                className="grow "
                value={tourTime}
                onChange={(e) => setTourTime(e.target.value)}
              />
            </label>
            <button className="btn bg-teal-600 w-full">Request Tour</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AgentWidget;

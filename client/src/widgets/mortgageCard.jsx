import { useMemo, useState } from "react";


function formatAED(n) {
  return new Intl.NumberFormat("en-AE", { style: "currency", currency: "AED", maximumFractionDigits: 0 }).format(n);
}
export default function MortgageCard({ priceAED }) {
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(4.5);
  const [years, setYears] = useState(25);

  const { monthly } = useMemo(() => {
    const P = priceAED * (1 - down / 100);
    const r = rate / 100 / 12;
    const n = years * 12;
    const m = r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
    return { monthly: m };
  }, [priceAED, down, rate, years]);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">Mortgage Estimator</h3>
        <div className="grid grid-cols-3 gap-2">
          <label className="form-control">
            <div className="label"><span className="label-text">Down %</span></div>
            <input type="number" min={0} max={90} className="input input-bordered" value={down} onChange={(e) => setDown(Number(e.target.value))} />
          </label>
          <label className="form-control">
            <div className="label"><span className="label-text">Rate %</span></div>
            <input type="number" step="0.1" min={0} className="input input-bordered" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
          </label>
          <label className="form-control">
            <div className="label"><span className="label-text">Years</span></div>
            <input type="number" min={1} className="input input-bordered" value={years} onChange={(e) => setYears(Number(e.target.value))} />
          </label>
        </div>
        <div className="mt-3 p-3 rounded-xl bg-base-200 flex items-baseline justify-between">
          <span className="text-base-content/70">Estimated monthly</span>
          <span className="text-xl font-bold">{formatAED(monthly)}</span>
        </div>
      </div>
    </div>
  );
}
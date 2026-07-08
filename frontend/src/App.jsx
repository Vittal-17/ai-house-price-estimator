import { useState } from "react";
import api from "./services/api";
import InputField from "./components/InputField";
import PredictionCard from "./components/PredictionCard";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

function App() {
  const [formData, setFormData] = useState({
    MedInc: "",
    HouseAge: "",
    AveRooms: "",
    AveBedrms: "",
    Population: "",
    AveOccup: "",
    Latitude: "",
    Longitude: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loadSampleData = () => {

    setFormData({

        MedInc: "8.3252",
        HouseAge: "41",
        AveRooms: "6.984127",
        AveBedrms: "1.02381",
        Population: "322",
        AveOccup: "2.555556",
        Latitude: "37.88",
        Longitude: "-122.23",

    });
toast("🧪 Demo data loaded!");
};

const clearForm = () => {

setPrediction(null);

setFormData({

MedInc:"",
HouseAge:"",
AveRooms:"",
AveBedrms:"",
Population:"",
AveOccup:"",
Latitude:"",
Longitude:"",

});
toast("🗑️ Form cleared!");
};

  const handleSubmit = async () => {
    const hasEmptyField = Object.values(formData).some(
      (value) => value === ""
    );

    if (hasEmptyField) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/predict", {
        MedInc: Number(formData.MedInc),
        HouseAge: Number(formData.HouseAge),
        AveRooms: Number(formData.AveRooms),
        AveBedrms: Number(formData.AveBedrms),
        Population: Number(formData.Population),
        AveOccup: Number(formData.AveOccup),
        Latitude: Number(formData.Latitude),
        Longitude: Number(formData.Longitude),
      });

      setPrediction(response.data.predicted_price);
      toast.success("Prediction generated successfully!");
      setHistory((prev) => [
    response.data.predicted_price,
    ...prev,
].slice(0, 5));
    } catch (error) {
      console.error(error);

      toast.error("Unable to connect to the prediction server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      relative
      overflow-hidden
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-indigo-950
      flex
      items-start
      justify-center
      py-16
      px-6
    "
    >
      {/* Background Glow Effects */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>

      <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"></div>

      {/* Main Card */}

      <div
        className="
        relative
        w-full
        max-w-5xl
        rounded-3xl
        border
        border-white/10
        bg-white/10
        backdrop-blur-xl
        p-8
        md:p-10
        shadow-2xl
        transition-all
        duration-500
        hover:scale-[1.01]
        hover:shadow-blue-500/20
      "
      >
        <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
          🏠 AI/ML House Price Predictor
        </h1>

        <p className="mt-4 text-center text-sm text-slate-300 md:text-lg">
          Predict California house prices using Machine Learning &
          Random Forest
        </p>

        {/* Tech Badges */}

          <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
            ⚛ React
          </span>

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
            🤖 Machine Learning
          </span>

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
            🌲 Random Forest
          </span>

          <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
            ⚡ FastAPI
          </span>
        </div>

        {/* Inputs */}

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <InputField
            label="💰 Median Income"
            name="MedInc"
            value={formData.MedInc}
            placeholder="Example: 8.3252"
            onChange={handleChange}
          />

          <InputField
            label="🏠 House Age"
            name="HouseAge"
            value={formData.HouseAge}
            placeholder="Example: 41"
            onChange={handleChange}
          />

          <InputField
            label="🛏 Average Rooms"
            name="AveRooms"
            value={formData.AveRooms}
            placeholder="Example: 6.98"
            onChange={handleChange}
          />

          <InputField
            label="🚪 Average Bedrooms"
            name="AveBedrms"
            value={formData.AveBedrms}
            placeholder="Example: 1.02"
            onChange={handleChange}
          />

          <InputField
            label="👨‍👩‍👧 Population"
            name="Population"
            value={formData.Population}
            placeholder="Example: 322"
            onChange={handleChange}
          />

          <InputField
            label="🏘 Average Occupancy"
            name="AveOccup"
            value={formData.AveOccup}
            placeholder="Example: 2.55"
            onChange={handleChange}
          />

          <InputField
            label="📍 Latitude"
            name="Latitude"
            value={formData.Latitude}
            placeholder="Example: 37.88"
            onChange={handleChange}
          />

          <InputField
            label="🌍 Longitude"
            name="Longitude"
            value={formData.Longitude}
            placeholder="Example: -122.23"
            onChange={handleChange}
          />

        </div>

        {/* Predict Button */}
      
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`
            mt-10
            w-full
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            py-4
            text-lg
            font-semibold
            text-white
            transition-all
            duration-300

            ${
              loading
                ? "cursor-not-allowed opacity-60"
                : "cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30"
            }
          `}
        >
          {loading ? (

<div className="flex items-center justify-center gap-2">

<Loader2 className="animate-spin" size={20} />

AI is Thinking...

</div>

) : (

"🚀 Predict House Price"

)}
        </button>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={loadSampleData}
          className="
          mt-4
          w-full
          border
          rounded-xl
          bg-white/5
          border-white/10
          text-white
          py-3
          hover:bg-white/10
          transition-all
          cursor-pointer
          "
        >
          🧪 Load Sample Data
        </button>
        <button
onClick={clearForm}
className="
mt-4
w-full
rounded-xl
border
border-red-500/20
bg-red-500/10
py-3
text-red-300
transition-all
hover:bg-red-500/20
"
>

🗑 Clear Form

</button></div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Enter the house details above and click Predict to estimate
          its market value.
        </p>

        <PredictionCard prediction={prediction} />
        
        {history.length > 0 && (

<div className="mt-8">

<h3 className="mb-3 text-lg font-semibold text-white">
📜 Recent Predictions
</h3>

<div className="space-y-2">

{history.map((price, index)=>(

<div
key={index}
className="rounded-lg bg-white/5 p-3 text-slate-300"
>

{price.toLocaleString("en-US",{
style:"currency",
currency:"USD",
})}



</div>


))}
<div className="mt-6 rounded-xl bg-white/5 p-4">

<h3 className="text-white font-semibold">

📊 Model Information

</h3>

<div className="mt-3 grid grid-cols-2 gap-4 text-slate-300">

<div>

<p>Algorithm</p>

<p className="font-semibold">
Random Forest
</p>

</div>

<div>

<p>R² Score</p>

<p className="font-semibold">
80.62%
</p>

</div>

<div>

<p>MAE</p>

<p className="font-semibold">
0.326
</p>

</div>

<div>

<p>Dataset</p>

<p className="font-semibold">
California Housing
</p>

</div>

</div>

</div>
</div>

</div>

)}

      </div>
      
    </div>
  );
}

export default App;
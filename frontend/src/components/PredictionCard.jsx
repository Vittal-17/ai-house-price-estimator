<p className="mt-10 text-center text-sm text-slate-400">
    Enter the house details above and click Predict to estimate its market value.
</p>
import { motion } from "framer-motion";
function PredictionCard({ prediction }) {

    // Don't show the card until we have a prediction
    if (prediction === null) {
        return null;
    }

    // Convert USD to INR (Approximate exchange rate)
    const inr = prediction * 85;

    const crore = (inr / 10000000).toFixed(2);

    return (
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
>
        <div
            className="
                mt-8
                rounded-2xl
                border border-emerald-500/20
                bg-emerald-500/10
                p-6
                text-center
                transition-all
                duration-500
            "
        >
            <p className="text-slate-300 text-lg">
                ✨ AI Estimated Price
            </p>

            <h2 className="mt-3 text-4xl font-bold text-emerald-400">
                {prediction.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}
            </h2>

            <p className="mt-3 text-lg text-slate-300">
                ≈ ₹{crore} Crore
            </p>

            <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm text-slate-400">
                    🤖 Powered by Random Forest • Built by Vittal J G   
                </p>

                <p className="mt-1 text-xs text-slate-500">
                    Model Performance:

                    R² Score: 80.62%
                    MAE: 0.326  
                </p>
            </div>
        </div>
        </motion.div>
    );
}

export default PredictionCard;
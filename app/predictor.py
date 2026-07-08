import joblib
import pandas as pd
from pathlib import Path

# Base project directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Load model and feature names
MODEL_PATH = BASE_DIR / "models" / "house_price_model.pkl"
FEATURE_PATH = BASE_DIR / "models" / "feature_names.pkl"

model = joblib.load(MODEL_PATH)
feature_names = joblib.load(FEATURE_PATH)


def predict_house_price(data: dict):
    """
    Predict house price from input features.
    """

    df = pd.DataFrame([data])

    # Ensure correct column order
    df = df[feature_names]

    prediction = model.predict(df)

    # Model returns value in units of $100,000
    return float(prediction[0] * 100000)
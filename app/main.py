from fastapi import FastAPI
from app.schemas import HouseData
from app.predictor import predict_house_price
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="California House Price Predictor API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "House Price Predictor API is running!"
    }


@app.post("/predict")
def predict(data: HouseData):

    prediction = predict_house_price(data.model_dump())

    return {
        "predicted_price": round(prediction, 2)
    }
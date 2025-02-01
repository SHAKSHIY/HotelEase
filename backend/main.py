# Backend: FastAPI Chatbot with TBO API & Gemini AI

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import requests
import google.generativeai as genai
import os

# Load environment variables
load_dotenv()
TBO_BASE_URL = "http://api.tbotechnology.in/TBOHolidays_HotelAPI"
TBO_USERNAME = "hackathontest"
TBO_PASSWORD = "Hac@98910186"
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)

app = FastAPI()

# CORS Middleware to allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def search_hotels(checkin, checkout, hotel_codes, nationality, adults, children):
    """Fetch hotel availability from TBO API"""
    url = f"{TBO_BASE_URL}/Search"
    headers = {"Content-Type": "application/json"}
    auth = (TBO_USERNAME, TBO_PASSWORD)
    payload = {
        "CheckIn": checkin,
        "CheckOut": checkout,
        "HotelCodes": hotel_codes,
        "GuestNationality": nationality,
        "PaxRooms": [{"Adults": adults, "Children": children, "ChildrenAges": [5] if children else []}],
        "ResponseTime": 23.0,
        "IsDetailedResponse": False,
        "Filters": {"Refundable": False, "NoOfRooms": 1, "MealType": "All"}
    }
    response = requests.post(url, json=payload, headers=headers, auth=auth)
    return response.json()

@app.post("/chatbot")
async def chatbot(request: Request):
    """Chatbot response with hotel data in JSON format"""
    data = await request.json()
    user_input = data.get("message")
    
    if not user_input:
        return {"error": "No user input provided"}
    
    try:
        model = genai.GenerativeModel("gemini-pro")
        response = model.generate_content(user_input)

        # Simulated hotel response from TBO API
        hotels = [
            {
                "name": "Grand Royal Hotel",
                "location": "Mumbai, India",
                "price": "7500",
                "image": "https://example.com/hotel1.jpg"
            },
            {
                "name": "Elite Palace",
                "location": "Delhi, India",
                "price": "9000",
                "image": "https://example.com/hotel2.jpg"
            },
            {
                "name": "Ocean View Resort",
                "location": "Goa, India",
                "price": "6800",
                "image": "https://example.com/hotel3.jpg"
            }
        ]
        
        # Return hotel details if the user asks for hotels
        if "hotel" in user_input.lower() or "stay" in user_input.lower():
            return {"hotels": hotels}
        
        return {"response": response.text}
    
    except Exception as e:
        return {"error": str(e)}

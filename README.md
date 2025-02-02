# HotelEase - AI-Powered Hotel Booking Chatbot

# Overview

HotelEase is an AI-driven chatbot designed to simplify hotel search and booking processes. It offers real-time hotel recommendations based on user preferences like location, budget, check-in/out dates, and number of guests. Additionally, it provides travel itinerary suggestions, making trip planning seamless.

# Features

Conversational Hotel Booking: Users can search for hotels via chat.

Personalized Recommendations: AI-driven hotel suggestions based on user preferences.

Instant Booking

My Bookings Management: Users can view, modify, or cancel bookings.

Travel Itinerary Suggestions: AI recommends must-visit places for a chosen destination.

Text Support: Users can interact with the chatbot using text commands.

# Technology Stack

# Frontend

React.js (User Interface)

CSS (Styling)

# Backend

Node.js & Express.js (Server & API Handling)

MongoDB (Database for storing user bookings & preferences)

# AI & NLP

Gemini / Dialogflow (Chatbot AI for NLP Processing)

Sentiment Analysis for user interactions

# API Integrations

TBO API (Fetching real-time hotel data)

# 📂 Project Structure

HotelEase/
│── src/
│   ├── components/
│   │   ├── Chatbot.jsx  # Chatbot UI Component
│   │   ├── Navbar.jsx      # Navigation Bar
│   │   ├── ExploreRooms.jsx
│   │   ├── Hero.jsx
│   │   ├── MyBookings.jsx
│── backend/
│   ├── main.py
│   ├── .env
│   ├── _pycache_
│── public/
│── README.md
│── package.json

# Installation & Setup

# 1 Clone the Repository

In main branch, git clone https://github.com/SHAKSHIY/HotelEase.git

cd HotelEase

# 2 Install Dependencies

For Frontend

cd HotelEase

npm install

npm run dev

For Backend

cd backend

pip install uvicorn

pip install fastapi

pip install python-dotenv

pip install requests

pip install google-generativeai

# 3 Environment Variables

Create a .env file in the backend directory and add:
TBO.com API 
GEMINI_API_KEY

# API Endpoints

Hotel Search API

GET /api/hotels?location=Paris&budget=200 → Returns hotel listings.

POST /api/bookings → Books a selected hotel.

GET /api/bookings/:userId → Fetches user’s confirmed bookings.

# Demo Video & Screenshots


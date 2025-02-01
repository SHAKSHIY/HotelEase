import React from "react";
import "../styles/ExploreRooms.css"; // Ensure this CSS file exists

const hotels = [
    {
        id: 1,
        name: "Grand Royal Hotel",
        location: "Mumbai, India",
        price: "₹7,500/night",
        image: "/public/images/hotel1.jpg",
    },
    {
        id: 2,
        name: "Elite Palace",
        location: "Delhi, India",
        price: "₹9,000/night",
        image: "/public/images/hotel2.jpg",
    },
    {
        id: 3,
        name: "Ocean View Resort",
        location: "Goa, India",
        price: "₹6,800/night",
        image: "/public/images/hotel3.jpg",
    }
];

const ExploreRooms = () => {
    return (
        <div className="explore-rooms-container">
            <h1>Explore Rooms</h1>
            <div className="hotel-list">
                {hotels.map((hotel) => (
                    <div className="hotel-card" key={hotel.id}>
                        <img src={hotel.image} alt={hotel.name} />
                        <h2>{hotel.name}</h2>
                        <p>{hotel.location}</p>
                        <p className="price">{hotel.price}</p>
                        <div className="button-group">
                            <button className="book-now">Book Now</button>
                            <button className="show-details">Show Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreRooms;
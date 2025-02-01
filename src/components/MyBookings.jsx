import React from "react";
import "../styles/MyBookings.css"; // Ensure you have this CSS file for styling

const MyBookings = () => {
    // Example Booking Data (You can replace this with actual dynamic data)
    const bookings = [
        {
            id: 1,
            hotelName: "Grand Royal Hotel",
            roomType: "Deluxe Suite",
            checkIn: "Feb 15, 2025",
            checkOut: "Feb 18, 2025",
            status: "Confirmed",
            price: "₹12,500",
            // image: "/public/images/hotel1.jpg",
        }
    ];

    return (
        <div className="my-bookings-container">
            <h1>My Bookings</h1>
            {bookings.length === 0 ? (
                <p>No bookings found</p>
            ) : (
                <div className="bookings-list">
                    {bookings.map((booking) => (
                        <div className="booking-card" key={booking.id}>
                            <h2>{booking.hotelName}</h2>
                            <p><strong>Room Type:</strong> {booking.roomType}</p>
                            <p><strong>Check-In:</strong> {booking.checkIn}</p>
                            <p><strong>Check-Out:</strong> {booking.checkOut}</p>
                            <p><strong>Status:</strong> <span className="status">{booking.status}</span></p>
                            <p><strong>Price:</strong> {booking.price}</p>
                            <button className="cancel-btn">Cancel Booking</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookings;
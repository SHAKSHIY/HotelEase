// export const fetchHotelsByVoice = async (query) => {
//     const response = await fetch(`/api/hotels/search?query=${query}`);
//     return response.json();
//   };
  
//   export const fetchHotelsByImage = async (image) => {
//     const formData = new FormData();
//     formData.append("image", image);
  
//     const response = await fetch(`/api/hotels/image-search`, {
//       method: "POST",
//       body: formData,
//     });
//     return response.json();
//   };



export const searchHotels = (query) => {
  // Placeholder function to simulate an API call
  console.log("Searching hotels for query:", query);
  return [
    { name: "Hotel Paris", location: "Paris", price: 100 },
    { name: "Beach Resort", location: "Maldives", price: 300 },
  ];
};
import React, { useState } from "react";

const ImageSearch = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    console.log("Uploaded Image:", file);
    // Add logic to process the image (e.g., send it to a backend)
  };

  return (
    <div className="image-search">
      <h2>Image Search</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded Preview" style={{ width: "200px" }} />}
    </div>
  );
};

export default ImageSearch;

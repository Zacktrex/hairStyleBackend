import React, { useState } from "react";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch("http://localhost:8080/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "0px" }}>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageChange}
      />
      <button
        className="bg-blue-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        id="uploadButton"
        onClick={() => document.getElementById("fileInput").click()}
      >
        Upload Image
      </button>

      <button
        className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleImageUpload}
      >
        Submit
      </button>
      {/* {selectedImage && (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Selected"
          style={{ maxWidth: "100px" }}
        />
      )} */}
    </div>
  );
}

export default ImageUpload;

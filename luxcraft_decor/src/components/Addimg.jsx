import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    try {
      if (!image) {
        console.error('Please select an image.');
        return;
      }

      const formData = new FormData();
      formData.append('file', image);

      const endpoint = 'https://b1i7.la.idrivee2-50.com'; // Replace with your actual endpoint
      const accessKeyId = 'nqPfSsbZnfS7CAexMIzU'; // Replace with your actual Access Key ID
      const secretAccessKey = 'hlU2dpYtZeTbUbU4Fz4kmPJ7X6JjbYYB1zFaNwwP'; // Replace with your actual Secret Access Key

      // Construct the URL for uploading to iDrive E2
      const uploadUrl = `${endpoint}/your_bucket_name/${image.name}`;

      // Use AWS Signature Version 4 for authentication
      const response = await axios.put(uploadUrl, image, {
        headers: {
          'Content-Type': image.type,
          'x-amz-date': new Date().toUTCString(),
          'x-amz-content-sha256': 'UNSIGNED-PAYLOAD',
        },
        auth: {
          username: accessKeyId,
          password: secretAccessKey,
        },
      });

      // Handle the response from the iDrive E2 API as needed
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image to iDrive E2:', error);
    }
  };

  return (
    <div>
      <h2>Add Image to iDrive E2</h2>
      <div>
        <label htmlFor="image">Select Image:</label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
        />
      </div>
      <button onClick={handleUpload}>Upload to iDrive E2</button>
    </div>
  );
}

export default ImageUpload;
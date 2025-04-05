const axios = require('axios');
require('dotenv').config();

const AZURE_FACE_API_ENDPOINT = process.env.AZURE_FACE_API_ENDPOINT;
const AZURE_FACE_API_KEY = process.env.AZURE_FACE_API_KEY;

/**
 * Detects faces in an image using Azure Face API.
 * @param {string} imageUrl - URL of the image to be analyzed.
 * @returns {Promise<Array>} - List of detected faces with face IDs.
 */
const detectFaces = async (imageUrl) => {
    try {
        const response = await axios.post(
            `${AZURE_FACE_API_ENDPOINT}/face/v1.0/detect?returnFaceId=true`,
            { url: imageUrl },
            {
                headers: {
                    'Ocp-Apim-Subscription-Key': AZURE_FACE_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data; // Returns an array of detected faces
    } catch (error) {
        console.error('Azure Face API Error:', error.response?.data || error.message);
        throw new Error('Face detection failed');
    }
};

module.exports = { detectFaces };

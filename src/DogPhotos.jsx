import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DogPhotos.css'; // Import the CSS file

const DogPhotos = () => {
    const [dogPhoto, setDogPhoto] = useState('');

    // Function to fetch random dog photo
    const fetchDogPhoto = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            const { data } = response;
            setDogPhoto(data.message);
        } catch (error) {
            console.error('Error fetching dog photo:', error);
        }
    };

    useEffect(() => {
        fetchDogPhoto();
    }, []);

    return (
        <div className="container">
            <h1>Random Dog Photo</h1>
            <button className="button" onClick={fetchDogPhoto}>
                Fetch Random Dog Photo
            </button>
            <div className="dog-photos">
                {dogPhoto && (
                    <div className="dog-photo">
                        <img src={dogPhoto} alt="Dog" className="dog-img" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DogPhotos;

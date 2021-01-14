import React, { ReactElement, useState, useEffect } from 'react';
import Discount from '../components/Discount';
import './HomePage.css';

interface Photos {
  id: number;
  photographer: string;
  src: {
    [key: string]: string;
  };
}

const HomePage = (): ReactElement => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchImages = async (): Promise<unknown> => {
      const response = await fetch(
        'https://api.pexels.com/v1/curated?per_page=9',
        {
          headers: {
            Authorization:
              '563492ad6f917000010000017655fb8ff4a14513bed976678571549d',
          },
        },
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        setPhotos(jsonResponse.photos);
        console.log(jsonResponse);
      } else {
        setErrorMessage(
          `Failed to fetch images, error message: ${response.statusText}`,
        );
      }
      return response;
    };
    fetchImages();
  }, []);

  return (
    <div className="homepage">
      <div className="directory-menu">
        {errorMessage && <p> {errorMessage}</p>}
        <Discount />
        <div className="images-container">
          {photos.map(photo => (
            <div key={photo.id}>
              <img
                src={photo.src.original}
                width="500"
                height="500"
                alt={photo.photographer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

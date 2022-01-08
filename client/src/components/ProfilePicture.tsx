import React from 'react';
import './ProfilePicture.css';

interface ProfilPicture {
  image_url: string;
}

const ProfilPicture: React.FC<ProfilPicture> = ({ image_url }) => {
  console.log(image_url);
  
  return (
    <div className="avatar">
      <img src={image_url} alt="TUCAN" className="avatar-image" />
    </div>
  );
};

export default ProfilPicture;

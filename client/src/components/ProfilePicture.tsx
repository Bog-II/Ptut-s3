import React from 'react';
import './ProfilePicture.css';

const ProfilPicture = () => {
  const IMG_URL =
    'https://cdn.discordapp.com/attachments/776822813193142304/926464927412158494/TUCAN.jpg';

  return (
    <div className="avatar">
      <img src={IMG_URL} alt="TUCAN" className="avatar-image" />
    </div>
  );
};

export default ProfilPicture;

import React, { useState } from 'react';
import ProfilPicture from './ProfilePicture';
import './ProfilePictures.css';

const ProfilPictures = () => {
  const [images_urls, setimages_urls] = useState<string[]>([
    'https://cdn.discordapp.com/attachments/776822813193142304/926464927412158494/TUCAN.jpg',
    'https://cdn.discordapp.com/attachments/776822813193142304/926478139876589568/logosteam2.png',
    'https://cdn.discordapp.com/attachments/776822813193142304/926472775416291368/logo_republica.PNG',
  ]);

  const pps = images_urls.map((image_url, index) => (
    <ProfilPicture key={index} image_url={image_url} />
  ));

  return <div className="avatars">{pps}</div>;
};

export default ProfilPictures;

import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className = "app__social">
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsInstagram />
        </div>
        SocialMedia
    </div>
  )
}

export default SocialMedia
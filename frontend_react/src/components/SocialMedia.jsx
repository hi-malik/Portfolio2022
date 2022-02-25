import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BsLinkedin, BsYoutube } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className = "app__social">
        <div>
            <a href="https://twitter.com/MalikHacking" target="_blank" className="p-text"><BsTwitter /></a>
        </div>
        <div> 
            <a href="https://www.linkedin.com/in/himanshu-malik-54728917a/" target="_blank" className="p-text"><BsLinkedin /></a>
        </div>
        <div>
            <a href="https://www.instagram.com/its_himanshu2000/" target="_blank" className="p-text"><BsInstagram /></a>
        </div>
        <div>
            <a href="https://www.youtube.com/channel/UCB56-AiILovestYUPiGq8ng" target="_blank" className="p-text"><BsYoutube /></a>
        </div>
        
    </div>
  )
}

export default SocialMedia
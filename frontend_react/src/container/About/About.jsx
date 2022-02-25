import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './About.scss';

const abouts = [
  { title: 'Data Structure & Algorithms', description: 'I love to solve Algorithms', imgUrl: images.about01 },
  { title: 'Web Developer', description: 'I am a Web Developer', imgUrl: images.about02 },
  { title: 'Block-Chain Developer', description: 'Bringing the power in our hands', imgUrl: images.about03 },
  { title: 'Machine Learning', description: 'Teaching machines how to boil water', imgUrl: images.about04 },

]

const About = () => {
  return (
    <>
      <h2 className="head-text"> I know that <span>Problem solving</span><br />equivalents to<br /><span>Practicing Algorithm</span></h2>

      <div className = "app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
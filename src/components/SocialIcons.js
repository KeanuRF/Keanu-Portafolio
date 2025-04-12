import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="social-icons-left">
      <a href="https://www.facebook.com/profile.php?id=61568295657257" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.instagram.com/keanu.frederick/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://x.com/frederick_Keanu" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a href="https://github.com/KeanuRF" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialIcons;
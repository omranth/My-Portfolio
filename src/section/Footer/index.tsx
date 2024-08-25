import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CodeIcon from '@mui/icons-material/Code';

import './style.css';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = window.innerHeight / 3;

      if (scrollPosition > scrollThreshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="footer py-[30px] bg-[#f7f8f9] ">
      <div className="container m-auto">
        <div className="content ">
          <ul className="flex justify-center items-center">
            <li>
              <a href="https://github.com/omranth" target="_blank">
                <GitHubIcon className="text-[35px] bg-[#0563bb] text-white p-[5px] rounded-full" />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedInIcon className="text-[35px] bg-[#0563bb] text-white p-[5px] rounded-full mx-2" />
              </a>
            </li>
            <li>
              <a href="#">
                <CodeIcon className="text-[35px] bg-[#0563bb] text-white p-[5px] rounded-full mx-2" />
              </a>
            </li>
          </ul>
          <p className="text-center text-[13px] text-[#333] mt-3 ">Embrace passion, create, and leave an unforgettable mark.</p>
        </div>
      </div>

      {/* arraw Up */}
      <a href="#" className={`up bg-[#0563bb] p-3 rounded-full fixed right-4 bottom-5 text-white transition-opacity duration-700 ${showButton ? 'opacity-100 visible' : 'opacity-0 invisible	'}`}>
        <ArrowUpwardIcon />
      </a>
    </div>
  );
};

export default Footer;

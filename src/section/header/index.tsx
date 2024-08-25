import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import ServicesIcon from '../../assets/icons/services.svg';
import HomeIcon from '../../assets/icons/home.svg';
import WorkIcon from '@mui/icons-material/WorkOutline';

import './style.css';
import { useState } from 'react';

const Header = () => {
  const [list, setList] = useState('list-hidding');

  const handleNavBar = () => {
    list === 'list-hidding' ? setList('list-show') : setList('list-hidding');
  };

  return (
    <>
      <div className={`listes fixed top-2 right-4 `} onClick={handleNavBar}>
        {list === 'list-hidding' ? <MenuIcon /> : <CancelIcon style={{ height: '38px', width: '38px' }} className=" text-[#0563bb]" />}
      </div>
      <div className={`header ${list}`}>
        <div className="nav" id="navBar">
          <div className="parent_icon mb-2" onClick={() => window.scrollTo({ top: 0 })}>
            <img src={HomeIcon} className="inline-block" />
            <span className="icon_text ml-2">Home</span>
          </div>
          <div className="parent_icon" onClick={() => document.getElementById('services')?.scrollIntoView()}>
            <img src={ServicesIcon} className="inline-block" />
            <span className="icon_text ml-2">Service</span>
          </div>
          <div className="parent_icon mt-2" onClick={() => document.getElementById('server')?.scrollIntoView()}>
            {/* <img src={ServicesIcon} className="inline-block" /> */}
            <WorkIcon />
            <span className="icon_text ml-2">Service</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

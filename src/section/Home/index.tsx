import { useEffect } from 'react';
import MyPicture from '../../assets/image/person.png';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ['Developer', 'Freelancer'],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="h-[100vh] flex justify-center items-center pl-40 pr-4 max-[992px]:p-0 " style={{ background: 'linear-gradient(0deg, rgba(234,226,212,1) 0%, rgba(255,255,255,1) 100%)' }}>
      <div className="container mx-auto  flex flex-wrap justify-between items-center ">
        {/*  */}
        <div className="info-text w-[33.3333%] max-[767px]:w-[100%] text-center ">
          <h1 className="text-[#45505b] text-[64px] font-semibold leading-none  max-[992px]:text-[32px]"> Omran Thmnya</h1>
          <p className="text-[#45505b] text-[26px] mt-4">
            I'm <span className="auto-type text-[#0563bb]"></span>
          </p>
        </div>
        {/*  */}
        <motion.div whileHover={{ x: -25 }} transition={{ type: 'spring', stiffness: 100 }} className="my-image w-[66.6666%] flex justify-center max-[767px]:w-[90%]">
          <img src={MyPicture} className="w-80" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

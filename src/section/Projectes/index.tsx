import Card from '../../card';
import { useEffect, useState } from 'react';
import axios from 'axios';

const dataProject = [
  {
    image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Leno',
    desc: 'Leon is a sleek, minimalistic web template designed for creative agencies and freelancers to showcase their projects with style and elegance.',
    Skills: [{ skill: 'HTML5' }, { skill: 'CSS3' }, { skill: 'JS' }],
    link: 'https://omranth.github.io/first-template-/',
    Another_Link: 'https://github.com/omranth/first-template-',
  },
  // Kasper
  {
    image: 'https://preview.redd.it/6us8gy7ri2921.jpg?width=1080&crop=smart&auto=webp&s=f3dcdbca8998c4cab416f243d36089190102c5eb',
    title: 'Kasper',
    desc: 'Kasper is a clean and modern web template built with HTML, CSS, and JS, perfect for showcasing projects and portfolios with simplicity and elegance.',
    Skills: [{ skill: 'HTML5' }, { skill: 'CSS3' }, { skill: 'JS/es6' }, { skill: 'Observe-Element' }],
    link: 'https://omranth.github.io/Kasper/',
    Another_Link: 'https://github.com/omranth/Kasper',
  },
];

const Projectes = () => {
  // تم توقيفا كي يتم رفع المشروع على server free لا يدعم exprees

  // const [dataProject, setDataProject] = useState(null);
  // const [loading, setLoading] = useState(true); // حالة لتحميل البيانات
  // const [Erorrr, setError] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/projects')
  //     .then((response) => {
  //       setDataProject(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError('Error fetching project data');
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <div>Loading...</div>;
  // if (Erorrr) return <div>error</div>;

  return (
    <section id="server" className=" bg-slate-900" style={{ background: 'linear-gradient(180deg, rgba(234,226,212,1) 180%, rgba(255,255,255,1) 0%)' }}>
      <p className="text-center pb-[70px] text-[#45505b] font-semibold text-[30px]">Projectes</p>
      <div className="container justify-items-center mx-auto p-16 pt-3 max-[767px]:p-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {dataProject.map((data, index) => (
          <Card
            key={index} //
            image={data.image}
            title={data.title}
            desc={data.desc}
            Skills={data.Skills}
            link={data.link}
            Another_Link={data.Another_Link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projectes;

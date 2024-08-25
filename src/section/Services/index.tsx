import CategoryIcon from '@mui/icons-material/Category';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import CodeIcon from '@mui/icons-material/Code';
import './style.css';

const Services = () => {
  return (
    <section className="services py-8" id="services">
      <div className="container mx-auto">
        <h1 className="text-[#45505b] text-3xl font-extrabold text-center pb-[70px]">SERVICES</h1>
        <p className="mx-40 text-justify max-[992px]:mx-28 max-[767px]:mx-5">I specialize in creating responsive websites that prioritize simplicity, clarity, and functionality. Proficient in working with frameworks like React ,</p>
        <p className="mx-40 text-justify mt-6 max-[992px]:mx-28 max-[767px]:mx-5  ">While working in design, I expand my expertise through YouTube channels and articles.</p>

        <ul className="cards p-16 pt-3 max-[767px]:p-4">
          <li className="card px-5 pt-[70px] pb-[80px] text-center bg-white">
            <div className="icon m-auto w-fit relative">
              <svg height="100" viewBox="0 0 600 600" width="100" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="ingo"
                  style={{ '--col': '#47aeff' }}
                  d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  fill="#f5f5f5"
                  stroke="none"
                  stroke-width="0"
                ></path>
              </svg>
              <CodeIcon className="code_icon absolute left-[30px] top-[30px] text-[40px] text-[#47aeff] " />
            </div>
            <div className="info-text-servers">
              <h2 className="text-[22px] font-semibold">Web Desig</h2>
              <p className="text-[14px]"> The first impression is crucial, determining whether a visitor stays on a website. I design websites aligned with modern programming techniques.</p>
            </div>
          </li>
          <li className="card px-5 pt-[70px] pb-[80px] text-center bg-white">
            <div className="icon m-auto w-fit relative">
              <svg height="100" viewBox="0 0 600 600" width="100" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="ingo"
                  style={{ '--col': '#ffa76e' }}
                  d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  fill="#f5f5f5"
                  stroke="none"
                  stroke-width="0"
                ></path>
              </svg>
              <CategoryIcon className="code_icon absolute left-[30px] top-[30px] text-[40px] text-[#ffa76e] " />
            </div>
            <div className="info-text-servers">
              <h2 className="text-[22px] font-semibold">Web Desig</h2>
              <p className="text-[14px]"> The first impression is crucial, determining whether a visitor stays on a website. I design websites aligned with modern programming techniques.</p>
            </div>
          </li>
          <li className="card px-5 pt-[70px] pb-[80px] text-center bg-white">
            <div className="icon m-auto w-fit relative">
              <svg height="100" viewBox="0 0 600 600" width="100" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="ingo"
                  style={{ '--col': '#e80368' }}
                  d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                  fill="#f5f5f5"
                  stroke="none"
                  stroke-width="0"
                ></path>
              </svg>
              <LocalFloristIcon className="code_icon absolute left-[30px] top-[30px] text-[40px] text-[#e80368] " />
            </div>
            <div className="info-text-servers">
              <h2 className="text-[22px] font-semibold">Web Desig</h2>
              <p className="text-[14px]"> The first impression is crucial, determining whether a visitor stays on a website. I design websites aligned with modern programming techniques.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;

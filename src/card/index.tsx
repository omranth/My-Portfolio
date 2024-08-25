const Card = ({ image = '', title = 'NOt Title', desc = 'Not Des', Skills = ['Not skills'], link, Another_Link }) => {
  return (
    <div className="block max-w-[100%] w-[350px]  rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white ">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img className="rounded-t-lg" src={image} alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
        <p className="text-base">{desc}</p>
      </div>
      <p className="px-6 text-[24px] font-semibold">Tools</p>
      <ul className="w-full">
        {Skills.map((skil, index) => {
          return (
            <li key={index} className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3  dark:border-white/10">
              {skil.skill}
            </li>
          );
        })}
      </ul>
      <div className="p-6">
        <a
          href={link}
          target="_blank"
          type="button"
          className="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400"
        >
          {title} Link
        </a>
        <a
          href={Another_Link}
          target="_blank"
          type="button"
          className="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400"
        >
          Another Link
        </a>
      </div>
    </div>
  );
};

export default Card;

import MainBtn from "./MainBtn";

const Footer = () => {
  return (
    <footer className="w-full h-72 bg-greenMain mt-20 flex  flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold text-text font-nunito">
          Retro E-commerce
        </h2>
        <p className="text-text font-nunito">
          Proyect from React Course of Platzi || created for educational
          purposes
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <MainBtn type={1} text="Platzi" href="https://platzi.com/home/" />
        <MainBtn
          type={0}
          text="tadeowoto"
          href="https://github.com/tadeowoto"
        />
      </div>
    </footer>
  );
};

export default Footer;

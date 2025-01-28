type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col mt-20">
      {children}
    </div>
  );
};

export default MainLayout;

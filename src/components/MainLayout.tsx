type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full  flex justify-center items-center flex-col bg-grayBg">
      {children}
    </div>
  );
};

export default MainLayout;

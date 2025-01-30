type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col bg-grayBg">
      {children}
    </div>
  );
};

export default MainLayout;

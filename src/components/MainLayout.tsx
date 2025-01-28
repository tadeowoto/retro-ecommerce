type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col mt-20 items-center bg-amber-200">
      {children}
    </div>
  );
};

export default MainLayout;

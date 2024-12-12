interface IProps {
  children: React.ReactNode;
  className?: string;
}
const MainLayout: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={`2xl:px-16 xl:px-10 px-4 ${className}`}>{children}</div>
  );
};

export default MainLayout;

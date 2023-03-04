import Navbar from "./headers/Navbar";
import Footer from "./Footer";


const AppLayout = ({children}) => {
  return (
    <>
      <Navbar/>
        {children}
      <Footer />
    </>
  );
};

export default AppLayout;


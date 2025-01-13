import NavBar from "./navbar";

import '../../theme/fonts/fonts.css';
import Footer from "../home/footer-section";


const CustomRootLayout = ({children}) => {
  return ( 
    <div className="w-full open-sans">
      <NavBar/>
      <div>{children}</div>
      <Footer/>

    </div>
  );
}
 
export default CustomRootLayout;
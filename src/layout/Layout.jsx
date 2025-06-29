import Navbar from "../components/Navbar"; 
import Footer from "../pages/Footer";

const Layout = ({ children }) => {

    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    );
    }
    
    export default Layout;
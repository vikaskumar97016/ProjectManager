import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Footer from './components/Footer/Footer';
import Appbar from './components/Navbar/Appbar';
import Banner from './components/Banner/Banner';


function App() {
  return (
    <>
    <Appbar />
    <Banner />
    <Footer />
    </>

    
  );
}

export default App;

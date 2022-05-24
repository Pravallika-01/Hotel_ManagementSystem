import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Components/footer';
import Header from './Components/header';
import Registration from './Components/registration';
import Query from './Components/query';
import Content from './Components/contentp';
import Images from './Components/images';
import IMAGES from './Assets/img';
function App() {
  return (
    
   //<Section/>
   <div className="Learning">
      <Header/>
      {/* <Registration/> */}


      <Content/>
      <Images/>
      <Footer/>
    <Query/>
    
      
      
   </div>


  );
}

export default App;

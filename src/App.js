import logo from './logo.svg';
import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import {light} from "./styles/Themes"
import Nav from './components/Nav';
import Home from './components/section/Home';
import About from './components/section/About';
import Roadmap from './components/section/Roadmap';
import Showcase from './components/section/Showcase';
import Footer from './components/Footer';
import Team from './components/section/Team';
import Faq from './components/section/Faq';

function App() {
  return (
  <>
   <GlobalStyles/>

 <ThemeProvider theme={light}>

 <Nav/>
 <Home/>
 <About/>
 <Roadmap/>
 <Showcase/>
 <Team/>
 <Faq/>
 <Footer/>
 </ThemeProvider>
        </>
  );
}

export default App;

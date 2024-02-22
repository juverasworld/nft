import logo from './logo.svg';
import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import {light} from "./styles/Themes"

function App() {
  return (
  <>
   <GlobalStyles/>

 <ThemeProvider theme={light}>

  App FIle
 </ThemeProvider>
        </>
  );
}

export default App;

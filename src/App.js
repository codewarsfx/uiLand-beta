import { createGlobalStyle } from "styled-components";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/home";


function App() {
	return (
		<div className='App'>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
		</div>
	);
}

const GlobalStyle = createGlobalStyle`
 :root{
    font-size: 14px;
    box-sizing: border-box;

   /* general color variables */

   --primary-color: #0066F5;
   --text-color-light: #fff;
   --accent-color : #2EB875;
   --light-grey-color: #D9D9D9;
   --text-color-secondary: #A9ABB9;
   --text-color-dark:#192941;
   --text-color-dark-secondary: #51555B;
   --primary-font:'Inter', sans-serif;
 }

 *,*::before, *::after{
  box-sizing: inherit;
 }
 body{
    margin:0;
    padding: 0;
    font-family: var(--primary-font);
}


p,h1,h2,h3,h4,h5,h6{
    margin: 0;
}

a{
    text-decoration: none;
    color: inherit;
}

img{
    display: inline-block;
}




 /* *{
  border: 1px solid red;
 } */

`;

export default App;

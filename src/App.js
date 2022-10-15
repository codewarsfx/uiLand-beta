import { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import ScreensTab from "./components/ScreensTab";
import ElementsTab from "./components/ElementsTab";
import { UserContextProvider } from "./context/authContext";
import { ScreensContextProvider } from "./context/screensContex";

function App() {
	return (
		<div className='App'>
			<GlobalStyle />

			<Routes>
				<Route
					path='/'
					element={
            <UserContextProvider>
              <ScreensContextProvider>
                 <Home />
                </ScreensContextProvider>
						</UserContextProvider>
					}
				>
					<Route index element={<ScreensTab />} />
					<Route path='elements' element={<ElementsTab />} />
				</Route>
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
    background-color: #eee;
}


p,h1,h2,h3,h4,h5,h6{
    margin: 0;
}

a{
    text-decoration: none;
    color: inherit;

}
.pills{
  padding:0.4em 0.9em;
  border-radius: 5em;
}

img{
    display: inline-block;
}
*{
   -webkit-tap-highlight-color: transparent !important;
 }

/* 
 *{
  border: 1px solid red;
} */


.remove-scroll{
  overflow: hidden;
}


`;

export default App;

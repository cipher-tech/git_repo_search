import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { DisplayReadme, MainComponent } from "./components";

const GlobalStyle = createGlobalStyle`
    :root{
        --colorPrimary: #667eea;
        --colorSecondary: #656466;
        --colorWhite: #FCFCFC;
        --colorDark: #424A4F;
    }
  body{
    font-family: 'Epilogue', sans-serif;
  }
  #root{
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(to left, #667eeaab, #764ba299);
    display: flex;
    place-content: center;
    place-items: center;
   
  }
`;

function App() {
    const [showReadme, setShowReadme] = useState({
      shouldShowReadme: false,
      user: '',
      repoName: ''
    });
    return (
        <>
            <GlobalStyle />
            {showReadme.shouldShowReadme ? <DisplayReadme showReadme={showReadme} setShowReadme={setShowReadme} /> : <MainComponent setShowReadme={setShowReadme} />}
        </>
    );
}

export default App;

import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";


function App() {
    return (
        <StylledSection>
            <Header/>
            <Main/>
            <Skills/>
        </StylledSection>


    );
}

export default App;

const StylledSection = styled.div``
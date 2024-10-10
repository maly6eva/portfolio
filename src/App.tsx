import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Projects} from "./layout/section/projects/Projects";
import {Contact} from "./layout/section/contact/Contact";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <StylledSection>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
        <Footer/>
        </StylledSection>


    );
}

export default App;

const StylledSection = styled.div``
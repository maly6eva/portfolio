import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Projects} from "./layout/section/projects/Projects";
import {Contact} from "./layout/section/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {Designs} from "./layout/section/designs/Designs";
import {Todolist} from "./layout/section/todolist/Todolist";


function App() {
    return (
        <StylledSection>
            {/*<Designs/>*/}
            <Header/>
            <Main/>
            <Todolist/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </StylledSection>


    );
}

export default App;

const StylledSection = styled.div``
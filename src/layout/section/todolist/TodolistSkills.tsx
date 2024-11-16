import React from 'react';
import styled from "styled-components";
import {TodolistPropsType} from "./Todolist";


type TodolistSkillsPropsType = {
    id: number,
    isDone: boolean,
    text: string,
}

type TodolistSkillsProps = {
    title: string;
    tasks: TodolistSkillsPropsType[]
    deliteTasks: (id: number) => void
    filterState: (value: TodolistPropsType) => void

}

export const TodolistSkills = ({title, tasks, deliteTasks, filterState}: TodolistSkillsProps) => {
    const task = tasks.map((el) => {
        return (
            <li>
                <input type="checkbox" checked={el.isDone}/> <span>{el.text}</span>
                <ButtonClik onClick={() => {deliteTasks(el.id)}}>+</ButtonClik>
            </li>
        )

    })

    return (

        <TodoSkillslist>
            <h3>{title}</h3>
            <div>
                <input/>
                <ButtonClik>+</ButtonClik>
            </div>
            <ul>
                {task}
            </ul>
            <ButtonDiv>
                <button onClick={() => {filterState('All')}}>All</button>
                <button onClick={() => {filterState('Active')}}>Active</button>
                <button onClick={() => {filterState('Completed')}}>Completed</button>
            </ButtonDiv>
        </TodoSkillslist>
    );
};
const TodoSkillslist = styled.div`
    border: 5px solid #84dcec;
    padding: 30px 20px;
    background-color: #eed55c;
    border-radius: 6px;

    h3 {
        padding: 10px;
        font-size: 25px;
        color: #43848f;
    }

    ul {
        padding: 0 20px 0 20px;
    }
`
const ButtonClik = styled.button`
    background-color: #84dcec;
    margin: 8px auto 8px;

    padding: 6px 10px 6px 10px;
    border-radius: 6px;
`
const ButtonDiv = styled.div`
    background-color: #eed55c;

    button {
        background-color: #84dcec;
        margin: 8px auto 8px;
        padding: 8px 15px 8px 15px;
        border-radius: 6px;
    }
`

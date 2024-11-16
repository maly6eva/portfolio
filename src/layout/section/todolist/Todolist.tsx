import React, {useState} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TodolistSkills} from "./TodolistSkills";

export type TodolistPropsType = 'All' | 'Active' | 'Completed'

export const Todolist = () => {
    const name ='CSS'

    const [task, setTask] = useState([
            {id: 1, isDone: true, text: 'Flexbox' },
            {id: 2, isDone: false, text:  'Grid' },
            {id: 3, isDone: true, text: 'анимации'},
            {id: 4, isDone: true, text: 'Webpack' },
            {id: 5, isDone: false, text:  'Vite' },
            {id: 6, isDone: false, text: 'Parcel'},
            {id: 7, isDone: false, text: 'Vue' },
            {id: 8, isDone: true, text:  'React' },
            {id: 9, isDone: false, text: 'Angular'}
        ])

    const deliteTasks = (id: number) =>{
        let taskdel = task.filter((el) => {
            return el.id !== id
        })
        setTask(taskdel)
    }

    const [filter, setFilter] = useState<TodolistPropsType>('All')

    const filterState = (value: TodolistPropsType) => {
        setFilter(value)
    }

    let tasksForTodolist = task;
    if(filter === 'Completed') {
        tasksForTodolist = task.filter(el => el.isDone === true)
    }

    if(filter === 'Active') {
        tasksForTodolist = task.filter(el => el.isDone === false)
    }


    return (
        <TodolistSection>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <TodolistSkills title={name} tasks={tasksForTodolist} deliteTasks={deliteTasks} filterState={filterState}/>
                </FlexWrapper>
            </Container>

        </TodolistSection>
    );
};

const TodolistSection = styled.section`
`
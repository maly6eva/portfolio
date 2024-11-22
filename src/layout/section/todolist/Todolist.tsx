import React, {useState} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TodolistSkills} from "./TodolistSkills";
import {v1} from "uuid";

export type TodolistPropsType = 'All' | 'Active' | 'Completed'

export const Todolist = () => {
    const name ='CSS'

    const [task, setTask] = useState([
            {id: v1(), isDone: true, text: 'Flexbox' },
            {id: v1(), isDone: false, text:  'Grid' },
            {id: v1(), isDone: true, text: 'анимации'},
            {id: v1(), isDone: true, text: 'Webpack' },
            {id: v1(), isDone: false, text:  'Vite' },
            {id: v1(), isDone: false, text: 'Parcel'},
            {id: v1(), isDone: false, text: 'Vue' },
            {id: v1(), isDone: true, text:  'React' },
            {id: v1(), isDone: false, text: 'Angular'}
        ])

    const taskPush = (taskId: string) => {
        let newTask = {id: v1(), isDone: false, text: taskId}
        setTask([newTask, ...task])
    }


    const deliteTasks = (id: string) =>{
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
                    <TodolistSkills title={name} tasks={tasksForTodolist} deliteTasks={deliteTasks} filterState={filterState} taskPush={taskPush}/>
                </FlexWrapper>
            </Container>

        </TodolistSection>
    );
};

const TodolistSection = styled.section`
`
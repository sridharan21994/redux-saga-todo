import React, { useEffect } from 'react'
import { loadToDoList } from '../../actions'
import Header from '../Header'
import ToDoListContainer from '../ToDoListContainer'
import {useDispatch} from 'react-redux'

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToDoList())
    }, [])

    return (
        <div>
            <Header></Header>
            <ToDoListContainer></ToDoListContainer>
        </div>
    )
}

export default HomePage

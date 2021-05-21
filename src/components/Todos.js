import React from 'react'
import {
     handleRemoveTodo ,
     handleToggleTodo,
     handleAddTodo
} from '../actions/todos'
import { connect } from 'react-redux'
import List from './List'


class Todos extends React.Component{
    addTodo = (e) => {
        e.preventDefault()

        this.props.dispatch(handleAddTodo(
            this.input.value,
            ()=>  this.input.value = ''
        ))
    }
    removeItem = (todo) =>{
        this.props.dispatch(handleRemoveTodo(todo))

    }
    toggleItem = (id) => {
        this.props.dispatch(handleToggleTodo(id))
    }
    render () {
        return (
            <div>
                <h2>TODOS
                </h2>
                <input
                type="text"
                name="name"
                placeholder="type todo"
                ref={input => this.input = input}
                id="" />
                <button
                onClick={this.addTodo}>Add todo</button>
                <List toggle={this.toggleItem} remove={this.removeItem} list={this.props.todos} />
            </div>
        )
    }
}

export default connect((state)=>({
    todos :state.todos
}))(Todos)
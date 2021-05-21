import React from 'react'
import {
    handleAddGoal,
    handleRemoveGoal
} from '../actions/goals'
import { connect } from 'react-redux'
import List from './List'

class Goals extends React.Component{
    addGoal = (e) =>{
        this.props.dispatch(handleAddGoal(
            this.input.value,
            () => this.input.value =''
            ))

    }
    removeItem = (goal) =>{
        this.props.dispatch(handleRemoveGoal(goal))
    }
    render(){
        return (
            <div>
                <h2>GOALS</h2>
                <input type="text"
                name=""
                placeholder="Add Goal"
                ref={input => this.input = input}
                id="" />
                <button onClick={this.addGoal}> Add Goal</button>
                <List remove={this.removeItem} list={this.props.goals} />
            </div>
        )
    }
}

export default connect((state)=>({
    goals :state.goals
}))(Goals)

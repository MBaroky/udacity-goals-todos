
import React from 'react';
import { handleInitialData } from '../actions/shared'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'


class App extends React.Component{
  componentDidMount(){
      const {dispatch} = this.props;
      dispatch(handleInitialData())

  }
  render (){
      return (

          <div>
              {this.props.loading === true? <h2>Loading</h2> :
                  <React.Fragment>
              <ConnectedTodos />
              <ConnectedGoals />
                  </React.Fragment>}
          </div>
      )
  }
}

export default connect((state)=>({
  loading :state.loading
}))(App)

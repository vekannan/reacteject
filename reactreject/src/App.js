import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ageUpAction, ageDownAction } from './store/actions/ageAction'
class App extends Component{
  render() {
    return (
      <div className="App">
        <h1>About venkatesan</h1>
        <div>
          <div>Venkat age is <span>{this.props.age}</span></div>
          <button onClick={this.props.onAgeUp}>Age up</button>
          <button onClick={this.props.onAgeDown}>Age down</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(ageUpAction()),
    onAgeDown: () => dispatch(ageDownAction())
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

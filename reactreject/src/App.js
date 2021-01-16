import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ageUpAction, ageDownAction } from './store/actions/ageAction'
import loading from './img/loading.gif'
class App extends Component{
  render() {
    return (
      <div className="App">
        <h1>About venkatesan</h1>
        <div>
          <div>Venkat age is 
            { this.props.isChangeInAge
            ? <span><img src={loading} alt="Loading"></img></span>
            : <span>{this.props.age}</span> }
          </div>
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
    age: state.age,
    isChangeInAge: state.isChangeInAge
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

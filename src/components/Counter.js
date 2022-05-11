import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {counter:state.counterReducer} //state bilgisini counterReducerdan çeker
}

export default connect(mapStateToProps)(Counter); //counter proplarına state'i bağlar
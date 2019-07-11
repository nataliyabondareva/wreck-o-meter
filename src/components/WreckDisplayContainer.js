import React from 'react'
import {connect} from 'react-redux'
import {checkWreck} from '../actions/wreck'
import WreckDisplay from './WreckDisplay'
import { API_KEY } from "../app-env";

class WreckDisplayContainer extends React.Component {
  state = {
    location: ''
  }
  
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.checkWreck(this.state.location, API_KEY)
  }

  render() {
    return(
      <>
      {/* <MeterForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      /> */}
      {/* /* {this.props.wreck && */} 
      <WreckDisplay
      wreck={this.wreck} />
      
      </>
    )
  }
}

const mapStateToProps = state => ({
  wreck: state.wreck
})

export default connect(mapStateToProps, {checkWreck})(WreckDisplayContainer)
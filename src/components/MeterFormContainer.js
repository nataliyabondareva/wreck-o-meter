import React from 'react'
import {connect} from 'react-redux'
import {checkWreck} from '../actions/wreck'
import MeterForm from './MeterForm'
import { API_KEY } from "../app-env";

class MeterFormContainer extends React.Component {
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
      <MeterForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      />
    )
  }
}

const mapStateToProps = state => ({
  location: state.location
})

export default connect(mapStateToProps, {checkWreck})(MeterFormContainer)
import React from "react";
import { connect } from "react-redux";
import { checkWreck } from "../actions/wreck";
import MeterForm from "./MeterForm";
import { API_KEY } from "../app-env";
import WreckDisplay from "./WreckDIsplay";

class MeterFormContainer extends React.Component {
  state = {
    location: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.checkWreck(this.state.location, API_KEY);
  };

  render() {
    return (
      <>
        <MeterForm
          wreck={this.props.wreck}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          values={this.state}
        />
        {this.props.wreck && <WreckDisplay wreck={this.props.wreck} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  wreck: state.wreck
});

export default connect(
  mapStateToProps,
  { checkWreck }
)(MeterFormContainer);

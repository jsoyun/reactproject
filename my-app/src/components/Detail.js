import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props.location);
    console.log(this.props, this.props.history);
    const { location } = this.props;
    console.log(location);
  }
  render() {
    return <span>hello</span>;
  }
}

export default Detail;

import React from 'react'

export default React.createClass ({

  render() {
    return (
      <div>
        <div>{this.props.point.latitude}</div>
        <div>{this.props.point.longitude}</div>
        <div>{this.props.point.reference_point}</div>
        <div>{this.props.point.first_name}</div>
      </div>
    )
  }

})

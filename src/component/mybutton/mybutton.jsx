import React from 'react';

class MyButton extends React.Component {
  onTouchStart(callback, time) {
    this.timeOutEvent = setInterval(function() {
      this.timeOutEvent = 0;
      callback();
      console.log('你长按了');
    }, time);
  }
  onTouchMove() {
    clearInterval(this.timeOutEvent);
    this.timeOutEvent = 0;
  }
  onTouchEnd() {
    clearInterval(this.timeOutEvent);
    if (this.timeOutEvent !== 0) {
      return;
    }
    return false;
  }
  componentWillUnmount() {
    clearInterval(this.timeOutEvent);
    this.timeOutEvent = 0;
  }
  render() {
    const { callback, time } = this.props;
    return (
      <div
        className="start"
        onTouchStart={this.onTouchStart.bind(this, callback, time)}
        onTouchEnd={this.onTouchEnd.bind(this)}
      ></div>
    );
  }
}

export default MyButton;

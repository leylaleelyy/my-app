import React from 'react';
import MyButton from '../../component/mybutton/mybutton';
import './thirth.scss';
import iknow from '../../assets/imgs/iknow.png';

class Thirth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 700
    };
  }
  changeTurn() {
    setTimeout(() => {
      this.props.history.push('forth');
    }, 1000);
  }
  render() {
    const { time } = this.state;
    return (
      <div className="bg13">
        <img src={iknow} alt="iknow" className="iknow" />
        <MyButton time={time} callback={this.changeTurn.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Thirth;

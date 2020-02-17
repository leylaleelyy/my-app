import React from 'react';
import 'animate.css';
import MyButton from '../../component/mybutton/mybutton';
import './eleven.scss';
import resou from '../../assets/imgs/resou.png';

class Eleven extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 700
    };
  }
  changeTurn() {
    setTimeout(() => {
      this.props.history.push('twelve');
    }, 200);
  }
  render() {
    const { time } = this.state;
    return (
      <div className="bg11">
        <div className="title">
          运营人
          <br />
          远不止
          <br />
          “叫卖”产品...
        </div>
        <img src={resou} alt="resou" className="resou" />
        <MyButton time={time} callback={this.changeTurn.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Eleven;

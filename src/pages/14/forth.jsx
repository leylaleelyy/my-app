import React from 'react';
import MyButton from '../../component/mybutton/mybutton';
import './forth.scss';
import mem from '../../assets/imgs/mem.gif';

class Forth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 700
    };
  }
  changeTurn() {
    setTimeout(() => {
      this.props.history.push('fifth');
    }, 700);
  }
  render() {
    const { time } = this.state;
    return (
      <div className="bg14">
        <img src={mem} className="mem" alt="mem" />
        <div className="title">
          产品庆功盛宴
          <br />
          深夜海底捞局...
        </div>
        <MyButton time={time} callback={this.changeTurn.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Forth;

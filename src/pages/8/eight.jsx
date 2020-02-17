import React from 'react';
import MyButton from '../../component/mybutton/mybutton';
import './eight.scss';
import blood from '../../assets/imgs/blood.png';

class Eight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 700
    };
  }

  handleTurn() {
    setTimeout(() => {
      this.props.history.push('nine');
    }, 1000);
  }

  render() {
    const { time } = this.state;
    return (
      <div className="bg8">
        <div className="title">
          杀死程序猿不需要
          <span role="img" aria-label="gun">
            🔫
          </span>
          <br />
          只需要改三次需求
        </div>
        <img src={blood} className="blood" alt="blood" />
        <MyButton time={time} callback={this.handleTurn.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Eight;

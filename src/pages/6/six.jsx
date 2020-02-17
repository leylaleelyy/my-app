import React from 'react';
import 'animate.css';
import MyButton from '../../component/mybutton/mybutton';
import './six.scss';
import laba from '../../assets/imgs/laba.png';
import ui2 from '../../assets/imgs/ui2.png';

class Six extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 700,
      show: false
    };
  }

  showUI() {
    this.setState({
      show: true
    });
    setTimeout(() => {
      this.props.history.push('seven');
    }, 2500);
  }

  render() {
    const { show, time } = this.state;
    return (
      <div className="bg6">
        <div className="say">
          这不是我要的五彩斑斓的黑，
          <br />
          五颜六色的白！
        </div>
        <img src={laba} alt="laba" className="laba" />
        <img
          src={ui2}
          alt="ui2"
          className="ui2"
          style={show ? { animation: 'uishow1 3000ms ease-in forwards' } : {}}
        />
        <MyButton time={time} callback={this.showUI.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Six;

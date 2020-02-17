import React from 'react';
import 'animate.css';
import MyButton from '../../component/mybutton/mybutton';
import './five.scss';
import ui1 from '../../assets/imgs/ui1.png';

class Five extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fly: false,
      time: 700
    };
  }

  handleFly() {
    this.setState({ fly: true });
    this.props.history.push('six');
  }

  render() {
    const { fly, time } = this.state;
    return (
      <div className="bg5">
        <img
          src={ui1}
          className="ui1"
          alt="ui1"
          style={fly ? { animation: 'flyback 500ms ease-in forwards' } : {}}
        />
        <MyButton time={time} callback={this.handleFly.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Five;

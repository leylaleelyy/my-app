import React from 'react';
import MyButton from '../../component/mybutton/mybutton';
import './twelve.scss';
import shey from '../../assets/imgs/shey.png';

class Twelve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 700
    };
  }
  changeTurn() {
    setTimeout(() => {
      this.props.history.push('thirth');
    }, 1000);
  }
  render() {
    const { time } = this.state;
    return (
      <div className="bg12">
        <div className="dance">
          Wow!
          <br />
          You can really
          <br /> dance!!!
        </div>
        <img src={shey} alt="shey" className="shey" />
        <div className="kiki"></div>
        <MyButton time={time} callback={this.changeTurn.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Twelve;

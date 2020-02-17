import React from 'react';
import 'animate.css';
import MyButton from '../../component/mybutton/mybutton';
import './three.scss';
import man from '../../assets/imgs/man.png';
import biao from '../../assets/imgs/biao.png';
import rili from '../../assets/imgs/rili.png';
import { CSSTransition } from 'react-transition-group';

class Third extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
      show: false,
      slide: false,
      time: 700
    };
  }
  showSth() {
    const { times } = this.state;
    this.setState({
      times: times + 1
    });
    switch (times) {
      case 0:
        this.setState({
          show: true,
          time: 1000
        });
        break;
      case 1:
        break;
      case 2:
        this.setState({
          show: false
        });
        break;
      case 3:
        this.setState({
          slide: true
        });
        break;
      case 4:
        break;
      case 5:
        this.props.history.push('four');
        break;
      default:
        break;
    }
  }
  render() {
    const { show, slide, time } = this.state;
    return (
      <div className="bg3">
        <img src={man} alt="man" className="man" />
        <div className="idea"></div>
        <div className="title">
          对产品，设计，开发，运营
          <br />
          工作进度的详细安排
        </div>
        <CSSTransition
          in={show}
          timeout={200}
          classNames="fly"
          unmountOnExit={true}
        >
          <img src={biao} alt="biao" className="biao" />
        </CSSTransition>
        <CSSTransition
          in={slide}
          timeout={200}
          classNames="fly"
          unmountOnExit={true}
        >
          <img src={rili} alt="rili" className="rili" />
        </CSSTransition>
        <MyButton time={time} callback={this.showSth.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Third;

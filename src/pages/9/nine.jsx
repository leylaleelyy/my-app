import React from 'react';
import MyButton from '../../component/mybutton/mybutton';
import { CSSTransition } from 'react-transition-group';
import './nine.scss';
import xian from '../../assets/imgs/xian.png';
import bg from '../../assets/imgs/bg9.png';
import bgu from '../../assets/imgs/bgu.png';
import logo from '../../assets/imgs/logo.png';

class Nine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
      by: true,
      show: false,
      change: false,
      time: 700
    };
  }

  changeShow() {
    const { times } = this.state;
    this.setState({
      times: times + 1
    });
    switch (times) {
      case 0:
        this.setState({
          by: false,
          show: true
        });
        break;
      case 1:
        setTimeout(() => {
          this.setState({
            show: false,
            change: true
          });
        }, 1000);
        setTimeout(() => {
          this.props.history.push('ten');
        }, 3500);
        break;
      default:
        break;
    }
  }

  render() {
    const { by, show, change, time } = this.state;
    return (
      <div
        className="bg9"
        style={
          change
            ? { backgroundImage: 'url(' + bgu + ')' }
            : { backgroundImage: 'url(' + bg + ')' }
        }
      >
        <CSSTransition
          in={by}
          timeout={500}
          classNames="by"
          unmountOnExit
          key="by"
        >
          <div className="by">然而在冰岩大多是...</div>
        </CSSTransition>
        <CSSTransition
          in={show}
          timeout={500}
          classNames="xian"
          unmountOnExit
          key="xian"
        >
          <img src={xian} className="xian" alt="xian" />
        </CSSTransition>

        <CSSTransition
          in={show}
          timeout={500}
          classNames="xuqiu2"
          unmountOnExit
          key="xuqiu"
        >
          <div className="xuqiu">
            大哥，加个需求吧，
            <br />
            这个项目2.17号要上线哦~
          </div>
        </CSSTransition>
        <CSSTransition
          in={change}
          timeout={500}
          classNames="ans"
          unmountOnExit
          key="ans"
        >
          <div className="ans">No Problem!</div>
        </CSSTransition>
        <CSSTransition
          in={change}
          timeout={500}
          classNames="xian1"
          unmountOnExit
          key="xian1"
        >
          <img src={xian} className="xian" alt="xian1" />
        </CSSTransition>
        <img
          src={logo}
          className="logo"
          style={change ? { animation: ' logo 2000ms linear 1s forwards' } : {}}
          alt="logo"
        />
        <MyButton time={time} callback={this.changeShow.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Nine;

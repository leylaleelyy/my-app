import React from 'react';
import say from '../../assets/imgs/say.png';
import { CSSTransition } from 'react-transition-group';
import './two.scss';
import bg from '../../assets/imgs/bg2.jpg';
import bgt from '../../assets/imgs/bgt.jpg';
import MyButton from '../../component/mybutton/mybutton';

class Two extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      change: false,
      times: 0,
      time: 700
    };
  }

  showChange() {
    const { times, change, show } = this.state;
    this.setState({
      times: times + 1
    });
    switch (times) {
      case 0:
        this.setState({
          change: !change
        });
        break;
      case 1:
        this.setState({
          show: !show,
          time: 1000
        });
        break;
      case 2:
        break;
      case 3:
        this.props.history.push('three');
        break;
      default:
        break;
    }
  }

  render() {
    const { show, change, time } = this.state;
    return (
      <div
        className="bg2"
        style={
          change
            ? { backgroundImage: 'url(' + bgt + ')' }
            : { backgroundImage: 'url(' + bg + ')' }
        }
      >
        <img src={say} className="say" alt="say" />
        <CSSTransition in={change} timeout={150} classNames="tie" unmountOnExit>
          <div className="tie" />
        </CSSTransition>

        <CSSTransition
          in={show}
          appear={show}
          timeout={200}
          classNames="letter"
          unmountOnExit
        >
          <div className="letter">
            每一个成型产品idea的背后
            <br />
            都是一群小伙伴的
            <s>辩论撕逼</s>
            群策群力
          </div>
        </CSSTransition>
        <CSSTransition
          in={!show}
          timeout={500}
          classNames="letter"
          unmountOnExit
        >
          <div className="letter">
            对产品idea进行集体评审，
            <br />
            一致通过可进入正式开发
          </div>
        </CSSTransition>

        <div className="idea"></div>
        <div
          className="idea1"
          style={
            show
              ? { transform: `scale(0)`, opacity: 0 }
              : { transform: `scale(1)`, opacity: 1 }
          }
        ></div>
        <MyButton time={time} callback={this.showChange.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Two;

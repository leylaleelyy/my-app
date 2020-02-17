import React from 'react';
import MyButton from '../../component/mybutton/mybutton';
import './ten.scss';
import them from '../../assets/imgs/them.png';
import logo from '../../assets/imgs/logo.png';
import yonghu from '../../assets/imgs/yonghu.png';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Ten extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
      texts: ['有用！', '有趣！', '养眼！'],
      showText: [],
      show: false,
      change: true,
      time: 700
    };
  }
  showChange() {
    const { texts, showText, times } = this.state;
    this.setState({
      times: times + 1
    });
    switch (times) {
      case 0:
        setTimeout(() => {
          while (texts.length > 0) {
            let text = texts.pop();
            showText.push(text);
            this.setState({
              texts: texts,
              showText: showText
            });
          }
          this.setState({
            show: true,
            change: false
          });
        }, 1000);
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        this.props.history.push('eleven');
        break;
      default:
        break;
    }
  }

  render() {
    const { showText, show, change, time } = this.state;
    const text = showText.map((item, index) => {
      return (
        <CSSTransition
          in={show}
          timeout={500}
          classNames={'comment' + index}
          key={index}
        >
          <div className="comment">
            <span>{item}</span>
          </div>
        </CSSTransition>
      );
    });
    return (
      <div className="bg10">
        <CSSTransition
          in={change}
          timeout={500}
          classNames="chan"
          unmountOnExit
          key="chan"
        >
          <div className="title">产品上线啦！</div>
        </CSSTransition>

        <TransitionGroup>{text}</TransitionGroup>
        <CSSTransition
          in={show}
          timeout={500}
          classNames="yonghu"
          unmountOnExit
          key="yonghu"
        >
          <img src={yonghu} className="yonghu" alt="yonghu" />
        </CSSTransition>

        <img src={logo} className="logo" alt="logo" />
        <img src={them} className="them" alt="them" />
        <MyButton time={time} callback={this.showChange.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Ten;

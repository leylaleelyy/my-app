import React from 'react';
import './seven.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MyButton from '../../component/mybutton/mybutton';
import ui2 from '../../assets/imgs/ui2.png';
import han from '../../assets/imgs/han.png';
import xuqiu from '../../assets/imgs/xuqiu.png';
import xuqiu2 from '../../assets/imgs/xuqiu2.png';
import man2 from '../../assets/imgs/man2.png';
import man3 from '../../assets/imgs/man3.png';

class Seven extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [
        '这个需求做不了！',
        '这个需求很紧急！',
        '这个需求很重要！',
        '这个需求很简单！'
      ],
      showText: [],
      time: 700,
      show: false,
      change: false,
      clock: true,
      times: 0
    };
  }

  showChange() {
    const { times, texts, showText } = this.state;
    this.setState({
      times: times + 1
    });
    switch (times) {
      case 0:
        this.setState({
          change: true,
          clock: false
        });
        break;
      case 1:
        this.setState({
          clock: true
        });
        break;
      case 2:
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
          change: false,
          clock: false
        });
        setTimeout(() => {
          this.props.history.push('eight');
        }, 3000);
        break;
      default:
        break;
    }
  }

  render() {
    const { show, change, showText, clock, time } = this.state;
    const texts = showText.map((item, index) => {
      return (
        <CSSTransition
          in={true}
          timeout={500}
          classNames={'conver' + index}
          key={index}
        >
          <div className="conver">{item}</div>
        </CSSTransition>
      );
    });
    return (
      <div className="bg7">
        <TransitionGroup>{texts}</TransitionGroup>
        <div
          className="clock1"
          style={clock ? {} : { animation: 'circle 500ms linear' }}
        />
        <CSSTransition
          in={change}
          timeout={500}
          classNames="title"
          unmountOnExit
          key="title"
        >
          <div className="title">
            你以为的
            <br />
            产品经理和程序员的
            <br />
            相爱相杀......
          </div>
        </CSSTransition>

        <img src={ui2} className="ui2" alt="ui2" />

        <img src={xuqiu} className="xuqiu1" alt="xuqiu" />

        <CSSTransition
          in={change}
          timeout={500}
          classNames="man"
          unmountOnExit
          key="man2"
        >
          <img src={man2} className="man" alt="man2" />
        </CSSTransition>

        <CSSTransition
          in={show}
          timeout={500}
          classNames="xuqiu"
          unmountOnExit
          key="xuqiu2"
        >
          <img src={xuqiu2} className="xuqiu" alt="xuqiu2" />
        </CSSTransition>
        <CSSTransition
          in={show}
          timeout={500}
          classNames="man"
          unmountOnExit
          key="idea4"
        >
          <img src={man3} className="man" alt="man3" />
        </CSSTransition>

        <img src={han} className="han" alt="han" />
        <MyButton time={time} callback={this.showChange.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}
export default Seven;

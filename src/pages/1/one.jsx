import React from 'react';
import './one.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import MyButton from '../../component/mybutton/mybutton';

class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 500,
      times: 0,
      show: false,
      tishi: false,
      btn: false,
      texts: ['“闲置品交易”', '“高效收作业”', '“校园需求”', '“公选课选课指南”'],
      showText: [],
      link: ''
    };
  }
  componentDidMount() {
    let { showText, texts } = this.state;
    setInterval(() => {
      if (texts.length > 0) {
        let text = texts.pop();
        showText.push(text);
        this.setState({
          texts: texts,
          showText: showText
        });
      }
    }, 1000);
    setTimeout(() => {
      this.setState({
        showText: [],
        tishi: true,
        btn: true
      });
    }, 6000);
  }

  handleAnimation() {
    const { times } = this.state;
    this.setState({
      times: times + 1
    });
    switch (times) {
      case 0:
        this.setState({
          showText: [],
          show: true,
          tishi: false,
          time: 700
        });
        break;
      case 2:
        break;
      case 3:
        this.setState({
          show: false
        });
        this.props.history.push('two');
        break;
      default:
        break;
    }
  }

  render() {
    const { showText, show, time, tishi, btn } = this.state;
    const texts = showText.map((item, index) => {
      return (
        <CSSTransition
          in={true}
          timeout={500}
          classNames={'show' + index}
          key={index}
        >
          <div className="thoughts">
            <span>{item}</span>
          </div>
        </CSSTransition>
      );
    });

    return (
      <div className="bg1">
        <TransitionGroup>{texts}</TransitionGroup>
        <CSSTransition
          in={show}
          timeout={500}
          classNames="idea"
          unmountOnExit
          key="idea"
        >
          <div className="idea" />
        </CSSTransition>
        <CSSTransition
          in={tishi}
          timeout={500}
          classNames="tishi"
          unmountOnExit
          key="tishi"
        >
          <div className="tishi">
            <span>
              长按前进剧情
              <br />
              松手即可暂停
            </span>
          </div>
        </CSSTransition>
        <CSSTransition
          in={btn}
          timeout={500}
          classNames="tishi"
          unmountOnExit
          key="button"
        >
          <MyButton
            time={time}
            callback={this.handleAnimation.bind(this)}
          ></MyButton>
        </CSSTransition>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>
      </div>
    );
  }
}

export default One;

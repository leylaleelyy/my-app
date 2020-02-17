import React from 'react';
import MyButton from '../../component/mybutton/mybutton';
import soft from '../../assets/imgs/soft.png';
import './four.scss';
import yuan from '../../assets/imgs/yuan.png';
import turn from '../../assets/imgs/turn.png';
import ui1 from '../../assets/imgs/ui1.png';

class Four extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
      change: false,
      time: 500
    };
  }
  changeShow() {
    this.setState({
      change: true
    });
    setTimeout(() => {
      this.props.history.push('five');
    }, 2000);
  }
  render() {
    const { change, time } = this.state;
    return (
      <div className="bg4">
        <div
          className="idea"
          style={
            change
              ? { animation: 'fly4 500ms ease-in forwards' }
              : { animation: 'fly3 2s ease-in forwards' }
          }
        ></div>
        <img
          src={soft}
          alt="soft"
          className="soft"
          style={
            change
              ? {
                  animation: 'softleave 1000ms ease-in forwards'
                }
              : { animation: 'softenter 500ms ease-in 2.5s forwards' }
          }
        />
        <img
          src={yuan}
          alt="yuan"
          className="yuan"
          style={
            change
              ? {
                  animation: 'yuanleave 1000ms ease-in forwards'
                }
              : { animation: 'yuanenter 500ms ease-in 2.5s forwards' }
          }
        />
        <img
          src={turn}
          alt="turn1"
          className="turn1"
          style={
            change
              ? {
                  animation: 'turnexit 300ms ease-in forwards'
                }
              : { animation: 'turnenter 2000ms ease-in 2s forwards' }
          }
        />
        <img
          src={turn}
          alt="turn2"
          className="turn2"
          style={
            change
              ? {
                  animation: 'turnexit 300ms ease-in forwards'
                }
              : { animation: 'turnenter 2000ms ease-in 2s forwards' }
          }
        />
        <img
          src={ui1}
          alt="ui1"
          className="ui1"
          style={
            change
              ? {
                  animation: 'uishow 3000ms ease-in forwards'
                }
              : {}
          }
        />
        <MyButton time={time} callback={this.changeShow.bind(this)}></MyButton>
        <a className="nsignin" href="https://newcvs.bingyan.net/">
          <div>直接报名</div>
        </a>{' '}
      </div>
    );
  }
}
export default Four;

import React from 'react';
import './fifth.scss';
import bingyan from '../../assets/imgs/bingyan.png';

class Fifth extends React.Component {
  render() {
    return (
      <div className="bg15">
        <img src={bingyan} alt="bingyan" className="bingyan" />
        <h2>冰岩——你的互联网大学</h2>
        <div className="wen">
          产品破壳上线的快乐，
          <br />
          认真互怼又相爱的伙伴，
          <br />
          Huster对我们的认可
          <br />
          是我们在互联网无畏前行的动力
          <br />
          过去的20年，
          <br />
          我们以产品为根基，创意为方向
          <br />
          不断创新与挑战，留下了自己的战绩：
          <br />
          单个产品浏览量达到
          <big>
            <b>380w</b>
          </big>
          ；
          <br />
          服务用户数超过
          <big>
            <b>3000w人</b>
          </big>
          ；
          <br />
          单个视频抖音播放量超
          <big>
            <b>400w</b>
          </big>
          ；
          <br />
          上线了
          <b>爱选修，HUST有借，</b>
          <br />
          <b>华科帮帮忙，iKnow华科，Link Hust</b>
          <br />等
          <big>
            <b>100+</b>
          </big>
          个贴近华科师生的互联网产品
          <br />
          未来，冰岩想邀请你
          <br />
          一起打造下一批明星产品！
        </div>
        <a className="signin" href="https://newcvs.bingyan.net/">
          <div>报名入学</div>
        </a>
        <a href="#" className="tuiwen">
          进入推文查看详情
        </a>
      </div>
    );
  }
}
export default Fifth;

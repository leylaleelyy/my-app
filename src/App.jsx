import React from 'react';
import './app.scss';
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom';
import './index.css';
import { RouterConfig } from './RouteConfig';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BGM from 'react-awesome-snippets-bgm';
import bgm from './assets/music/bgm.mp3';
import ten from './assets/music/ten.mp3';
import forth from './assets/music/forth.mp3';
const QRCode = require('qrcode.react');

const DEFAULT_SCENE_CONFIG = {
  enter: 'from-right',
  exit: 'to-exit'
};

const getSceneConfig = location => {
  const matchedRoute = RouterConfig.find(config =>
    new RegExp(`^${config.path}$`).test(location.pathname)
  );
  return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};

let oldLocation = null;
const Routes = withRouter(({ location, history }) => {
  // 转场动画应该都是采用当前页面的sceneConfig，所以：
  // push操作时，用新location匹配的路由sceneConfig
  // pop操作时，用旧location匹配的路由sceneConfig
  let classNames = '';
  if (history.action === 'PUSH') {
    classNames = 'forward-' + getSceneConfig(location).enter;
  } else if (history.action === 'POP' && oldLocation) {
    classNames = 'back-' + getSceneConfig(oldLocation).exit;
  }

  // 更新旧location
  oldLocation = location;

  return (
    <TransitionGroup
      className={'router-wrapper'}
      childFactory={child => React.cloneElement(child, { classNames })}
    >
      <CSSTransition timeout={800} key={location.pathname}>
        <Switch location={location}>
          {RouterConfig.map((config, index) => (
            <Route exact key={index} {...config} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

// const allPath = RouterConfig.map(i => RouterConfig[i].path);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      phone: true,
      bgm: bgm
    };
  }

  componentWillMount() {
    if (!window.navigator) {
      console.log('当前设备：移动端APP');
    } else {
      if (/Mobile|Android|webOS|iPhone|Phone/i.test(navigator.userAgent)) {
        console.log('当前设备：移动端H5');
      } else if (navigator.userAgent.indexOf('iPad') !== -1) {
        this.setState({
          phone: false
        });
      } else {
        this.setState({
          phone: false
        });
      }
    }
  }
  componentDidMount() {
    setInterval(() => {
      let url = document.location.toString().split('/');
      console.log(url[url.length - 1]);
      switch (url[url.length - 1]) {
        case 'ten':
          this.setState({
            bgm: ten
          });
          break;
        case 'forth':
          this.setState({
            bgm: forth
          });
          break;
        case 'fifth':
          this.setState({
            bgm: forth
          });
          break;
        default:
          this.setState({
            bgm: bgm
          });
      }
    }, 2000);
  }

  render() {
    const { bgm, phone } = this.state;
    if (phone) {
      return (
        <BrowserRouter onhashchange="">
          <Routes />
          <BGM
            src={bgm}
            component={({ playing }) => (
              <div className={playing ? 'playing' : 'paused'} />
            )}
          />
        </BrowserRouter>
      );
    } else {
      return (
        <div className="code">
          <QRCode value={`http://baidu.com`} size={250} />
          <div>请使用手机扫描二维码以获得更好的体验</div>
        </div>
      );
    }
  }
}
export default App;

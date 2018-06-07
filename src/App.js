import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Header, HeaderRow, Textfield, Drawer, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';


/*import Header from './components/Header';*/
import Feed from './components/Feed'
import Profile from './components/Profile'
import ArticleView from './components/ArticleView'
import Editor from './components/Editor'
import requireAuthentication from './utils/requireAuth'
import SignInWith from './components/SignInWith'
import Landing from './components/Landing'
import AboutMe from './components/AboutMe'
import CodingPad from './components/CodingPad'


import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
      const pathname = window.location.pathname;

      return (
      <div className="demo-big-content">
          <Layout>
              <Header waterfall className="header-color">
                  <HeaderRow title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">SoloLearn 汉化</Link>}>
                      <Navigation>
                          <Link to="/aboutme">关于</Link>
                          <Link to="/aboutme#">价格</Link>
                          <Link to="/codingpad">开始编程</Link>
                          <Link to="/profile">我的账号</Link>
                      </Navigation>
                      <Textfield
                          value=""
                          onChange={() => {}}
                          label="Search2"
                          expandable
                          expandableIcon="search"
                      />
                  </HeaderRow>
              </Header>


              <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">SoloLearn 汉化</Link>}>
                  <Navigation>
                      <Link to="/codingpad">Java</Link>
                      <Link to="/">登录</Link>
                      <SignInWith />
                  </Navigation>
              </Drawer>

              <Content className="header-color">
                  <div className="page-content" />

                  <Switch>
                      <Route exact path="/" component={Landing} />
                      <Route path="/profile/:id" component={Profile} />
                      <Route path="/articleview/:id" component={ArticleView} />
                      <Route path="/editor" component={requireAuthentication(Editor)} />
                      <Route path="/codingpad" component={CodingPad} />
                      <Route path="/aboutme" component={AboutMe} />

                      <Route path="**" component={Feed} />
                  </Switch>
              </Content>

              <Footer size="mini">
                  <FooterSection type="left" logo="Zoomzooom">
                      <FooterLinkList>
                          <Link to="aboutme">Help</Link>
                          <Link to="aboutme">Privacy & Terms</Link>
                      </FooterLinkList>
                  </FooterSection>
                  <FooterSection type="right" className="banner-text">
                          <div className="social-links">
                              <a href="/" target="_blank" rel="noopener noreferer"><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
                              <a href="/" target="_blank" rel="noopener noreferer"><i className="fa fa-github-square" aria-hidden="true"/></a>
                              <a href="/" target="_blank" rel="noopener noreferer"><i className="fa fa-free-code-camp" aria-hidden="true"/></a>
                              <a href="/" target="_blank" rel="noopener noreferer"><i className="fa fa-youtube-square" aria-hidden="true"/></a>
                          </div>

                  </FooterSection>
              </Footer>
          </Layout>

          {/*{ !pathname.includes('editor') ? <Header /> : '' }*/}

      </div>

    );
  }
}

export default App;

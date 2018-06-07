import React from 'react';
import { connect } from 'react-redux'
import { Grid, Cell, Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Landing extends React.Component {
    state = {activeTab: 0};

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (
                <div className="courses-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Java 课程 #1</CardTitle>
                        <CardText>
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>开始学习</Button>
                            <Button colored>GitHub源码</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Java 课程 #2</CardTitle>
                        <CardText>
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>开始学习</Button>
                            <Button colored>GitHub源码</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Java 课程 #3</CardTitle>
                        <CardText>
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>开始学习</Button>
                            <Button colored>GitHub源码</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Java 课程 #4</CardTitle>
                        <CardText>
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>开始学习</Button>
                            <Button colored>GitHub源码</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Java 课程 #5</CardTitle>
                        <CardText>
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>开始学习</Button>
                            <Button colored>GitHub源码</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Java 课程 #6</CardTitle>
                        <CardText>
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>开始学习</Button>
                            <Button colored>GitHub源码</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1) {
            return (
                <div>
                    {this.props.isAuth ? <a className="button" href="/editor">Write a story</a> : ''}
                    {this.props.isAuth ? '' : <li onClick={this.props.openSignInWith}><a href="#">Sign in / Sign up</a></li>}
                </div>
            )
        }
        else if(this.state.activeTab === 2) {
            return (
                <h1>React JS is Coming</h1>
            )
        }
    }

    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                    <div className="category-tabs">
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                            <Tab>Java</Tab>
                            <Tab>C/C++</Tab>
                            <Tab>React</Tab>
                        </Tabs>


                        <Grid>
                            <Cell col={12}>
                                <div className="content">{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>

                    </div>
                </Cell>


                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.authUser.user,
        isAuth: state.authUser.isAuth
    }
};
const mapDispatchToProps = dispatch => {
    return {
        openSignInWith: ()=> { dispatch({type: 'TOGGLE_MODAL', modalMode: true}) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
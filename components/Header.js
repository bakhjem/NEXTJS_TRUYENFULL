import Link from 'next/link'
import React, { Component } from "react";
// import "antd/dist/antd.css";
import '../Css/styless.css';
import Router from 'next/router';
import { createMedia } from '@artsy/fresnel'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Input, Icon
} from 'semantic-ui-react'
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})
const linkStyle = {
  marginRight: 15
}

class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      a: '',
      s: '',
      activeItem: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event, data) {
    console.log(data)
    this.setState({ q: data.value });
  }
  handleItemClick = (data) => this.setState({ activeItem: data })
  handleSubmit() {
    // console.log(112);
    // this.setState({a:'1'})
    Router.push(`/search/${this.state.s}/1`)
  }
  change_alias = (alias) => {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.trim();
    return str;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.q !== prevState.q) {
      this.setState({
        s: this.change_alias(this.state.q).split(' ').join('_')
      })
    }
  }


  render() {
    const { activeItem } = this.state
    console.log(this.state)
    return (
      <div>
        {this.state.a === '1' && Router.push('/search/' + this.state.s + '/1')}
        <MediaContextProvider>
          <Media greaterThan='mobile'>
            <Segment inverted>
              <Menu inverted secondary>
                <Container>
                  <Link
                    href="/"
                  >
                    <Menu.Item name='home'
                      active={activeItem === 'home'}
                      onClick={() => this.handleItemClick('home')}>

                      <Image size='tiny' src='/logo.png' style={{ marginRight: '1.5em' }} />
                      Trang chủ
                    </Menu.Item>
                  </Link>
                  <Link
                    href="/update/1"
                  >
                    <Menu.Item name='last'
                      active={activeItem === 'last'}
                      onClick={() => this.handleItemClick('last')}>Mới cập nhật</Menu.Item>
                  </Link>
                  <Link
                    href="/hot/1"
                  >
                    <Menu.Item name='hot'
                      active={activeItem === 'hot'}
                      onClick={() => this.handleItemClick('hot')}>Truyện hot</Menu.Item>
                  </Link>
                  <Link
                    href="/complete/1"
                  >
                    <Menu.Item name='complete'
                      active={activeItem === 'complete'}
                      onClick={() => this.handleItemClick('complete')}>Truyện full</Menu.Item>
                  </Link>
                  <Menu.Item as='a' position='right'>
                    <Input
                      icon={<Icon name='search' inverted circular link onClick={() => this.handleSubmit()} />}
                      placeholder='Tìm kiếm...' onChange={(e, data) => this.handleChange(e, data)}
                    />
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>

          </Media>
          <Media at='mobile'>
            <Segment inverted>
              <Menu inverted pointing secondary>
                <Container>
                  <Link
                    href="/"
                  >
                    <Menu.Item name='home'
                      active={activeItem === 'home'}
                      onClick={() => this.handleItemClick('home')}>

                      <Image size='tiny' src='/logo.png' style={{ marginRight: '1.5em' }} />
                    </Menu.Item>
                  </Link>
                  <Menu.Item as='a' position='right'>
                    <Input
                      icon={<Icon name='search' inverted circular link onClick={() => this.handleSubmit()} />}
                      placeholder='Search...' onChange={(e, data) => this.handleChange(e, data)}
                    />
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>
          </Media>
        </MediaContextProvider>

      </div>
    );
  }
}

export default Headers;
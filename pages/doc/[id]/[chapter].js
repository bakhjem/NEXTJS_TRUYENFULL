import Layout from '../../../components/MyLayout'
import 'isomorphic-unfetch'
import Link from 'next/link'
import React, { Component, createRef } from 'react';
import { createMedia } from '@artsy/fresnel'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Helmet } from 'react-helmet';
import { saveNovel, settingNovel } from '../../../redux/actions/novelActions'
import { API_URL } from '../../../config/config'
import {
    Container, Breadcrumb,
    Divider,
    Dropdown,
    Grid,
    Header, Select,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
    Item,
    Sticky, Rail,
    Ref, Button, Popup, Modal
} from 'semantic-ui-react';
const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})
const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
    // backgroundColor: '#fff',
    // border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}
const countryOptions = [
    { key: 'Merriweather', value: 'Merriweather', text: 'Merriweather' },
    { key: 'Libre Baskerville', value: 'Libre Baskerville', text: 'Libre Baskerville' },
    { key: 'Gentium Book Basic', value: 'Gentium Book Basic', text: 'Gentium Book Basic' },
    { key: 'Roboto', value: 'Roboto', text: 'Roboto' },
    { key: 'Rubik', value: 'Rubik', text: 'Rubik' },
    { key: 'Nunito', value: 'Nunito', text: 'Nunito' },
]
class Chapter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prechap: props.novelchapter.prechap.length < 4 ? '' : props.novelchapter.prechap,
            nextchap: props.novelchapter.nextchap.length < 4 ? '' : props.novelchapter.nextchap,
            menuFixed: false,
            overlayFixed: false,
            totalchapter: 1,
            showmodal: false,
            listchapter: [],
            nightmode: this.props.novelReducer.nightmode,
            fontsize: this.props.novelReducer.fontsize,
            font: this.props.novelReducer.font,
            lineheight: this.props.novelReducer.lineheight,
            background: this.props.novelReducer.background,
            backgroundbig: this.props.novelReducer.background,
        }
    }
    contextRef = createRef()
    handleOverlayRef = (c) => {
        const { overlayRect } = this.state

        if (!overlayRect) {
            this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
        }
    }

    stickOverlay = () => this.setState({ overlayFixed: true })

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickOverlay = () => this.setState({ overlayFixed: false })

    unStickTopMenu = () => this.setState({ menuFixed: false })
    static async getInitialProps(context) {
        const { id, chapter } = context.query
        const res = await fetch(`${API_URL}chapter?novelid=${id}&chapterid=/${chapter}/`)
        const json = await res.json()

        return { novelchapter: json }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.novelchapter !== prevProps.novelchapter) {
            this.setState({
                prechap: this.props.novelchapter.prechap.length < 4 ? '' : this.props.novelchapter.prechap,
                nextchap: this.props.novelchapter.nextchap.length < 4 ? '' : this.props.novelchapter.nextchap,
            })
        }
        if (this.props.novelReducer !== prevProps.novelReducer) {
            this.setState({
                nightmode: this.props.novelReducer.nightmode,
                fontsize: this.props.novelReducer.fontsize,
                font: this.props.novelReducer.font,
                lineheight: this.props.novelReducer.lineheight,
                background: this.props.novelReducer.background,
                backgroundbig: this.props.novelReducer.background,
            })
        }
    }


    handleNightMode = (data) => {
        let params = {
            nightmode: !data,
            fontsize: this.state.fontsize,
            font: this.state.font,
            lineheight: this.state.lineheight,
            background: this.state.background,
        }
        this.props.settingNovel(params)
    }
    handleChangeBackground = (data, bigdata) => {
        if (data === '#232323') {
            let params = {
                nightmode: true,
                fontsize: this.state.fontsize,
                font: this.state.font,
                lineheight: this.state.lineheight,
                background: this.state.background,
                backgroundbig: bigdata
            }
            return this.props.settingNovel(params)
        }
        let params = {
            nightmode: false,
            fontsize: this.state.fontsize,
            font: this.state.font,
            lineheight: this.state.lineheight,
            background: data,
            backgroundbig: bigdata
        }
        this.props.settingNovel(params)
    }
    handleChangeFont = (e, data) => {
        console.log(data)
        let params = {
            nightmode: this.state.nightmode,
            fontsize: this.state.fontsize,
            font: data.value,
            lineheight: this.state.lineheight,
            background: this.state.background,
            backgroundbig: this.state.backgroundbig
        }
        return this.props.settingNovel(params)
    }
    handleDegree = (type) => {
        if (type === 1) {
            let params = {
                nightmode: this.state.nightmode,
                fontsize: this.state.fontsize - 2 < 14 ? this.state.fontsize : this.state.fontsize - 2,
                font: this.state.value,
                lineheight: this.state.lineheight,
                background: this.state.background,
                backgroundbig: this.state.backgroundbig
            }
            return this.props.settingNovel(params)
        } else {
            let params = {
                nightmode: this.state.nightmode,
                fontsize: this.state.fontsize + 2 > 32 ? this.state.fontsize : this.state.fontsize + 2,
                font: this.state.value,
                lineheight: this.state.lineheight,
                background: this.state.background,
                backgroundbig: this.state.backgroundbig
            }
            return this.props.settingNovel(params)
        }

    }
    render() {
        console.log(this.props)
        console.log(this.state)
        const { menuFixed, overlayFixed, overlayRect } = this.state;
        return (
            <Layout>
                <style>
                    {`
          html, body {
            background: ${this.props.novelReducer.nightmode === true ? '#1a1a1a' : this.props.novelReducer.backgroundbig} ;
          }
        `}
                </style>
                <Helmet>
                    <title>{`${this.props.novelchapter.chaptername}`} - TruyenNT</title>
                    <meta name="description" content={`Đọc truyện ${this.props.novelchapter.chaptername}, hỗ trợ đọc trên điện thoại và máy tính bảng`} />
                    <meta name="theme-color" content="#008f68" />
                    <meta name="keywords" content={`${this.props.novelchapter.chaptername}, ${this.props.novelchapter.chaptername} free, ${this.props.novelReducer.novelname} hoàn, ${this.props.novelReducer.novelname} full chương, ${this.props.novelReducer.novelname} chương cuối`} />
                    <link rel="canonical" href={`/doc/${this.props.novelchapter.idnovels}${this.props.novelchapter.idchapter}`}></link>

                </Helmet>
                <MediaContextProvider>
                    <Media greaterThan='mobile'>
                        <Visibility
                            onBottomPassed={this.stickTopMenu}
                            onBottomVisible={this.unStickTopMenu}
                            once={false}
                        >
                            <Menu
                                borderless inverted={this.props.novelReducer.nightmode}
                                fixed={menuFixed ? 'top' : undefined}
                                style={menuFixed ? fixedMenuStyle : menuStyle}
                            >
                                <Container>
                                    <Menu.Item header>
                                        <Breadcrumb size={'large'}>
                                            <Breadcrumb.Section link><Link
                                                as={`/novel/${this.props.novelchapter.idnovels}/1`} href={`/novel/[id]/1`}
                                            ><Icon color='white' name='home' /></Link></Breadcrumb.Section>
                                            <Breadcrumb.Divider icon='right chevron' />
                                            <Breadcrumb.Section active>{this.props.novelchapter.chaptername}</Breadcrumb.Section>
                                        </Breadcrumb>
                                    </Menu.Item>
                                </Container>
                            </Menu>
                        </Visibility>
                    </Media>
                    <Media at='mobile'>
                        <Visibility
                            onBottomPassed={this.stickTopMenu}
                            onBottomVisible={this.unStickTopMenu}
                            once={false}
                        >
                            <Menu
                                borderless inverted={this.props.novelReducer.nightmode}
                                fixed={menuFixed ? 'top' : undefined}
                                style={menuFixed ? fixedMenuStyle : menuStyle}
                            >
                                <Menu.Item style={{ width: '80%', overflow: 'hidden' }} header position='left'>
                                    <Breadcrumb size={'large'}>
                                        <Breadcrumb.Section link><Link
                                            as={`/novel/${this.props.novelchapter.idnovels}/1`} href={`/novel/[id]/1`}
                                        ><Icon color='white' name='home' /></Link></Breadcrumb.Section>
                                    </Breadcrumb>
                                    <Breadcrumb.Divider icon='right chevron' />
                                    <Breadcrumb.Section active>{this.props.novelchapter.chaptername}</Breadcrumb.Section>
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button onClick={() => this.handleNightMode(this.props.novelReducer.nightmode)} size='large' circular icon={this.props.novelReducer.nightmode ? 'lightbulb outline' : 'moon'} />
                                </Menu.Item>


                            </Menu>
                        </Visibility>
                    </Media>
                </MediaContextProvider>
                <Container text style={{ backgroundColor: this.props.novelReducer.nightmode === true ? '#232323' : this.props.novelReducer.background }}>
                    <Grid style={{ marginTop: 20 }}>
                        <Grid.Column className='detail-containers' mobile={16} tablet={16} computer={16}>
                            <Ref innerRef={this.contextRef}>
                                <Segment style={{ backgroundColor: this.props.novelReducer.nightmode === true ? '#232323' : this.props.novelReducer.background }}>
                                    <Item.Group textAlign='left'>
                                        <Item.Description className='content' style={{
                                            fontFamily: this.props.novelReducer.font, lineHeight: this.props.novelReducer.lineheight,
                                            fontSize: this.props.novelReducer.fontsize, color: this.props.novelReducer.nightmode === true ? '#b3b3b3' : 'black'
                                        }} >
                                            {this.props.novelchapter.content !== undefined ?
                                                ReactHtmlParser(this.props.novelchapter.content)
                                                : null
                                            }
                                        </Item.Description>
                                    </Item.Group>
                                    <MediaContextProvider>
                                        <Media greaterThan='mobile'>
                                            <Rail position='right' style={{ marginTop: 100 }}>
                                                <Sticky offset={100} bottomOffset={100} context={this.contextRef}>
                                                    <List>
                                                        <List.Item>
                                                            <Popup position='left center' trigger={<Button size='large' circular icon='font' />} flowing hoverable>
                                                                <Grid textAlign='left' divided columns={1}>
                                                                    <Grid.Column textAlign='left'>
                                                                        <Header as='h4'>Background</Header>
                                                                        <Grid columns={4}>
                                                                            <Grid.Row>
                                                                                <Grid.Column>
                                                                                    <div onClick={() => this.handleChangeBackground('#fff', '#f5f7fa')} className='read-setting_white-color__3ZTE4' />
                                                                                </Grid.Column>
                                                                                <Grid.Column>
                                                                                    <div onClick={() => this.handleChangeBackground('#fff6df', '#fff9eb')} className='read-setting_orange-color__3chix' />
                                                                                </Grid.Column>
                                                                                <Grid.Column>
                                                                                    <div onClick={() => this.handleChangeBackground('#ebf9eb', '#f2f9f2')} className='read-setting_green-color__WTjD7' />
                                                                                </Grid.Column>
                                                                                <Grid.Column>
                                                                                    <div onClick={() => this.handleChangeBackground('#232323', '#1a1a1a')} className='read-setting_black-color__3KmIV' />
                                                                                </Grid.Column>
                                                                            </Grid.Row>
                                                                        </Grid>
                                                                    </Grid.Column>
                                                                    <Grid.Column textAlign='left'>
                                                                        <Header as='h4'>Font Size</Header>
                                                                        <Grid columns={4}>
                                                                            <Grid.Row>
                                                                                <Button.Group size='large'>
                                                                                    <Button onClick={() => this.handleDegree(1)}>A-</Button>
                                                                                    <Button.Or text={this.props.novelReducer.fontsize} />
                                                                                    <Button onClick={() => this.handleDegree(2)}>A+</Button>
                                                                                </Button.Group>
                                                                                <Select onChange={(e, data) => this.handleChangeFont(e, data)} defaultValue={this.props.novelReducer.font} options={countryOptions} />
                                                                            </Grid.Row>
                                                                            <Grid.Row>

                                                                            </Grid.Row>
                                                                        </Grid>
                                                                    </Grid.Column>
                                                                </Grid>
                                                            </Popup>

                                                        </List.Item>

                                                        <List.Item>
                                                            <Button onClick={() => this.handleNightMode(this.props.novelReducer.nightmode)} size='large' circular icon={this.props.novelReducer.nightmode ? 'lightbulb outline' : 'moon'} />
                                                        </List.Item>
                                                    </List>
                                                </Sticky>
                                            </Rail>
                                        </Media>
                                    </MediaContextProvider>
                                </Segment>
                            </Ref>
                        </Grid.Column>
                        <MediaContextProvider>
                            <Media greaterThan='mobile'>
                                <Grid.Row verticalAlign='middle'>
                                    <Button.Group widths='3'>
                                        <Link
                                            as={`/doc/${this.props.novelchapter.idnovels}${this.state.prechap}`}
                                            href={`/doc/[id]/[chapter]`}
                                        >
                                            <Button size='huge' color='black' disabled={this.state.prechap !== "" ? false : true} labelPosition='left' icon='left chevron' content='Prev chapter' />
                                        </Link>
                                        <Link
                                            as={`/novel/${this.props.novelchapter.idnovels}/1`}
                                            href={`/novel/[id]/1`}
                                        >
                                            <Button size='huge' color='black' icon='bars' content='Chapter List' />
                                        </Link>
                                        <Link
                                            as={`/doc/${this.props.novelchapter.idnovels}${this.state.nextchap}`}
                                            href={`/doc/[id]/[chapter]`}
                                        >
                                            <Button size='huge' color='black' disabled={this.state.nextchap !== "" ? false : true} labelPosition='right' icon='right chevron' content='Next chapter' />
                                        </Link>
                                    </Button.Group>
                                </Grid.Row>
                            </Media>
                            <Media at='mobile'>
                                <Grid.Row mobile={16} tablet={16} computer={16} verticalAlign='middle'>
                                    <Button.Group widths='3'>
                                        <Link
                                            as={`/doc/${this.props.novelchapter.idnovels}${this.state.prechap}`}
                                            href={`/doc/[id]/[chapter]`}
                                        >
                                            <Button size='huge' color='black' disabled={this.state.prechap !== "" ? false : true} labelPosition='left' icon='left chevron' />
                                        </Link>
                                        <Link
                                            as={`/novel/${this.props.novelchapter.idnovels}/1`}
                                            href={`/novel/[id]/1`}
                                        >
                                            <Button size='huge' color='black' icon='bars' />
                                        </Link>

                                        <Link
                                            as={`/doc/${this.props.novelchapter.idnovels}${this.state.nextchap}`}
                                            href={`/doc/[id]/[chapter]`}
                                        >
                                            <Button size='huge' color='black' disabled={this.state.nextchap !== "" ? false : true} labelPosition='right' icon='right chevron' />
                                        </Link>
                                    </Button.Group>
                                </Grid.Row>
                            </Media>
                        </MediaContextProvider>
                    </Grid>
                </Container>

            </Layout>
        )
    }
}
function mapStateToProps(state) {
    return {
        novelReducer: state.novelReducer
    };
}

export default connect(mapStateToProps, { saveNovel, settingNovel })(Chapter);
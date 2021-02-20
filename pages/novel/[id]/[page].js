
import Layout from '../../../components/MyLayout'
import 'isomorphic-unfetch'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Helmet } from 'react-helmet';
import { Tag } from 'antd'
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Icon,
    Segment,
    Pagination,
    Item, Button, Label
} from 'semantic-ui-react';
import { API_URL } from '../../../config/config'
import { createMedia } from '@artsy/fresnel'
const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})
function Truyen(props) {
    const router = useRouter()
    const handleChangepage = (e, data) => {
        console.log(data)
        if (data.activePage !== props.page) {
            router.push(`/novel/${props.id}/${data.activePage}`)
        }
    }

    return (
        <Layout>
            <style>
                {`
          html, body {
            background-color: #242933 !important;
          }
          p {
            align-content: center;
            background-color: #495285;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 6em;
          }
          p > span {
            opacity: 0.4;
            text-align: center;
          }
        }
        `}
            </style>
            <Helmet>
                <title>{props.data.novelsname} -TruyenNT</title>
                <meta name="description" content={`Đọc truyện ${props.data.novelsname} của tác giả ${props.data.author},tình trạng: ${props.data.status}, hỗ trợ đọc trên điện thoại và máy tính bảng`} />
                <meta name="theme-color" content="#008f68" />
                <meta name="keywords" content={`${props.data.novelsname}, đọc truyện ${props.data.novelsname},đọc ${props.data.novelsname} hoàn,${props.data.novelsname} full`} />
                <link rel="canonical" href={`/novel/${props.data.idnovels}/1`}></link>
                <meta property="og:title" content={`${props.data.novelsname}`}></meta>
                <meta property="og:image" content={`${props.data.cover}`}></meta>
                <meta property="og:description" content={`Đọc truyện ${props.data.novelsname} của tác giả ${props.data.author},tình trạng: ${props.data.status}, hỗ trợ đọc trên điện thoại và máy tính bảng`}></meta>
                <meta property="og:url" content={`/novel/${props.data.idnovels}/1`}></meta>
                <meta property="book:author" content={`${props.data.author}`}></meta>
                <meta property="book:tag" content={`${props.data.novelsname}`}></meta>
            </Helmet>
            <MediaContextProvider>
                <Media greaterThan='mobile'>
                    <Segment
                        inverted
                        style={{ maxHeight: '32.625rem', padding: '1em 0em' }}
                        vertical
                    >
                        <div className='book-info'>
                            <img className='glass_background-img' src={props.data.cover} />
                            <Container style={{}}>
                                <Grid>
                                    <Grid.Column mobile={16} tablet={4} computer={4}>
                                        <Image fluid className='item-img' src={props.data.cover} style={{ height: '22.75rem' }} />
                                    </Grid.Column>
                                    <Grid.Column mobile={16} tablet={12} computer={12}>
                                        <Item.Group textAlign='left'>
                                            <Item.Content>
                                                <Item.Header className='book-title' as='h1'>{props.data.novelsname}</Item.Header>
                                            </Item.Content>
                                            <Item.Extra textAlign='left' style={{ marginTop: 10 }}>
                                                <span className='label'>Tác giả:</span> {props.data.author}
                                            </Item.Extra>
                                            <Item.Extra textAlign='left' style={{ marginTop: 10 }}>
                                                Thể loại: {props.data.genresdata.map(genresdata => (
                                                <Link as={`/theloai/${genresdata.idgenres}1`} href={`/theloai/[id]/[page]`}>
                                                    <Tag color="#f50">
                                                        {genresdata.genrename}
                                                    </Tag>

                                                </Link>
                                            ))}
                                            </Item.Extra>
                                            <Item.Extra textAlign='left' style={{ marginTop: 10 }}>
                                                <span className='label'>Status:</span> {props.data.status}
                                            </Item.Extra>
                                        </Item.Group>
                                        <Link
                                            as={`/doc/${props.data.idnovels}${props.data.chapterlist[0].idchapter}`}
                                            href={`/doc/[id]/[chapter]`}>
                                            <Button size='huge' color='yellow'>ĐỌC</Button>
                                        </Link>

                                    </Grid.Column>
                                </Grid>
                            </Container>
                        </div>
                    </Segment>

                </Media>
                <Media at='mobile'>
                    <Segment
                        inverted
                        style={{ minHeight: '32.625rem', padding: '1em 0em', }}
                        vertical
                    >
                        <Container style={{}}>
                            <Grid>
                                <Grid.Column mobile={16} tablet={4} computer={4}>
                                    <div className='basic-info_header__31qug'>
                                        <div className='glass_background__p1P4f basic-info_cover-background__1Q9Rl'>
                                            <img className='glass_background-img__2je7l' src={props.data.cover} />
                                            <div className='glass_shade__3yav5' />
                                        </div>
                                        <div className='basic-info_cover-overlay__2gp4w' />
                                        <div className='label_container__3-tcR basic-info_cover-wrapper__1mcNB'>
                                            <div className='image_image-wrapper__3EJJ6 basic-info_cover__XtNRk'>
                                                <img src={props.data.cover} className='image_image__j9OCH' />
                                            </div>
                                        </div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={12} computer={12}>
                                    <Item.Group textAlign='center'>
                                        <Item.Content>
                                            <Item.Header className='book-title_m' as='h1'>{props.data.novelsname}</Item.Header>
                                        </Item.Content>
                                        <Item.Extra textAlign='left' style={{ marginTop: 10 }}>
                                            <span className='label'>Tác giả:</span> {props.data.author}
                                        </Item.Extra>
                                        <Item.Extra textAlign='left' style={{ marginTop: 10 }}>
                                            Thể loại: {props.data.genresdata.map(genresdata => (
                                            <Link as={`/theloai/${genresdata.idgenres}1`} href={`/theloai/[id]/[page]`}>
                                                <Tag color="#f50">
                                                    {genresdata.genrename}
                                                </Tag>

                                            </Link>
                                        ))}
                                        </Item.Extra>
                                        <Item.Extra textAlign='left' style={{ marginTop: 10 }}>
                                            <span className='label'>Status:</span> {props.data.status}
                                        </Item.Extra>
                                    </Item.Group>
                                    <Item.Group className='botom_book' textAlign='center'>
                                        <Link
                                            as={`/doc/${props.data.idnovels}${props.data.chapterlist[0].idchapter}`}
                                            href={`/doc/[id]/[chapter]`}>
                                            <Button size='huge' style={{ marginBottom: 20 }} color='yellow'>Đọc</Button>
                                        </Link>
                                    </Item.Group>


                                </Grid.Column>
                            </Grid>
                        </Container>

                    </Segment>

                </Media>
            </MediaContextProvider>
            <Container>
                <Grid>
                    <Grid.Column className='detail-container' mobile={16} tablet={16} computer={16}>

                        <Item.Group textAlign='left'>
                            <Item.Description className='content'>
                                {ReactHtmlParser(props.data.description)}
                            </Item.Description>
                        </Item.Group>
                        <Divider horizontal>
                            <Header className='title-name-bottom' as='h2'>Danh sách chương</Header>
                        </Divider>
                        <Grid>
                            {props.data.chapterlist.map((datachapter, key) => (
                                <Grid.Column mobile={16} tablet={8} computer={8} style={{ wordBreak: 'break-word', overflow: 'hidden' }}>
                                    <Link
                                        as={`/doc/${props.data.idnovels}${datachapter.idchapter}`}
                                        href={`/doc/[id]/[chapter]`}>
                                        <a className='chapter'>{datachapter.chaptername}</a>
                                    </Link>
                                </Grid.Column>
                            ))}
                        </Grid>
                        <Grid.Column mobile={16} tablet={16} computer={16} style={{ marginTop: 20 }}>
                            <Pagination onPageChange={(e, data) => handleChangepage(e, data)} defaultActivePage={props.page} totalPages={props.data.totalpage} />
                        </Grid.Column>
                    </Grid.Column>

                </Grid>
            </Container>


        </Layout>
    )

}
Truyen.getInitialProps = async (context) => {
    // eslint-disable-next-line no-undef
    const { id, page } = context.query
    const res = await fetch(`${API_URL}novel?id=${id}&page=${page}`)
    const json = await res.json()
    // console.log(json)
    return { data: json, page: page, id: id }
}
export default Truyen
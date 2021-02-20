import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'
import { Helmet } from 'react-helmet';
import Layout from '../components/MyLayout'
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
} from 'semantic-ui-react';
import { API_URL } from '../config/config'
import { createMedia } from '@artsy/fresnel'
const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})
export default class Index extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${API_URL}update?page=1`)
    const json = await res.json()
    // console.log(json.data)
    return { mangalist: json.data }
  }

  render() {
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
          <title>TruyenNT - Đọc truyện online</title>
          <meta name="description" content="Đọc truyện online, đọc truyện chữ, truyện hay, truyện full. Truyện Full luôn tổng hợp và cập nhật các chương truyện một cách nhanh nhất." />
          <meta name="theme-color" content="#008f68" />
          <meta name="keywords" content="doc truyen, doc truyen online, truyen hay, truyen chu, truyen ngon tinh, truyện ngôn tình" />
          <link rel="canonical" href="https://truyennt.com/"></link>
        </Helmet>
        <Container style={{ marginTop: '2em' }}>
          <Grid>
            <Grid.Column mobile={16} tablet={16} computer={16}>
              <Header className='title-name' as='h1'>Truyện mới cập nhật</Header>
            </Grid.Column>
            {this.props.mangalist.length !== 0 ?
              this.props.mangalist.map(mangalist => (
                <Grid.Column mobile={16} tablet={116} computer={16}>
                  <Grid>
                    <Grid.Column width={4}>
                      <MediaContextProvider>
                        <Media greaterThan='mobile'>
                          <Link
                            as={`/novel/${mangalist.idnovel}1`} href={`/novel/[id]1`}
                          >
                            <Image fluid className='item-img' src={mangalist.cover} style={{ height: 82 }} />
                          </Link>

                        </Media>
                        <Media at='mobile'>
                          <Link
                            as={`/novel/${mangalist.idnovel}1`} href={`/novel/[id]/1`}
                          >
                            <Image fluid className='item-img' src={mangalist.mcover} style={{ height: 85 }} />
                          </Link>
                        </Media>
                      </MediaContextProvider>

                    </Grid.Column>
                    <Grid.Column width={9}>
                      <Grid.Row>
                        <Grid.Column width={8}>
                          <Link
                            as={`/novel/${mangalist.idnovel}1`} href={`/novel/[id]/1`}
                          >
                            <Header className='book-name' as='h2'><Icon color='white' name='book' /> {mangalist.novelsname}</Header>
                          </Link>
                        </Grid.Column>
                        <Grid.Column width={16} style={{ marginTop: 15 }}>
                          <Header className='book-catalog' size='tiny' as='h3'><Icon color='white' name='pencil' />{mangalist.author}</Header>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header className='book-catalog' size='tiny' as='h4'>{mangalist.lasterchapter}</Header>
                    </Grid.Column>
                  </Grid>
                </Grid.Column>
              )) : null}
          </Grid>
        </Container>

      </Layout>
    )
  }
}
import React, { Component } from "react";
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
} from 'semantic-ui-react'
class Footer extends Component {
  render() {
    return (
      <div>
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
        {/* <div id="footer">
          <div className="footer_btm">
            <div className="foot-link">
              <div className="link-group">
                <ul>
                  <li>
                    <a href="/" title="Read novel online">
                     Đọc truyện online
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Read novel">
                      Đọc truyện
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clearfix" />
            </div>
            <div className="footer_top_content">
              <p>
                Đọc truyện ngôn tình, kiếm hiệp, xuyên không và nhiều thể loại khác tại yytruyen.com
              </p>
              <p>
                Email:{" "}
                <a
                  href="/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="2e1c1a195a5c5b574b406e49434f4742004d4143"
                >
                  bakhjem@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
       */}
      </div>
    );
  }
}

export default Footer;

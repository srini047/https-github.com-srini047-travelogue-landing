
import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer-center" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Travelogue</h2>
              <div>
                <a target="_blank " href="https://devpost.com">
                  Devpost
                </a>
              </div>
              <div>
                <a href="https://github.com/srini047/travelogue-frontend">Frontend</a>
              </div>
              <div>
                <a href="https://github.com/srini047/travelogue-backend">Backend</a>
              </div>
              <div>
                <a target="_blank " href="https://github.com/srini047/travelogue-landing">
                  Landing
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={20} sm={24}>
          <span
            style={{
              lineHeight: '16px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://github.com/srini047"
              rel="noopener noreferrer"
              target="_blank"
            >
              @srini047
            </a>
          </span>
          <span style={{ marginRight: 12 }}>Copyright © 2023</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;

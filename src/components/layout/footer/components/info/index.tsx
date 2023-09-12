import { Col, Row } from "react-bootstrap";
import "./index.scss";

const Info = () => {
    return <div className="fn-info">
        <Row className="justify-content-center">
            <Col lg="4">
                <img className="logo" src="/images/logo.png" alt=""/>
                <p>Qgacha is a community-based platform providing its players with the best online gacha gaming experience. We have created a simple, user-friendly gaming platform accessible to everyone. Join us and indulge in experiences beyond your imagination.</p>
                <div className="socials">
                    <a href="https://google.com">
                        <img src="/images/icons/twitter.svg" alt=""/>
                    </a>
                    <a href="https://google.com">
                        <img src="/images/icons/telegram.svg" alt=""/>
                    </a>
                </div>
            </Col>
            <Col lg="2">
                <div className="line"></div>
            </Col>
            <Col lg="4">
                <h4>DOCS</h4>
                <ul>
                    <li>
                        <a href="https://google.com">FAQ</a>
                    </li>
                    <li>
                        <a href="https://google.com">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="https://google.com">Terms & Conditions</a>
                    </li>
                </ul>
            </Col>
        </Row>
    </div>
}
export default Info
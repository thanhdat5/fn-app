import { Col, Row } from "react-bootstrap";
import "./index.scss";
import { Link } from "react-router-dom";

const Info = () => {
    return <div className="fn-info">
        <img className="logo d-md-none d-block" src="/images/logo.png" alt="" />
        <Row className="justify-content-center">
            <Col md="4" xs="7">
                <img className="logo d-md-block d-none" src="/images/logo.png" alt="" />
                <p>Qgacha is a community-based platform providing its players with the best online gacha gaming experience. We have created a simple, user-friendly gaming platform accessible to everyone. Join us and indulge in experiences beyond your imagination.</p>
                <div className="socials">
                    <a href="https://google.com">
                        <img src="/images/icons/twitter.svg" alt="" />
                    </a>
                    <a href="https://google.com">
                        <img src="/images/icons/telegram.svg" alt="" />
                    </a>
                </div>
            </Col>
            <Col md="2" xs="1">
                <div className="line"></div>
            </Col>
            <Col md="4" xs="4">
                <h4>DOCS</h4>
                <ul>
                    <li>
                        <Link to="/faq">FAQ</Link>
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
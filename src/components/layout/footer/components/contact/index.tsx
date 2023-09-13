import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import "./index.scss";

const Contact = () => {
    return <div className="fn-contact">
        <Row className="gx-lg-5">
            <Col  lg="5" className="pe-lg-5">
                <p>The online gacha platform has become a widespread and captivating cultural phenomenon nowadays. With the advancement of technology and the internet, players can experience the usual luck-based gift box openings and participate in diverse gaming and entertainment applications that utilize gacha systems.</p>
                <p>The prominent features of the online gacha platform lie in its commemorative, surprising, and diverse nature. Players often can collect unique items, attractive characters, or high-value goods. This creates excitement, interest, and curiosity not only for young gamers but also draws the attention of adult players.</p>
            </Col>
            <Col lg="7">
                <Row>
                    <Col lg="5">
                        <div className="fn-contact-email">
                            <label>Email</label>
                            <a href="mailto:support@4number.com">support@4number.com</a>
                        </div>
                    </Col>
                    <Col lg="7">
                        <div className="fn-contact-form">
                            <h4>Get in touch</h4>
                            <FormGroup>
                                <FormLabel>Email</FormLabel>
                                <FormControl type="email" placeholder="Your email" />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Message</FormLabel>
                                <FormControl as="textarea" placeholder="Your message" />
                            </FormGroup>
                            <button type="submit" className="fn-send">Submit</button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
}
export default Contact
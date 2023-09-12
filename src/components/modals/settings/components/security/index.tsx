import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import "./index.scss";

const SettingSecurity = () => {

    return <>
        <div className="fn-setting-security">
            <div className="body">
                <div className="title">Change Password</div>
                <Row className="align-items-center">
                    <Col md="6">
                        <FormGroup className="form-group">
                            <FormLabel>Old password</FormLabel>
                            <div className="form-password">
                                <FormControl type="password" />
                                <button type="button">
                                    <img src="/images/icons/eye.svg" alt="" />
                                </button>
                            </div>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel>New password</FormLabel>
                            <div className="form-password">
                                <FormControl type="password" />
                                <button type="button">
                                    <img src="/images/icons/eye.svg" alt="" />
                                </button>
                            </div>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel>Confirm newpass word</FormLabel>
                            <div className="form-password">
                                <FormControl type="password" />
                                <button type="button">
                                    <img src="/images/icons/eye.svg" alt="" />
                                </button>
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
            <div className="footer">
                <button type="submit" className="save">
                    <span>Save changes</span>
                </button>
            </div>
        </div>
        <div className="fn-setting-security">
            <div className="header">
                <h4>Two-factor authentication</h4>
                <span>To keep your account extra secure leave a two factor authentication enabled.</span>
            </div>
            <div className="body pt-2">
                <Row className="align-items-center">
                    <Col md="6">
                        <div className="qr-code"></div>
                        <FormGroup className="form-group">
                            <FormLabel>Password</FormLabel>
                            <div className="form-password">
                                <FormControl type="password" />
                                <button type="button">
                                    <img src="/images/icons/eye.svg" alt="" />
                                </button>
                            </div>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel>Two-factor authentication</FormLabel>
                            <div className="form-password">
                                <FormControl type="password" />
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
            </div>
            <div className="footer">
                <button type="submit" className="save">
                    <span>Save changes</span>
                </button>
            </div>
        </div>
    </>
}
export default SettingSecurity
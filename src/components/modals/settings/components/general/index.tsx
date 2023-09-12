import { Col, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import "./index.scss";

const SettingGeneral = () => {

    return <div className="fn-setting-general">
        <div className="title">Email</div>
        <FormGroup>
            <FormLabel>Email <span>*</span></FormLabel>
            <Row className="align-items-center">
                <Col md="6">
                    <FormControl type="email" placeholder="Email" />
                </Col>
                <Col md="6">
                    <button type="button" className="resend">Resend Email</button>
                    <button type="button" className="verify">
                        <span>Verify</span>
                    </button>
                </Col>
            </Row>
        </FormGroup>
    </div>
}
export default SettingGeneral
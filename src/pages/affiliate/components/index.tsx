import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GetInTouch from "./get-in-touch";
import "./index.scss";
import Overall from "./overall";
import Referral from "./referral";

const Affiliate = () => {
    const { t } = useTranslation();

    return <div className="fn-affiliate-inner">
        <Tabs
            className="fn-affiliate-tabs"
            defaultActiveKey="general"
            id="uncontrolled-tab-example"
        >
            <Tab eventKey="general" title={t('General')}>
                <Row>
                    <Col md="8">
                        <Overall />
                        
                    </Col>
                    <Col md="4">
                        <Referral />
                        <GetInTouch />
                    </Col>
                </Row>
               
            </Tab>
            
        </Tabs>
    </div>
}
export default Affiliate
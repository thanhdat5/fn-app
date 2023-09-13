import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GetInTouch from "./get-in-touch";
import "./index.scss";
import Network from "./network";
import Overall from "./overall";
import Referral from "./referral";
import Stats from "./stats";

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
                        <Row className="d-md-flex d-none">
                            <Col xl="6" lg="7">
                                <GetInTouch />
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4">
                        <Referral />
                        <Stats />
                    </Col>
                </Row>
                <div className="d-md-none d-block">
                    <GetInTouch />
                </div>
            </Tab>
            <Tab eventKey="network" title={t('Network Management')}>
                <Network />
            </Tab>
        </Tabs>
    </div>
}
export default Affiliate
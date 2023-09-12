import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import GetInTouch from "./components/get-in-touch";
import Overall from "./components/overall";
import Referral from "./components/referral";
import Stats from "./components/stats";
import "./index.scss";
import Network from "./components/network";

const AffiliatePage = () => {
    const { t } = useTranslation();

    return <div className="fn-affiliate">
        <Container>
            <Tabs
                className="fn-affiliate-tabs"
                defaultActiveKey="general"
                id="uncontrolled-tab-example"
            >
                <Tab eventKey="general" title={t('General')}>
                    <Row>
                        <Col lg="8">
                            <Overall />
                            <Row>
                                <Col xl="6" lg="7">
                                    <GetInTouch />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4">
                            <Referral />
                            <Stats />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="network" title={t('Network Management')}>
                    <Network />
                </Tab>
            </Tabs>
        </Container>
    </div>
}
export default AffiliatePage
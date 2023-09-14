import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Overall = () => {
    const { t } = useTranslation();

    return <div className="fn-overall">
        <div className="summary">
            <Row className="gx-xl-3">
                <Col lg="6">
                    {/* <div className="summary-card">
                        <img src="/images/icons/gold.png" alt="" />
                        <div className="info">
                            <label>TOTAL REWARD EARNED:</label>
                            <span className="highlight">$ 0.00</span>
                        </div>
                    </div> */}
                    <div className="summary-card">
                        <img src="/images/icons/friends.png" alt="" />
                        <div className="info">
                            <label>TOTAL FRIENDS REFERRED:</label>
                            <span>0</span>
                        </div>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="commission">
                        <div className="header">
                            <img src="/images/icons/commission.svg" alt="" />
                            <span>COMMISSION REWARDS</span>
                            <a href="https://google.com">
                                Details
                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.07814 3.23178C5.55789 3.63157 5.55789 4.36843 5.07813 4.76822L1.64018 7.63318C0.988856 8.17595 0 7.7128 0 6.86496V1.13504C0 0.287204 0.988857 -0.175952 1.64018 0.36682L5.07814 3.23178Z" fill="#E22197" />
                                </svg>
                            </a>
                        </div>
                        <div className="body">
                            <b>$ 0.00</b>
                            {/* <button className="withdraw">
                                <span>Withdraw</span>
                            </button> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="chart">
            <Tabs
                className="fn-chart-tabs"
                defaultActiveKey="thisMonth"
                id="uncontrolled-tab-example"
            >
                <Tab eventKey="thisMonth" title={t('This month')}>
                    <div className="header">
                        <h4>Stats</h4>
                        <div className="item">
                            <label>Total</label>
                            <span>$150.000</span>
                        </div>
                        <div className="item">
                            <label>By time</label>
                            <span>01/07/23 - 31/07/23</span>
                        </div>
                    </div>
                    <div className="chart-inner">
                        <img src="/images/chart.png" alt="" className="w-100" />
                    </div>
                </Tab>
                <Tab eventKey="lastMonth" title={t('Last month')}>
                    <div className="header">
                        <h4>Stats</h4>
                        <div className="item">
                            <label>Total</label>
                            <span>$150.000</span>
                        </div>
                        <div className="item">
                            <label>By time</label>
                            <span>01/07/23 - 31/07/23</span>
                        </div>
                    </div>
                    <div className="chart-inner">
                        <img src="/images/chart.png" alt="" className="w-100" />
                    </div>
                </Tab>
            </Tabs>
        </div>
    </div>
}
export default Overall
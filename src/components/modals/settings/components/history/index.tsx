import { Nav, Pagination, Tab } from "react-bootstrap";
import "./index.scss";

const SettingHistory = () => {

    return <>
        <div className="fn-setting-history">
            <div className="title">History</div>
            <div className="body">
                <Tab.Container id="tabs-example" defaultActiveKey="deposits">
                    <div className="tabs">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link eventKey="deposits">Deposits</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="withdrawals">Withdrawals</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="deposits">
                            <div className="list">
                                <div className="item">
                                    <div className="icon">
                                        <img src="/images/icons/up.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <label>Confirmed</label>
                                        <span>1:34 AM 9/11/2023</span>
                                    </div>
                                    <div className="value">0.000000</div>
                                    <div className="token">
                                        <img src="/images/tokens/usdt.svg" alt="" />
                                    </div>
                                    <a href="https://google.com" className="open">
                                        <img src="/images/icons/link.svg" alt="" />
                                    </a>
                                </div>
                                <Pagination className="fn-pagination">
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Item active>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Ellipsis />
                                    <Pagination.Item>{10}</Pagination.Item>
                                    <Pagination.Prev className="prev" />
                                    <Pagination.Next className="next" />
                                </Pagination>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="withdrawals">
                            <div className="no-data">
                                No Crypto Withdrawals
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    </>
}
export default SettingHistory
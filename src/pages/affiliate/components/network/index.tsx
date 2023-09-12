import { useState } from "react";
import "./index.scss";
import { Row, Col } from "react-bootstrap";

const Network = () => {
    const [aciveTime, setActiveTime] = useState(1);

    return <div className="fn-network">
        <div className="search-form">
            <div className="header">Manage Your Affiliate</div>
            <div className="body">
                <Row className="gx-lg-4">
                    <Col md="4" className="pe-md-4">
                        <label>Search Type</label>
                        <button type="button">
                            <span>Username</span>
                        </button>
                    </Col>
                    <Col md="5" className="ps-md-4">
                        <div className="divider"></div>
                        <label>View your referrals by Username</label>
                        <input type="search" placeholder="enter Username"/>
                    </Col>
                    <Col md="3">
                        <label></label>
                        <button type="button">
                            <span>Search</span>
                        </button>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="search-results">
            <div className="header">
                <h4>Search Results</h4>
                <div className="times">
                    <label>Time Range:</label>
                    <button className={aciveTime === 1 ? 'active' : ''} onClick={() => setActiveTime(1)} type="button">
                        <span>yesterday</span>
                    </button>
                    <button className={aciveTime === 2 ? 'active' : ''} onClick={() => setActiveTime(2)} type="button">
                        <span>Last 7 days</span>
                    </button>
                    <button className={aciveTime === 3 ? 'active' : ''} onClick={() => setActiveTime(3)} type="button">
                        <span>Last 30 days</span>
                    </button>
                    <button className={aciveTime === 4 ? 'active' : ''} onClick={() => setActiveTime(4)} type="button">
                        <span>All time</span>
                    </button>
                </div>
            </div>
            <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Total Vol</th>
                            <th>Com. Earned</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://google.com">JapanTeam</a>
                            </td>
                            <td>3.000.000</td>
                            <td>240.000</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://google.com">koreanTeam</a>
                            </td>
                            <td>400.000</td>
                            <td>32.000</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://google.com">CanadaTeam</a>
                            </td>
                            <td>800.000</td>
                            <td>48.000</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://google.com">USATeam</a>
                            </td>
                            <td>1.800.000</td>
                            <td>72.000</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://google.com">philippines</a>
                            </td>
                            <td>2.800.000</td>
                            <td>140.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default Network
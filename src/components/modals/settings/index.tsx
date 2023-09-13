import { Col, Dropdown, Modal, Nav, Row, Tab } from "react-bootstrap";
import SettingGeneral from "./components/general";
import SettingHistory from "./components/history";
import SettingPreferences from "./components/preferences";
import SettingSecurity from "./components/security";
import "./index.scss";
import { useState } from "react";

type Props = {
    onDismiss: () => void;
}
const SettingsModal = ({ onDismiss }: Props) => {
    const [activeTab, setActiveTab] = useState('general');

    return <Modal className="fn-modal fn-settings" size="xl" fullscreen="lg-down" centered backdrop keyboard={false} show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title>
                <img className="d-block d-md-none" src="/images/logo.png" alt="" height={25} />
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="fn-settings-body">
                <Tab.Container id="left-tabs-example"
                    activeKey={activeTab}
                    onSelect={(k) => {
                        if (k) {
                            setActiveTab(k)
                        }
                    }}
                >
                    <Row className="gx-lg-5">
                        <Col lg="3">
                            <div className="sidebar">
                                <div className="d-none d-md-block">
                                    <img className="logo" src="/images/logo.png" alt="" />
                                    <p>Qgacha is a community-based platform providing its players with the best online gacha gaming experience. We have created a simple, user-friendly gaming platform accessible to everyone. Join us and indulge in experiences beyond your imagination.</p>
                                </div>
                                <div className="title">Settings</div>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="general">General</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="security">Security</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="preferences">Preferences</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="history">History</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" data-bs-theme="dark">
                                        {activeTab}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as='div' onClick={() => setActiveTab('general')} className={`${activeTab === 'general' ? 'active' : ''}`}>General</Dropdown.Item>
                                        <Dropdown.Item as='div' onClick={() => setActiveTab('security')} className={`${activeTab === 'security' ? 'active' : ''}`}>Security</Dropdown.Item>
                                        <Dropdown.Item as='div' onClick={() => setActiveTab('preferences')} className={`${activeTab === 'preferences' ? 'active' : ''}`}>Preferences</Dropdown.Item>
                                        <Dropdown.Item as='div' onClick={() => setActiveTab('history')} className={`${activeTab === 'history' ? 'active' : ''}`}>History</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Col>
                        <Col lg="9">
                            <Tab.Content>
                                <Tab.Pane eventKey="general">
                                    <SettingGeneral />
                                </Tab.Pane>
                                <Tab.Pane eventKey="security">
                                    <SettingSecurity />
                                </Tab.Pane>
                                <Tab.Pane eventKey="preferences">
                                    <SettingPreferences />
                                </Tab.Pane>
                                <Tab.Pane eventKey="history">
                                    <SettingHistory />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </Modal.Body>
    </Modal>
}
export default SettingsModal
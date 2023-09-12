import { Col, Modal, Nav, Row, Tab } from "react-bootstrap";
import SettingGeneral from "./components/general";
import SettingSecurity from "./components/security";
import "./index.scss";
import SettingPreferences from "./components/preferences";

type Props = {
    onDismiss: () => void;
}
const SettingsModal = ({ onDismiss }: Props) => {
    return <Modal className="fn-modal fn-settings" size="xl" centered backdrop keyboard={false} show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="fn-settings-body">
                <Tab.Container id="left-tabs-example" defaultActiveKey="general">
                    <Row className="gx-lg-5">
                        <Col lg="3">
                            <div className="sidebar">
                                <img className="logo" src="/images/logo.png" alt="" />
                                <p>Qgacha is a community-based platform providing its players with the best online gacha gaming experience. We have created a simple, user-friendly gaming platform accessible to everyone. Join us and indulge in experiences beyond your imagination.</p>
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
                                <Tab.Pane eventKey="history">Second tab content</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </Modal.Body>
    </Modal>
}
export default SettingsModal
import { Col, Modal, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

type Props = {
    onDismiss: () => void;
}
const PrizeModal = ({ onDismiss }: Props) => {
    const { t } = useTranslation();
    return <Modal className="fn-modal fn-prize" size="lg" centered backdrop keyboard={false} show onHide={onDismiss} animation={true}>
        <Modal.Header closeButton>
            <Modal.Title>{t('Prize')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="fn-prize-body">
                <ul>
                    <li>{t('The more players there are, the more extensive the prize')}</li>
                    <li>{t('The number of prizes will increase with the number of players.')}</li>
                    <li>{t('The total number of prizes can reach up to 2000.')}</li>
                </ul>
                <Row className="gx-xl-5">
                    <Col md="4" className="mb-md-0 mb-3">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={2}>2 USDT</th>
                                </tr>
                                <tr>
                                    <th>{t('Prize')}</th>
                                    <th>{t('Reward')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>7.5</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>3.75</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col md="4" className="mb-md-0 mb-3">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={2}>5 USDT</th>
                                </tr>
                                <tr>
                                    <th>{t('Prize')}</th>
                                    <th>{t('Reward')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>5000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>37.5</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>18.75</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>12.5</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>9.375</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col md="4">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={2}>10 USDT</th>
                                </tr>
                                <tr>
                                    <th>{t('Prize')}</th>
                                    <th>{t('Reward')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>10000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>75</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>37.5</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>18.75</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <div className="note">* {t('This is the highest prize for each pool of tickets')}</div>
            </div>
        </Modal.Body>
    </Modal>
}
export default PrizeModal
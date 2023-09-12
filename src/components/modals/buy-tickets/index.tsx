import { Col, Modal, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

type Props = {
    onDismiss: () => void;
}
const BuyTicketsModal = ({ onDismiss }: Props) => {
    const { t } = useTranslation();
    return <Modal className="fn-modal" size="xl" centered backdrop keyboard={false} show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title>{t('Buy four numbers Tickets')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md="7" className="pe-md-2">
                    <div className="fn-buy-heading">
                        <label>Numbers Of Ticket</label>
                        <span>1 Ticket = 2 USDT</span>
                    </div>
                    <div className="fn-buy-card-form">
                        <div className="fn-buy-input">
                            <button type="button">-</button>
                            <input type="number" value={5} />
                            <button type="button">+</button>
                            <button type="button" className="clear">Clear</button>
                        </div>
                        <div className="fn-buy-buttons">
                            <button type="button">20</button>
                            <button type="button">50</button>
                            <button type="button">100</button>
                        </div>
                    </div>
                </Col>
                <Col md="1" className="pe-0">
                    <div className="fn-buy-card-options">
                        <div className="fn-buy-option"><label>$2</label></div>
                        <div className="fn-buy-option"><label>$5</label></div>
                        <div className="fn-buy-option"><label>$10</label></div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="fn-buy-card-pay">
                        <div className="fn-form-pay">
                            <label>Pay with</label>
                            <div className="inner">
                                <span>USDT</span>
                                <div>
                                    <small>balance</small>
                                    <b>đ 0.00</b>
                                </div>
                            </div>
                        </div>
                        <div className="details">
                            <div className="line">
                                <label>5 tickets</label>
                                <span>1 Ticket <b>X 5</b></span>
                            </div>
                        </div>
                        <div className="total">
                            <span>total</span>
                            <span>50 USDT</span>
                        </div>
                        <button type="button" className="buy">
                            <span>bUY TICKET</span>
                        </button>
                    </div>
                </Col>
            </Row>
        </Modal.Body>
    </Modal>
}
export default BuyTicketsModal
import BuyTicketsModal from "components/modals/buy-tickets";
import { useState } from "react";
import { Col, Pagination, Row } from "react-bootstrap";
import { authUserSelector } from "redux-toolkit-saga/auth";
import { useAppSelector } from "store/hooks";
import GameFilter from "../game-filter";
import "./index.scss";

const MyWinningTickets = () => {
    const loggedUser = useAppSelector(authUserSelector);
    const [showModal, setShowModal] = useState(false);

    return loggedUser ? <>
        <GameFilter />
        <div className="fn-my-winning">
            <h4>My WINNING</h4>
            <Row className="items gx-0">
                <Col>
                    <div className="item">
                        <strong>1234</strong>
                        <label>Total: 1</label>
                    </div>
                </Col>
                <Col>
                    <div className="item">
                        <strong>1234</strong>
                        <strong>1234</strong>
                        <label>Total: 1</label>
                    </div>
                </Col>
                <Col>
                    <div className="item">
                        <strong>1234</strong>
                        <strong>1234</strong>
                        <strong>1234</strong>
                        <label>Total: 1</label>
                    </div>
                </Col>
                <Col>
                    <div className="item">
                        <strong>1234</strong>
                        <strong>1234</strong>
                        <strong>1234</strong>
                        <strong>1234</strong>
                        <label>Total: 1</label>
                    </div>
                </Col>
                <Col>
                    <div className="item">
                        <strong>1234</strong>
                        <strong>1234</strong>
                        <strong>1234</strong>
                        <strong>1234</strong>
                        <strong>1234</strong>
                        <label>Total: 1</label>
                    </div>
                </Col>
            </Row>
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
    </> : <>
        <div className="fn-winning-box">
            <span>You have no ticket! Buy Now </span>
            <button className="fn-buy-now" type="button" onClick={() => setShowModal(true)}>
                <span>bUY TICKET now</span>
            </button>
        </div>
        {showModal ? <BuyTicketsModal onDismiss={() => setShowModal(false)} /> : <></>}
    </>
}
export default MyWinningTickets
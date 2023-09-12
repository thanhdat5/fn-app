import { Col, Row } from "react-bootstrap";
import { authUserSelector } from "redux-toolkit-saga/auth";
import { useAppSelector } from "store/hooks";
import "./index.scss";

const Statistics = () => {
    const loggedUser = useAppSelector(authUserSelector);

    return loggedUser ? <div className="fn-total">
        <img src="/images/total-bg.svg" className="w-100" alt="" />
        <div className="inner">
            <Row>
                <Col xs="9">
                    <div className="line">
                        <img src="/images/icons/ticket.svg" alt="" />
                        <span>Total tickets: {loggedUser?.totalTickets}</span>
                    </div>
                    <div className="line">
                        <img src="/images/icons/winning.svg" alt="" />
                        <span>Total winning tickets: {loggedUser?.totalWinningTickets}</span>
                    </div>
                </Col>
                <Col xs="3">
                    <div className="line">
                        <img src="/images/icons/prize.svg" alt="" />
                        <span>Total winning tickets: {loggedUser?.totalPrizeWon}</span>
                    </div>
                </Col>
            </Row>
        </div>
    </div> : <></>
}
export default Statistics
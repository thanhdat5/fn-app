import BuyTicketsModal from "components/modals/buy-tickets";
import { useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import { authUserSelector } from "redux-toolkit-saga/auth";
import { useAppSelector } from "store/hooks";
import GameFilter from "../game-filter";
import "./index.scss";

const MyTickets = () => {
    const loggedUser = useAppSelector(authUserSelector);
    const [showModal, setShowModal] = useState(false);

    return loggedUser ? <>
        <GameFilter />
        <div className="fn-my-tickets">
            <Table responsive>
                <thead>
                    <tr>
                        <th style={{ width: 150 }}>Ordinal</th>
                        <th className="text-end">Ticket Numbers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td className="text-end"><strong>1234</strong></td>
                    </tr>
                </tbody>
            </Table>
            <Pagination className="fn-pagination">
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item active>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Prev className="prev" />
                <Pagination.Next className="next" />
            </Pagination>
            <div className="text-center">
                <button type="button" className="fn-more">
                    <span>More</span>
                </button>
            </div>
        </div>
    </> : <>
        <div className="fn-ticket-box">
            <span>You have no ticket!</span>
            <button className="fn-buy-now" type="button" onClick={() => setShowModal(true)}>
                <span>bUY TICKET now</span>
            </button>
        </div>
        {showModal ? <BuyTicketsModal onDismiss={() => setShowModal(false)} /> : <></>}
    </>
}
export default MyTickets
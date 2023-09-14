import BuyTicketsModal from 'components/modals/buy-tickets';
import { useState } from 'react';
import { authUserSelector } from 'redux-toolkit-saga/auth';
import { useAppSelector } from 'store/hooks';
import GameFilter from '../game-filter';
import './index.scss';
import { Pagination, Table } from 'react-bootstrap';

const MyWinningTickets = () => {
	const loggedUser = useAppSelector(authUserSelector);
	const [showModal, setShowModal] = useState(false);

	return loggedUser ? (
		<>
			<GameFilter />
			{/* <div className="fn-my-winning">
            <h4>My WINNING</h4>
            <Row className="items gx-0">
               <Row>
                <Col className="item-td">
                    <p >first price</p>
                </Col>
                <Col className="item-td">
                    <p >second price</p>
                </Col>
                <Col className="item-td">
                    <p >third price</p>
                </Col>
                <Col className="item-td">
                    <p >Fourth price</p>
                </Col>
                <Col className="item-td">
                    <p >Fifth price</p>
                </Col>
               </Row>
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
        </div> */}
			<div className="fn-my-winning">
				<h4>My WINNING</h4>
				<Table responsive variant="dark">
					<thead>
						<tr>
							<th>first prize</th>
							<th>second prize</th>
							<th>third prize</th>
							<th>fourth prize</th>
							<th>fifth prize</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className="column-odd">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
							<td className="column-even">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
							<td className="column-odd">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
							<td className="column-even">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
							<td className="column-odd">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
						</tr>
						<tr>
							<td className="column-odd"></td>
							<td className="column-even">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
							<td className="column-odd">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
							<td className="column-even">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
							<td className="column-odd">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
						</tr>
						<tr>
							<td className="column-odd"></td>
							<td className="column-even"></td>
							<td className="column-odd">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
							<td className="column-even">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
							<td className="column-odd">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
						</tr>
						<tr>
							<td className="column-odd"></td>
							<td className="column-even"></td>
							<td className="column-odd"></td>
							<td className="column-even">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
							<td className="column-odd">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
						</tr>
						<tr>
							<td className="column-odd"></td>
							<td className="column-even"></td>
							<td className="column-odd"></td>
							<td className="column-even"></td>
							<td className="column-odd">
								<img src="./images/prize-winning.svg" alt="" />
							</td>
						</tr>

						<tr>
							<td className="text-end"><strong >total:1</strong></td>
							<td className="text-end"><strong >total:1</strong></td>
							<td className="text-end"><strong >total:1</strong></td>
							<td className="text-end"><strong >total:1</strong></td>
							<td className="text-end"><strong >total:1</strong></td>
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
			</div>
		</>
	) : (
		<>
			<div className="fn-winning-box">
				<span>You have no ticket! Buy Now </span>
				<button
					className="fn-buy-now"
					type="button"
					onClick={() => setShowModal(true)}
				>
					<span>bUY TICKET now</span>
				</button>
			</div>
			{showModal ? (
				<BuyTicketsModal onDismiss={() => setShowModal(false)} />
			) : (
				<></>
			)}
		</>
	);
};
export default MyWinningTickets;

import BuyTicketsModal from 'components/modals/buy-tickets';
import { useState } from 'react';
import { authUserSelector } from 'redux-toolkit-saga/auth';
import { useAppSelector } from 'store/hooks';
import GameFilter from '../game-filter';
import './index.scss';
import { Pagination, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MyWinningTickets = () => {
	const loggedUser = useAppSelector(authUserSelector);
	const [showModal, setShowModal] = useState(false);
	const {t} = useTranslation();

	return loggedUser ? (
		<>
			<GameFilter />
			<div className="fn-my-winning">
				<h4>{t('My winning')}</h4>
				<Table responsive variant="dark">
					<thead>
						<tr>
							<th>{t('First Prize')}</th>
							<th>{t('Second Prize')}</th>
							<th>{t('Third Prize')}</th>
							<th>{t('Fourth Prize')}</th>
							<th>{t('Fifth Prize')}</th>
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
				<span>{t('You have no ticket! Buy now')} </span>
				<button
					className="fn-buy-now"
					type="button"
					onClick={() => setShowModal(true)}
				>
					<span>{t('Buy ticket now')}</span>
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

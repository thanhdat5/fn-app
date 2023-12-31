import BuyTicketsModal from 'components/modals/buy-tickets';
import { useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import { authUserSelector, signIn } from 'redux-toolkit-saga/auth';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import GameFilter from '../game-filter';
import './index.scss';
import { useTranslation } from 'react-i18next';

const MyTickets = () => {
	const loggedUser = useAppSelector(authUserSelector);
	const [showModal, setShowModal] = useState(false);
	const dispatch = useAppDispatch();
	const {t} = useTranslation();

	
	const handleSignIn = () => {
		dispatch(signIn({
				walletAddress: '123',
				tokens: [
						{ symbol: 'USDT', name: 'USDT', icon: '/images/tokens/usdt.svg', balance: '9.99999999' },
						{ symbol: 'BTC', name: `BTC ${t('Upcoming')}`, icon: '/images/tokens/btc.svg', balance: '9.99999999' },
						{ symbol: 'BNB', name: `BNB ${t('Upcoming')}`, icon: '/images/tokens/bnb.svg', balance: '9.99999999' },
						{ symbol: 'ETH', name: `ETH ${t('Upcoming')}`, icon: '/images/tokens/eth.svg', balance: '9.99999999' },
						{ symbol: 'BAKAC', name: `BAKAC ${t('Upcoming')}`, icon: '/images/tokens/bakac.svg', balance: '9.99999999' },
						{ symbol: 'DOGE', name: `DOGE ${t('Upcoming')}`, icon: '/images/tokens/dge.svg', balance: '9.99999999' },
						{ symbol: 'SHIB', name: `SHIB ${t('Upcoming')}`, icon: '/images/tokens/shib.svg', balance: '9.99999999' },
				],
				totalTickets: 3,
				totalWinningTickets: 0,
				totalPrizeWon: "TIỀN"
		}))
}

	return (
		<>
			{loggedUser ? (
				<>
					<GameFilter />
					<div className="fn-my-tickets">
						<Table responsive>
							<thead>
								<tr>
									<th style={{ width: 150 }}>Ordinal</th>
									<th className="text-end">{t('Ticket numbers')}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td className="text-end">
										<strong>
											<img src="./images/prize-winning.svg" alt="ticket" />
										</strong>
									</td>
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
							<button
								type="button"
								className="fn-more"
								onClick={() => setShowModal(true)}
							>
								<span>{t('Buy ticket now')}</span>
							</button>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="fn-ticket-box">
						<span>{t('You have no ticket!')}</span>
						<button
							className="fn-buy-now"
							type="button"
							onClick={() => handleSignIn()}
						>
							<span>{t('Buy ticket now')}</span>
						</button>
					</div>
				</>
			)}
			{showModal ? (
				<BuyTicketsModal onDismiss={() => setShowModal(false)} />
			) : (
				<></>
			)}
		</>
	);
};
export default MyTickets;

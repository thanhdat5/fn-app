import BuyTicketsModal from 'components/modals/buy-tickets';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { authUserSelector } from 'redux-toolkit-saga/auth';
import { useAppSelector } from 'store/hooks';
import GameFilter from '../game-filter';
import './index.scss';

const MyWinningTickets = () => {
	const loggedUser = useAppSelector(authUserSelector);
	const [showModal, setShowModal] = useState(false);
	const { t } = useTranslation();

	return loggedUser ? (
		<>
			<GameFilter />
			<div className="fn-my-winning">
				<h4>{t('My winning')}</h4>
				<Container>
					<Row>
						<Col className="px-0">
							<div className="winning-prize">
								<h4 className="prize-type">{t('First Prize')}</h4>
								<div className="list-prizes column-even">
									<img src="./images/prize-winning.svg" alt="" />
								</div>
								<p className="text-end">total: 1</p>
							</div>
						</Col>
						<Col className="px-0">
							<div className="winning-prize">
								<h4 className="prize-type">{t('Second Prize')}</h4>
								<div className="list-prizes column-even">
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
								</div>
								<p className="text-end">total: 1</p>
							</div>
						</Col>
						<Col className="px-0">
							<div className="winning-prize">
								<h4 className="prize-type ">{t('Third Prize')}</h4>
								<div className="list-prizes column-odd">
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
								</div>
								<p className="text-end">total: 1</p>
							</div>
						</Col>
						<Col className="px-0">
							<div className="winning-prize">
								<h4 className="prize-type ">{t('Fourth Prize')}</h4>
								<div className="list-prizes column-even">
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
								</div>
								<p className="text-end">total: 1</p>
							</div>
						</Col>
						<Col className="px-0">
							<div className="winning-prize">
								<h4 className="prize-type ">{t('Fifth Prize')}</h4>
								<div className="list-prizes column-odd">
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
									<img src="./images/prize-winning.svg" alt="" />
								</div>
								<p className="text-end">total: 1</p>
							</div>
						</Col>
					</Row>
				</Container>
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

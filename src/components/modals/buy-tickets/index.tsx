import { Col, Dropdown, Modal, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './index.scss';
import { IToken } from 'types/token.model';
import { useState } from 'react';

type Props = {
	onDismiss: () => void;
};
const BuyTicketsModal = ({ onDismiss }: Props) => {
	const [usdt, setUsdt] = useState(2);
	const [ticket, setTicket] = useState(5);
	const { t } = useTranslation();
	const currencies: IToken[] =  [
		{ symbol: 'USDT', name: 'USDT', icon: '/images/tokens/usdt.svg',  },
		{ symbol: 'BTC', name: `BTC (${t('Upcoming')})`, icon: '/images/tokens/btc.svg',  },
		{ symbol: 'BNB', name: `BNB (${t('Upcoming')})`, icon: '/images/tokens/bnb.svg', },
		{ symbol: 'ETH', name: `ETH (${t('Upcoming')})`, icon: '/images/tokens/eth.svg',  },
		// { symbol: 'BAKAC', name: 'BAKAC ${t('Upcoming')}', icon: '/images/tokens/bakac.svg', balance: '0' },
		{ symbol: 'DOGE', name: `DOGE (${t('Upcoming')})`, icon: '/images/tokens/doge.svg',  },
		{ symbol: 'SHIB', name: `SHIB (${t('Upcoming')})`, icon: '/images/tokens/shib.svg',  },
];

	const [selectedCurrency, setSelectedCurrency] = useState<IToken>(
		currencies[0]
	);

	
	return (
		<Modal
			className="fn-modal fn-buy-ticket fade" 
			size="xl"
			centered
			backdrop
			keyboard={false}
			show
			onHide={onDismiss}
			animation={true}
			
		>
			<Modal.Header closeButton>
				<Modal.Title>{t('Buy four numbers Tickets')}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col lg="7" className="pe-lg-2 order-1 order-lg-0">
						<div className="fn-buy-heading">
							<label>{t('Numbers Of Ticket')}</label>
							<span>1 {t('Ticket')} = {usdt} USDT</span>
						</div>
						<div className="fn-buy-card-form">
							<div className="fn-buy-input">
								<button
									type="button"
									onClick={() => setTicket(state => state - 1)}
									disabled={ticket < 2 ? true : false}
								>
									-
								</button>
								<input
									type="number"
									value={ticket}
									onChange={e =>
										setTicket(
											Number(e.target.value) > 0 ? Number(e.target.value) : 1
										)
									}
								/>
								<button
									type="button"
									onClick={() => setTicket(state => state + 1)}
								>
									+
								</button>
								<button
									type="button"
									className="clear"
									onClick={() => setTicket(1)}
								>
									{t('Clear')}
								</button>
							</div>
							<div className="fn-buy-buttons">
								<button type="button" onClick={() => setTicket(20)}>
									20
								</button>
								<button type="button" onClick={() => setTicket(50)}>
									50
								</button>
								<button type="button" onClick={() => setTicket(100)}>
									100
								</button>
							</div>
						</div>
					</Col>
					<Col lg="1" className="order-0 order-lg-1">
						<div className="fn-buy-tickets">
							<label className="title d-none">{t('Select the ticket price')}</label>
							<div className="fn-buy-card-options">
								<div
									className={`fn-buy-option ${usdt === 2 ? 'active' : ''}`}
									onClick={() => setUsdt(2)}
								>
									<small>$2</small>
								</div>
								<div
									className={`fn-buy-option ${usdt === 5 ? 'active' : ''}`}
									onClick={() => setUsdt(5)}
								>
									<small>$5</small>
								</div>
								<div
									className={`fn-buy-option ${usdt === 10 ? 'active' : ''}`}
									onClick={() => setUsdt(10)}
								>
									<small>$10</small>
								</div>
							</div>
						</div>
					</Col>
					<Col lg="4" className="order-2">
						<div className="fn-buy-card-pay">
							<div className="fn-form-pay">
								<label>{t('Pay with')}</label>

								<Dropdown className="fn-deposit-currency">
									<Dropdown.Toggle variant="dark" id="dropdown-currency">
										<div>
											<img
												className="token"
												src={selectedCurrency.icon}
												alt=""
											/>
											<span>{selectedCurrency.name}</span>
										</div>

										
										<img
											className="arrow"
											src="/images/icons/arrow.svg"
											alt=""
										/>
									</Dropdown.Toggle>

									<Dropdown.Menu>
										{currencies.map(currency => (
											<Dropdown.Item
												onClick={() => setSelectedCurrency(currency)}
												key={currency.name}
												className={`fn-token-item ${
													currency.symbol === selectedCurrency.symbol
														? 'active'
														: ''
												}`}
											>
												<img className="icon" src={currency.icon} alt="" />
												<span className="name">{currency.name}</span>
												
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="details">
								<div className="line">
									<label>5 {t('Ticket')}</label>
									<span>
										1 {t('Ticket')} <b>X 5</b>
									</span>
								</div>
							</div>
							<div className="total">
								<span>{t('Total')}</span>
								<span>50 USDT</span>
							</div>
							<div className="d-flex justify-content-center">
								<button type="button" className="buy">
									<span>{t('Buy Ticket')}</span>
								</button>
							</div>
						</div>
					</Col>
				</Row>
			</Modal.Body>
		</Modal>
	);
};
export default BuyTicketsModal;

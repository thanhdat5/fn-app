import {
	Col,
	Container,
	Dropdown,
	Pagination,
	Row,
	Tab,
	Table,
	Tabs
} from 'react-bootstrap';
import './index.scss';
import { useTranslation } from 'react-i18next';
import { IToken } from 'types/token.model';
import { useState } from 'react';

const ClaimPage = () => {
	const { t } = useTranslation();
	const currencies: IToken[] = [
		{ symbol: 'USDT', name: 'USDT', icon: '/images/tokens/usdt.svg' },
		{
			symbol: 'BTC',
			name: `BTC (${t('Upcoming')})`,
			icon: '/images/tokens/btc.svg'
		},
		{
			symbol: 'BNB',
			name: `BNB (${t('Upcoming')})`,
			icon: '/images/tokens/bnb.svg'
		},
		{
			symbol: 'ETH',
			name: `ETH (${t('Upcoming')})`,
			icon: '/images/tokens/eth.svg'
		},
		// { symbol: 'BAKAC', name: 'BAKAC ${t('Upcoming')}', icon: '/images/tokens/bakac.svg', balance: '0' },
		{ symbol: 'DOGE', name: `DOGE (${t('Upcoming')})`, icon: '/images/tokens/doge.svg' },
		{ symbol: 'SHIB', name: `SHIB (${t('Upcoming')})`, icon: '/images/tokens/shib.svg' }
	];

	const [selectedCurrency, setSelectedCurrency] = useState<IToken>(
		currencies[0]
	);

	return (
		<div className="fn-claim-reward">
			<Container>
				<div className="fn-claim-reward-inner">
					<Tabs
						className="fn-claim-reward-tabs"
						defaultActiveKey="claim-reward"
						id="uncontrolled-tab-example"
					>
						<Tab eventKey="claim-reward" title={t('Claim Reward')}>
							<Row className="gy-3">
								<Col lg="6">
									<div className="earn-card">
										<div className="earn-card__header winning">
											<img
												src="/images/icons/money.svg"
												alt="money"
												className="header__img winning"
											/>
											<div className="header-text">
												<h1>
													{t('Total reward earned')}
												</h1>
												<span>0</span>
											</div>
										</div>

										<div className="earn-card__content">
											<div className="content__header">
												<h1 className="header__title">{t('WINNING REWARDS')}</h1>
												<Dropdown className="fn-claim-with">
													<Dropdown.Toggle
														variant="dark"
														id="dropdown-claim-with"
													>
														<div className="header__claim">
															<h3 className="claim__text">{t('Claim with')}</h3>
															<img
																src="/images/icons/arrow-pink.svg"
																alt=""
																className="arrow"
															/>
														</div>
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
																<img
																	className="icon"
																	src={currency.icon}
																	alt=""
																/>
																<span className="name">{currency.name}</span>
															</Dropdown.Item>
														))}
													</Dropdown.Menu>
												</Dropdown>
											</div>

											<div className="content-winning">
												<h1 className="winning__reward">0</h1>
												<div className="d-flex justify-content-center">
													<button type="button" className="buy">
														<span>{t('Claim')}</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</Col>
								<Col lg="6">
									<div className="earn-card">
										<div className="earn-card__header commission">
											<img
												src="/images/icons/claim-commission.svg"
												alt="money"
												className="header__img commision"
											/>
											<div className="header-text">
												<h1>{t('Total reward earned')}</h1>
												<span>0</span>
											</div>
										</div>

										<div className="earn-card__content">
											<div className="content__header ">
												<h1 className="header__title">{t('COMMISSION REWARDS')}</h1>

												<Dropdown className="fn-claim-with">
													<Dropdown.Toggle
														variant="dark"
														id="dropdown-claim-with"
													>
														<div className="header__claim">
															<h3 className="claim__text">{t('Claim with')}</h3>
															<img
																src="/images/icons/arrow-pink.svg"
																alt=""
																className="arrow"
															/>
														</div>
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
																<img
																	className="icon"
																	src={currency.icon}
																	alt=""
																/>
																<span className="name">{currency.name}</span>
															</Dropdown.Item>
														))}
													</Dropdown.Menu>
												</Dropdown>
											</div>

											<div className="content-winning">
												<h1 className="winning__reward">0</h1>
												<div className="d-flex justify-content-center">
													<button type="button" className="buy">
														<span>{t('Claim')}</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</Col>
							</Row>

							<Row className="gy-3 mt-1">
								<Col>
									<div className="history">
										<div className="d-flex justify-content-center">
											<button type="button" className="history__btn">
												<span>{t('History')}</span>
											</button>
										</div>

										<Table responsive className="table-row-spacing">
											<thead>
												<tr>
													<th className="text-center">ID</th>
													<th className="text-center">{t('Currency')}</th>
													<th className="text-center">{t('Amount')}</th>
													<th className="text-center">{t('Status')}</th>
													<th className="text-end">{t('Comment')}</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>1</td>
													<td>USDT</td>
													<td>9.999</td>
													<td className="status">{t('PENDING')}...</td>
													<td className="text-end comment">{t('WINNING REWARDS')}</td>
												</tr>
												<tr>
													<td>2</td>
													<td>BTC</td>
													<td>9.999</td>
													<td className="status text-success">{t('SUCCESSFUL')}</td>
													<td className="text-end comment">
														{t('COMMISSION REWARDS')}
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
									</div>
								</Col>
							</Row>
						</Tab>
					</Tabs>
				</div>
			</Container>
		</div>
	);
};

export default ClaimPage;

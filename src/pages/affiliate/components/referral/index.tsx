import { useState } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './index.scss';

const Referral = () => {
	const [showmore, setShowmore] = useState<boolean>(false);
	const { t } = useTranslation();

	return (
		<>
			<div className="fn-referral">
				<div className="header">
					<h4>
						{t('INVITE A FRIEND TO GET')}:
						<span>
							<strong>7%</strong> {t('COMMISSION REWARDS')}
						</span>
					</h4>
				</div>
				<div className="body">
					<div className="form-group">
						<label>{t('Refferal code')}</label>
						<div className="input-gr">
							<input readOnly value="abcdefgh" />
							<button type="button" className="copy">
								<img src="/images/icons/copy.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="form-group">
						<label>{t('Referral Link')}</label>
						<div className="input-gr">
							<input readOnly value="https://q-gacha/abcdefgh" />
							<button type="button" className="copy">
								<img src="/images/icons/copy.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="form-action">
						<button
							type="button"
							className="more"
							onClick={() => setShowmore(true)}
						>
							<span>{t('More info')}</span>
						</button>
					</div>
				</div>
			</div>

			{showmore ? (
				<Modal
					className="fn-modal fn-show-more"
					size="xl"
					centered
					backdrop
					keyboard={false}
					show
					onHide={() => setShowmore(false)}
					animation={true}
				>
					<Modal.Header closeButton>
						<Modal.Title></Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Tabs
							className="fn-referral-tabs"
							defaultActiveKey="commission"
							id="uncontrolled-tab-example"
						>
							<Tab eventKey="commission" title={t('Commission')}>
								<table>
									<thead>
										<tr>
											<th>{t('Rank')}</th>
											<th>f1</th>
											<th>f2</th>
											<th>f3</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>4%</td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td>2</td>
											<td>4%</td>
											<td>2%</td>
											<td></td>
										</tr>
										<tr>
											<td>3</td>
											<td>4%</td>
											<td>2%</td>
											<td>1%</td>
										</tr>
									</tbody>
								</table>
							</Tab>
							<Tab
								eventKey="rank-conditions"
								title={t('Rank conditions')}
							>
                                <table className='conditions'>
									<thead>
										<tr>
											<th>{t('Rank')}</th>
											<th className='text-center'>{t('weekly team revenue from your f1')}</th>
											
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>0</td>
											
										</tr>
										<tr>
											<td>2</td>
											<td>$100</td>
											
										</tr>
										<tr>
											<td>3</td>
											<td>$300</td>
											
										</tr>
									</tbody>
								</table>
                            </Tab>
							<Tab eventKey="work-with-us" title={t('Work With Us')}>
                               <div className='work-with-us'>
                                <div>{t("If you own a community or a large group of players, or if you manage a large-scale system, don't hesitate to get in touch with us to discuss exclusive offers tailored just for you.")}</div>
                                <div>{t('Contact Information')}:</div>
                                <div>{t('Telegram: t.me/Fnb_support')}</div>
                                <div>Email: support@4numbers.io</div>
                                <div>{t("4Numbers will only collaborate with the leader at the helm of your system. If a member within the system wishes to expand or achieve significant revenue and desires a unique mechanism, please get in touch with your system's leader to initiate the discussion.")}</div>
                               </div>
                            </Tab>
						</Tabs>
					</Modal.Body>
				</Modal>
			) : (
				<></>
			)}
		</>
	);
};
export default Referral;

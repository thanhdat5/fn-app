import { Container, Tab, Tabs } from 'react-bootstrap';
import { authUserSelector } from 'redux-toolkit-saga/auth';
import { useAppSelector } from 'store/hooks';
import Banner from './components/banner';
import FourNumberWinner from './components/four-number-winner';
import MyTickets from './components/my-tickets';
import MyWinningTickets from './components/my-winning-tickets';
import Statistics from './components/statistics';
import './index.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Homepage = () => {
	const loggedUser = useAppSelector(authUserSelector);
	const [activeTab, setActiveTab] = useState('tab1');

	const handleTabSelect = (eventKey: any) => {
		setActiveTab(eventKey);
	};
	const { t } = useTranslation();
	return (
		<div className="fn-homepage">
			<Banner />
			<div className="fn-statistics">
				<Container>
					<Tabs
						defaultActiveKey="myTicket"
						id="uncontrolled-tab-example"
						unmountOnExit={true}
						mountOnEnter={true}
						transition={false}
						onSelect={handleTabSelect}
					>
						<Tab
							eventKey="myTicket"
							title={`${t('My ticket')} (${loggedUser?.totalTickets || 0})`}
						>
							{activeTab === 'myTicket' && (
								<>
									<Statistics />
									<MyTickets />
								</>
							)}
						</Tab>
						<Tab
							
							eventKey="myWinning"
							title={t('My winning')}
						>
							{activeTab === 'myWinning' && (
								<>
									<Statistics />
									<MyWinningTickets />
								</>
							)}
						</Tab>
						<Tab
							
							eventKey="fnWinner"
							title={t('Four Number winner')}
						>
							{activeTab === 'fnWinner' && <FourNumberWinner />}
						</Tab>
					</Tabs>
				</Container>
			</div>
		</div>
	);
};
export default Homepage;

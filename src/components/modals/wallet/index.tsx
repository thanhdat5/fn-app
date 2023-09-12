import { Modal, Tab, Tabs } from 'react-bootstrap';
import './index.scss';
import Deposit from './deposit';
import Withdraw from './withdraw';

type Props = {
	onDismiss: () => void;
};

const WalletModal = ({ onDismiss }: Props) => {
	return (
		<Modal
			className="fn-modal fn-wallet"
			centered
			backdrop
			keyboard={false}
			show
			onHide={onDismiss}
		>
			<Modal.Header closeButton>
				<Modal.Title>
					<img src="./images/icons/wallet.svg" alt="" />
					<p>Wallet</p>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
					<Tabs
						defaultActiveKey="deposit"
						id="uncontrolled-tab-example"
						className="wallet-tab"
					>
						<Tab eventKey="deposit" title="Deposit">
							<Deposit />
						</Tab>
						<Tab eventKey="withdraw" title="Withdraw">
							<Withdraw />
						</Tab>
					</Tabs>
			</Modal.Body>
		</Modal>
	);
};

export default WalletModal;

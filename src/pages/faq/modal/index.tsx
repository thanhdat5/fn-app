import { Accordion, Modal } from 'react-bootstrap';
import './index.scss';

type Props = {
	onDismiss: () => void;
};

const FAQModal = ({ onDismiss }: Props) => {
	// const { t } = useTranslation();
	return (
		<Modal
			className="fn-modal fn-faq"
			size="lg"
			centered
			backdrop
			keyboard={false}
			show
			onHide={onDismiss}
		>
			<Modal.Header closeButton>
				<Modal.Title>
					<img src="/images/logo.png" alt="FourNumber" />
				</Modal.Title>
			</Modal.Header>

			<Modal.Body className="fn-faq-body">
					<h3 className="faq-title">faq</h3>

					<div className="content">
						<Accordion >
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									<span className="index">01</span>
									<label className="title">What is Gacha game?</label>
								</Accordion.Header>
								<Accordion.Body>
									A gacha game operates by spending money to open gift boxes and
									collect valuable items. The rarity and value of these items
									depend on the player’s luck.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									<span className="index">02</span>
									<label className="title">
										What are the different genres of Gacha games?
									</label>
								</Accordion.Header>
								<Accordion.Body>
									There are different genres of Gacha Games like: Complete
									Gacha, Box Gacha, Re-roll Gacha, Upgrade Gacha, Volume Gacha,
									Consecutive Gacha, Mystery Gacha, Sugoroku Gacha.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>
									<span className="index">03</span>
									<label className="title">
										What does the QGacha ecosystem offer?
									</label>
								</Accordion.Header>
								<Accordion.Body>
									The QGacha ecosystem offers a community-based platform
									revolutionizing Gacha gaming through blockchain. It provides
									an enhanced Gacha experience with NFT ownership, supports game
									developers, and offers various Gacha game variations. QGacha
									aims to become the world's largest Gacha platform, fostering a
									global community of Gacha enthusiasts.
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey="3">
								<Accordion.Header>
									<span className="index">04</span>
									<label className="title">How to deposit?</label>
								</Accordion.Header>
								<Accordion.Body>
									Deposit Instructions: <br /><br />
									<label className="highlight">Log into Your Account: </label>
									 Access your cryptocurrency exchange or wallet account using
									your credentials. Navigate to Deposit Section: Find and click
									on the "Deposit" or "Add Funds" section within your account
									dashboard.<br /><br /> <label className="highlight"> Select Cryptocurrency: </label> Choose the specific
									cryptocurrency you wish to deposit from the list provided.
									Generate Deposit Address: Your exchange or wallet will provide
									a unique address. This address is essential for correctly
									receiving the cryptocurrency.<br /><br /> <label className="highlight"> Copy Deposit Address: </label> Carefully
									copy the provided deposit address. Make sure there are no
									typos or errors.<br /><br /> <label className="highlight"> Initiate Transfer:</label> In your external wallet,
									initiate a transfer by sending the desired amount of
									cryptocurrency to the deposit address you copied.<br /><br /> <label className="highlight"> Confirm
									Transaction: </label> Once you've sent the cryptocurrency, wait for
									network confirmations (the number may vary depending on the
									cryptocurrency) to validate the transaction.<br /><br /> <label className="highlight"> Check Deposit
									Status: </label> Return to your account dashboard and check the deposit
									history to see if the transaction has been credited.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
			</Modal.Body>
		</Modal>
	);
};

export default FAQModal;

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
											<label className="title">What is Four Number?</label>
										</Accordion.Header>
										<Accordion.Body>
											Challenge Fate with Mind: The "Four Numbers" Game
											<br />
											<br />
											Have you ever wondered if luck is on your side when buying
											lottery tickets? Try the “Four Numbers” game now - an
											exciting game that promises the chance of winning big.
											<br />
											<br />
											This game's thrilling and anticipation-filled experiences
											make buying lottery tickets more exciting than ever. You
											can test your luck daily and feel the special thrill when
											your numbers match the winning combination.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="1">
										<Accordion.Header>
											<span className="index">02</span>
											<label className="title">
												"Why should you participate in the "Four Numbers" game?
											</label>
										</Accordion.Header>
										<Accordion.Body>
											In these challenging economic times, the "Four Numbers"
											game offers more than just an exciting source of
											entertainment. Firstly, this game ensures transparency and
											fairness, with no interference from anyone. This means
											everyone has an equal opportunity to participate and try
											their luck.
											<br /> <br />
											The game boasts an incredibly high winning rate, and the
											more people who participate, the more prizes emerge,
											giving everyone a taste of luck. A simple, fun, and
											rewarding game is always something people aspire to. Aside
											from providing you with a new pastime during your leisure
											time, the rewards from "Four Numbers" can also become an
											additional source of income for many.
											<br /> <br />
											So, join the "Four Numbers" game to experience joy,
											excitement, and the opportunity to improve your personal
											and family finances."
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="2">
										<Accordion.Header>
											<span className="index">03</span>
											<label className="title">
												What about the credibility of Four Numbers?
											</label>
										</Accordion.Header>
										<Accordion.Body>
											The credibility of the "Four Numbers" game is always
											highly regarded and ensured. This game operates on strict
											rules and regulations to guarantee transparency and
											fairness in selecting the winning numbers. There is a
											rigorous management system in place, along with regular
											checks, to ensure that all transactions and results are
											executed accurately and honestly. Additionally, the system
											is entirely free from external interference or influence,
											and transparency is our top priority.
											<br /> <br />
											We are finalizing all procedures to obtain the necessary
											licenses for the system to operate smoothly.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="3">
										<Accordion.Header>
											<span className="index">04</span>
											<label className="title">Conditions for participating</label>
										</Accordion.Header>
										<Accordion.Body>
										You must be at least 18 years old or reach the age of majority under your jurisdiction. You must be permitted to play online games by the applicable laws.
										</Accordion.Body>
									</Accordion.Item>

									<Accordion.Item eventKey="4">
										<Accordion.Header>
											<span className="index">05</span>
											<label className="title">Start your game journey</label>
										</Accordion.Header>
										<Accordion.Body>
										Connect your wallet and begin. More information is in the video below.
										</Accordion.Body>
									</Accordion.Item>
						</Accordion>
					</div>
			</Modal.Body>
		</Modal>
	);
};

export default FAQModal;

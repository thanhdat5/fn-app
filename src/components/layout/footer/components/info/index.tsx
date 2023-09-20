import { Col, Row } from 'react-bootstrap';
import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FAQModal from 'pages/faq/modal';
import { useTranslation } from 'react-i18next';

const Info = () => {
	const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
	const [showModal, setShowModal] = useState<boolean>(false);
	const {t} = useTranslation();

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return (
		<div className="fn-info">
			<img className="logo d-md-none d-block" src="/images/logo.png" alt="" />
			<Row className="justify-content-center">
				<Col md="4" xs="7">
					<img
						className="logo d-md-block d-none"
						src="/images/logo.png"
						alt=""
					/>
					<p>
					{t("'Perseverance pays off' is the message Four Number wants to convey to our customers. When someone comes to Four Number, their belief can turn into an opportunity for growth and improvement, which is the value that Four Number pursues. Our goal is to become a top-tier entertainment gaming company on a global scale.")}
						
					</p>
					<div className="socials">
						<a href="https://google.com">
							<img src="/images/icons/twitter.svg" alt="" />
						</a>
						<a href="https://google.com">
							<img src="/images/icons/telegram.svg" alt="" />
						</a>
					</div>
				</Col>
				<Col md="2" xs="1">
					<div className="line"></div>
				</Col>
				<Col md="4" xs="4">
					<h4>DOCS</h4>
					<ul>
						<li>
							<Link to={windowSize > 576 ? "/faq" : "/"} onClick={() => {
								if(windowSize <= 576) {
									setShowModal(true)
								}
							}}>FAQ</Link>
						</li>
						<li>
							<a href="https://google.com">
							{t('Privacy Policy')}
							</a>
						</li>
						<li>
							<a href="https://google.com">{t('Terms & Conditions')}</a>
						</li>
						<li>
							<img src="./images/18+.svg" alt="" />
						</li>
					</ul>
				</Col>
			</Row>

			{
				showModal ? <FAQModal onDismiss={() => setShowModal(false)} /> :<></>
			}
		</div>
	);
};
export default Info;

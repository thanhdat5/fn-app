import BuyTicketsModal from 'components/modals/buy-tickets';
import HowToPlayModal from 'components/modals/how-to-play';
import PrizeModal from 'components/modals/prize';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authUserSelector, signIn } from 'redux-toolkit-saga/auth';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import Countdown from './components/countdown';
import Ticket from './components/ticket';
import './index.scss';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useTranslation } from 'react-i18next';
import { EffectCoverflow } from 'swiper';
import { LANGUAGES } from 'constants/language';
import { ILanguage } from 'types/language.model';

const Banner = () => {
	const loggedUser = useAppSelector(authUserSelector);
	const [showHowToPlay, setShowHowToPlay] = useState(false);
	const [showPrize, setShowPrize] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [selectedTicket, setSelectedTicket] = useState<number>(1);
	const dispatch = useAppDispatch();
	const {t, i18n } = useTranslation();
	const dataLanguage = LANGUAGES.filter((language: ILanguage) => language.value === i18n.language)[0]

	const [windowSize, setWindowSize] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	const handleSignIn = () => {
		dispatch(
			signIn({
				walletAddress: '123',
				tokens: [
					{
						symbol: 'USDT',
						name: 'USDT',
						icon: '/images/tokens/usdt.svg',
						balance: '9.99999999'
					},
					{
						symbol: 'BTC',
						name: `BTC ${t('Upcoming')}`,
						icon: '/images/tokens/btc.svg',
						balance: '0'
					},
					{
						symbol: 'BNB',
						name: `BNB ${t('Upcoming')}`,
						icon: '/images/tokens/bnb.svg',
						balance: '0'
					},
					{
						symbol: 'ETH',
						name: `ETH ${t('Upcoming')}`,
						icon: '/images/tokens/eth.svg',
						balance: '0'
					}
				],
				totalTickets: 3,
				totalWinningTickets: 0,
				totalPrizeWon: 'TIỀN'
			})
		);
	};

	return (
		<>
			<div className="fn-banner">
				<img
					src={`${
						windowSize <= 1199
							? './images/banner-mobile.png'
							: '/images/banner.png'
					}`}
					className="w-100"
					alt=""
				/>

				<div className="sub-menu">
					<Container>
						<button type="button" onClick={() => setShowPrize(true)}>
							{t('Prize')}
						</button>
						<button type="button" onClick={() => setShowHowToPlay(true)}>
						{t('How to play')}
							
						</button>
						<h1 className="slogan">
							Don't work for{' '}
							<span>
								<strong>money</strong>
								<br /> Make <strong>money</strong> work for you{' '}
							</span>
						</h1>

						
					</Container>
				</div>

				
				{windowSize < 576 ? (
							<div className="countdown-mobile">
								<label>
								{t('Next draw start in')}

								</label>
								<span>00H:00M:00S</span>
							</div>
						) : (
							<></>
						)}

				<Link
					to="/"
					className="fn-banner-buy"
					onClick={() => (!loggedUser ? handleSignIn() : setShowModal(true))}
				>
					<img src={dataLanguage.img} alt="Buy" />
				</Link>
				<div className="fn-banner-box">
					<Container>
						{windowSize > 576 ? <Countdown /> : <></>}

						<Row className="justify-content-center">
							<Col lg="11" className="p-0">
								<div className="fn-banner-tickets">
									<Ticket
										title="Only 67 tickets left"
										image="/images/ticket/ticket-1.png"
										imageHover="/images/ticket/ticket-1-hover.png"
										isSelected={selectedTicket === 1 ? true : false}
										onSelect={() => setSelectedTicket(1)}
									/>
									<Ticket
										title="Only 67 tickets left"
										image="/images/ticket/ticket-2.png"
										imageHover="/images/ticket/ticket-2-hover.png"
										isSelected={selectedTicket === 2 ? true : false}
										onSelect={() => setSelectedTicket(2)}
									/>
									<Ticket
										title="Only 67 tickets left"
										image="/images/ticket/ticket-3.png"
										imageHover="/images/ticket/ticket-3-hover.png"
										isSelected={selectedTicket === 3 ? true : false}
										onSelect={() => setSelectedTicket(3)}
									/>
								</div>

								<div className="fn-banner-tickets-mobile">
									<Swiper
										effect={'coverflow'}
										initialSlide={1}
										grabCursor={true}
										centeredSlides={true}
										slidesPerView={3}
										slideToClickedSlide={true}
										coverflowEffect={{
											rotate: 0,
											stretch: 0,
											depth: 100,
											modifier: 1,
											
										}}
										modules={[EffectCoverflow]}
										className="swiper_container"
									>
										<SwiperSlide>
											<img
												src="./images/ticket/ticket-1.png"
												alt="slide_image"
											/>
											<p>
											{t('Only 67 tickets left')}

											</p>
										</SwiperSlide>
										<SwiperSlide>
											<img
												src="./images/ticket/ticket-2.png"
												alt="slide_image"
											/>
											<p>{t('Only 67 tickets left')}</p>
										</SwiperSlide>
										<SwiperSlide>
											<img
												src="./images/ticket/ticket-3.png"
												alt="slide_image"
											/>
											<p>{t('Only 67 tickets left')}</p>
										</SwiperSlide>
									</Swiper>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
			{showHowToPlay ? (
				<HowToPlayModal onDismiss={() => setShowHowToPlay(false)} />
			) : (
				<></>
			)}
			{showPrize ? <PrizeModal onDismiss={() => setShowPrize(false)} /> : <></>}
			{showModal ? (
				<BuyTicketsModal onDismiss={() => setShowModal(false)} />
			) : (
				<></>
			)}
		</>
	);
};
export default Banner;

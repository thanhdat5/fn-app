import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Countdown from "./components/countdown";
import Ticket from "./components/ticket";
import "./index.scss";
import HowToPlayModal from "components/modals/how-to-play";
import { useState } from "react";
import { authUserSelector } from "redux-toolkit-saga/auth";
import { useAppSelector } from "store/hooks";
import PrizeModal from "components/modals/prize";

const Banner = () => {
    const loggedUser = useAppSelector(authUserSelector);
    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const [showPrize, setShowPrize] = useState(false);

    return <>
        <div className="fn-banner">
            <img src="/images/banner.png" className="w-100" alt="" />
            {
                !loggedUser ? <div className="sub-menu">
                    <Container>
                        <button type="button" onClick={() => setShowPrize(true)}>prize</button>
                        <button type="button" onClick={() => setShowHowToPlay(true)}>how to play?</button>
                    </Container>
                </div> : <></>
            }
            <Link to="/" className="fn-banner-buy">
                <img src="/images/ticket/txt-buy.png" alt="Buy" />
            </Link>
            <div className="fn-banner-box">
                <Container>
                    <Countdown />
                    <Row className="justify-content-center">
                        <Col lg="11">
                            <div className="fn-banner-tickets">
                                <Ticket title="Only 67 tickets left" image="/images/ticket/ticket-1.png" imageHover="/images/ticket/ticket-1-hover.png" />
                                <Ticket title="Only 67 tickets left" image="/images/ticket/ticket-2.png" imageHover="/images/ticket/ticket-2-hover.png" />
                                <Ticket title="Only 67 tickets left" image="/images/ticket/ticket-3.png" imageHover="/images/ticket/ticket-3-hover.png" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        {showHowToPlay ? <HowToPlayModal onDismiss={() => setShowHowToPlay(false)} /> : <></>}
        {showPrize ? <PrizeModal onDismiss={() => setShowPrize(false)} /> : <></>}
    </>
}
export default Banner
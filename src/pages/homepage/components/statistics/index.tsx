import { Col, Row } from "react-bootstrap";
import { authUserSelector } from "redux-toolkit-saga/auth";
import { useAppSelector } from "store/hooks";
import "./index.scss";
import { useEffect, useState } from "react";

const Statistics = () => {
    const loggedUser = useAppSelector(authUserSelector);
    const [windowSize, setWindowSize] = useState(
        window.innerWidth,
       
      );

      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    return loggedUser ? <div className="fn-total">
        <img src={`${windowSize < 992 ? "./images/total-bg-mobile.svg" : "/images/total-bg.svg"}`} className="w-100" alt="" />
        <div className="inner">
            <Row>
                <Col lg="9">
                    <div className="line">
                        <img src="/images/icons/ticket.svg" alt="" />
                        <span>Total tickets: {loggedUser?.totalTickets}</span>
                    </div>
                    <div className="line">
                        <img src="/images/icons/winning.svg" alt="" />
                        <span>Total winning tickets: {loggedUser?.totalWinningTickets}</span>
                    </div>
                </Col>
                <Col lg="3">
                    <div className="line">
                        <img src="/images/icons/prize.svg" alt="" />
                        <span>Total winning tickets: {loggedUser?.totalPrizeWon}</span>
                    </div>
                </Col>
            </Row>
        </div>
    </div> : <></>
}
export default Statistics
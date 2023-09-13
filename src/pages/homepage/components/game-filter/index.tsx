import { Col, Row } from "react-bootstrap";
import "./index.scss";

const GameFilter = () => {
    return <div className="fn-game-filter">
        <Row>
            <Col className="order-0 p-0 align-self-center"><span className="label">Game ID</span></Col>
            <Col className="order-2 order-lg-1 p-0 align-self-center" sm="12"  lg="auto"><button type="button" className="prev">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.71436 1L6.71436 7L1.00007 4L6.71436 1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <input type="text" value="20230703" />
        <button type="button" className="next">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7V1L6.71429 4L1 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <button type="button" className="end">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1V7M1 7V1L6.71429 4L1 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button></Col>
       
            <Col className="order-1 order-lg-2 p-0 align-self-center" > <span className="date">03/07/2023</span></Col>
        
        
        </Row>
    </div>
}
export default GameFilter
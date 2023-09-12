import { Container, Tab, Tabs } from "react-bootstrap";
import { authUserSelector } from "redux-toolkit-saga/auth";
import { useAppSelector } from "store/hooks";
import Banner from "./components/banner";
import FourNumberWinner from "./components/four-number-winner";
import MyTickets from "./components/my-tickets";
import MyWinningTickets from "./components/my-winning-tickets";
import Statistics from "./components/statistics";
import "./index.scss";

const Homepage = () => {
    const loggedUser = useAppSelector(authUserSelector);
    return <div className="fn-homepage">
        <Banner />
        <div className="fn-statistics">
            <Container>
                <Tabs
                    defaultActiveKey="myTicket"
                    id="uncontrolled-tab-example"
                >
                    <Tab eventKey="myTicket" title={`My Ticket (${loggedUser?.totalTickets || 0})`}>
                        <Statistics />
                        <MyTickets />
                    </Tab>
                    <Tab eventKey="myWinning" title="my winning">
                        <Statistics />
                        <MyWinningTickets />
                    </Tab>
                    <Tab eventKey="fnWinner" title="four Numbers Winner">
                        <FourNumberWinner />
                    </Tab>
                </Tabs>
            </Container>
        </div>
    </div>
}
export default Homepage
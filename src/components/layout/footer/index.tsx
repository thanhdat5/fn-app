import { Container } from "react-bootstrap";
import Contact from "./components/contact";
import Copyright from "./components/copyright";
import Info from "./components/info";
import Networks from "./components/networks";
import "./index.scss";

const Footer = () => {
    return <footer className="fn-footer">
        <Container>
            <Networks />
            {/* <Partners /> */}
            <Contact />
            <Info />
            <Copyright />
        </Container>
    </footer>
}
export default Footer
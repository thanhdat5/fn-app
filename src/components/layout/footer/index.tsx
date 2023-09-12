import { Container } from "react-bootstrap";
import Copyright from "./components/copyright";
import "./index.scss";
import Networks from "./components/networks";
import Partners from "./components/partners";
import Contact from "./components/contact";
import Info from "./components/info";

const Footer = () => {
    return <footer className="fn-footer">
        <Container>
            <Networks />
            <Partners />
            <Contact />
            <Info />
            <Copyright />
        </Container>
    </footer>
}
export default Footer
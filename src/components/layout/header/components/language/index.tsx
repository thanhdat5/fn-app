import { Dropdown } from "react-bootstrap";
import "./index.scss";

type Props = {
    onClick?: () => void;
}
const Language = ({ onClick }: Props) => {

    // return <button type="button" className="fn-language" onClick={onClick}>
    //     <span>ENG</span>
    //     <img src="/images/icons/language.svg" alt="lang" />
    // </button>

    return (
    <Dropdown className="fn-language">
      <Dropdown.Toggle variant="dark" >
      <span>ENG</span>
        <img src="/images/icons/language.svg" alt="lang" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">English</Dropdown.Item>
        <Dropdown.Item href="#" className="active">Việt Nam</Dropdown.Item>
        <Dropdown.Item href="#">한국어</Dropdown.Item>
        <Dropdown.Item href="#">日本語</Dropdown.Item>
        <Dropdown.Item href="#">Filipino</Dropdown.Item>
        <Dropdown.Item href="#">हिन्दी</Dropdown.Item>
        <Dropdown.Item href="#">nigeria</Dropdown.Item>
        <Dropdown.Item href="#">日本語</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}
export default Language
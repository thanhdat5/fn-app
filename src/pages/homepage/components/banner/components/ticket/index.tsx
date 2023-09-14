import "./index.scss";

type Props = {
    title: string;
    image: string;
    imageHover: string;
    onShowModal: () => void;
}
const Ticket = ({title, image, imageHover, onShowModal }: Props) => {
    return <div className="fn-ticket" onClick={onShowModal}>
        <span>{title}</span>
        <img className="original" src={image} alt="" />
        <img className="hover" src={imageHover} alt="" />
    </div>
}
export default Ticket
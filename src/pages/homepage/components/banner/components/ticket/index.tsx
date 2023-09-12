import "./index.scss";

type Props = {
    title: string;
    image: string;
    imageHover: string;
}
const Ticket = ({title, image, imageHover }: Props) => {
    return <div className="fn-ticket">
        <span>{title}</span>
        <img className="original" src={image} alt="" />
        <img className="hover" src={imageHover} alt="" />
    </div>
}
export default Ticket
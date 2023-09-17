import './index.scss';

type Props = {
	title: string;
	image: string;
	imageHover: string;
	isSelected: boolean;
	onSelect: () => void;
};
const Ticket = ({
	title,
	image,
	imageHover,
	isSelected = false,
	onSelect
}: Props) => {
	return (
		<div className="fn-ticket" onClick={onSelect}>
			<span>{title}</span>
			<img className="original" src={`${isSelected ? imageHover : image}`} alt="" />
			<img className="hover" src={imageHover} alt="" />
		</div>
	);
};
export default Ticket;

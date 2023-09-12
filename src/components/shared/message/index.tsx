import { useEffect, useState } from "react";
import "./index.scss";

type Props = {
    title?: string;
    message: string;
    type: 'success' | 'error' | 'info';
    customIcon?: string;
}
const Message = ({ type = 'info', customIcon, title, message }: Props) => {
    const [icon, setIcon] = useState(customIcon);

    useEffect(() => {
        if (!customIcon) {
            switch (type) {
                case 'success':
                    setIcon('/images/icons/success.svg');
                    break;
                case 'error':
                    setIcon('/images/icons/error.svg');
                    break;
                default:
                    setIcon('/images/icons/info.svg');
                    break;
            }
        }
    }, [customIcon, type])

    return <div className="fn-message">
        <div className="icon">
            <img src={icon} alt="" />
        </div>
        <div className="content">
            {title ? <div className="title">{title}</div> : <></>}
            <div className="message" dangerouslySetInnerHTML={{ __html: message }}></div>
        </div>
    </div>
}
export default Message
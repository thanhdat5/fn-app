import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

type Props = {
    onDismiss: () => void;
}
const HowToPlayModal = ({ onDismiss }: Props) => {
    const { t } = useTranslation();
    return <Modal className="fn-modal fn-how-to-play" size="lg" centered backdrop keyboard={false} show onHide={onDismiss} animation={true}>
        <Modal.Header closeButton>
            <Modal.Title>{t('how to play?')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="fn-htp-body">
                <p>{t('Four numbers Instructions')}</p>
                <ul>
                    <li>{t('To participate in the game, players will select and purchase one or multiple lottery tickets.')}</li>
                    <li>{t('The lottery tickets will include numbers ranging from 0000 to 9999. Players who purchase a lottery ticket will receive four random digits, and these numbers will not repeat.')}</li>
                    <li>{t('Players can choose from 3 ticket levels: $2, $5, and $10')}</li>
                    <li>{t('The game will occur once a day, from 1:00 PM to 0:55 PM UTC +0.')}</li>
                    <li>{t('The project will allocate 5 minutes for each play session to conduct the drawing and distribute prizes to players. During this time, players cannot purchase lottery tickets.')}</li>
                </ul>
            </div>
        </Modal.Body>
    </Modal>
}
export default HowToPlayModal
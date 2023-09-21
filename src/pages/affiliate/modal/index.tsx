import { Modal } from "react-bootstrap";
import "./index.scss";
import Affiliate from "../components";
import { useTranslation } from "react-i18next";

type Props = {
    onDismiss: () => void;
}
const AffiliateModal = ({ onDismiss }: Props) => {
    const {t} = useTranslation();

    return <Modal className="fn-modal fn-modal-affiliate" size="lg" fullscreen centered animation={true} backdrop keyboard={false} show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title>
                <img src="/images/logo.png" alt="" height={25} />
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="section-title">{t('Affiliate')}</div>
            <Affiliate />
        </Modal.Body>
    </Modal>
}
export default AffiliateModal
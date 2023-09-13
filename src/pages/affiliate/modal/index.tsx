import { Modal } from "react-bootstrap";
import "./index.scss";
import Affiliate from "../components";

type Props = {
    onDismiss: () => void;
}
const AffiliateModal = ({ onDismiss }: Props) => {
    return <Modal className="fn-modal fn-modal-affiliate" size="lg" fullscreen centered backdrop keyboard={false} show onHide={onDismiss}>
        <Modal.Header closeButton>
            <Modal.Title>
                <img src="/images/logo.png" alt="" height={25} />
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="section-title">Affiliate</div>
            <Affiliate />
        </Modal.Body>
    </Modal>
}
export default AffiliateModal
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { authUserSelector } from "redux-toolkit-saga/auth";
import { useAppSelector } from "store/hooks";
import "./index.scss";

type Props = {
    onClick: () => void;
    signOut: () => void;
    title?: string
}



const ConnectWallet = ({onClick, title = 'connect wallet', signOut}: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const loggedUser = useAppSelector(authUserSelector);
    const {t} = useTranslation();
    const wrapperRef = useRef(null);


    function useOutsideAlerter(ref: MutableRefObject<HTMLDivElement | null>) {
        useEffect(() => {
        
          function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowModal(false)
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }

      useOutsideAlerter(wrapperRef);

    return (
        <div className="wrapper">
            <button type="button" className="fn-connect-wallet" onClick={() => {
                if(loggedUser){
                    setShowModal(!showModal)
                }else {
                    onClick()
                }

            }}>
        <span>{t(title)}</span>
        <img className={`arrow ${showModal ? 'show' : ''}`} src="/images/icons/arrow.svg" alt="" />
    </button>

    {showModal ? (
        <div className="fn-connect-wallet-modal" ref={wrapperRef}>
            <div className="wallet">
                <div className="wallet-title">
                    <img src="./images/icons/meta.svg" alt="meta-icon" />
                    <h3>Metamask</h3>
                </div>
                <div className="wallet-info">
                    <p className="m-0">0x...DW2...</p>
                    <img src="./images/icons/copy.svg" alt="" />
                </div>
            </div>

            <button className="btn" onClick={() => {
                setShowModal(false)
                signOut();

            }}>
            disconnect
            </button>

            <div className="network">
                <h3>Network</h3>
                <div className="chain">
                    <img src="./images/tokens/bnb.svg" alt="" />
                    <p>BNB Chain</p>
                </div>
            </div>
        </div>
    ) : <></>}
        </div>
    )

   
}
export default ConnectWallet
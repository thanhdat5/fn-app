import LanguageModal from "components/modals/language";
import UserInformationModal from "components/modals/user-information";
import AffiliateModal from "pages/affiliate/modal";
import FAQModal from "pages/faq/modal";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { authUserSelector, signIn, signOut } from "redux-toolkit-saga/auth";
import { useAppDispatch, useAppSelector } from "store/hooks";
import ConnectWallet from "./components/connect-wallet";
import Language from "./components/language";
import Logo from "./components/logo";
import Menu from "./components/menu";
import MenuMobile from "./components/menu-mobile";
import "./index.scss";
import { DEFAULT_LANGUAGE } from "constants/language";

const Header = () => {
    const dispatch = useAppDispatch();
    const loggedUser = useAppSelector(authUserSelector);

    // const [selectedToken, setSelectedToken] = useState<IToken | undefined>(undefined);
    const [showUserInformation, setShowUserInformation] = useState(false);
    // const [showSettings, setShowSettings] = useState(false);
    // const [showSignIn, setShowSignIn] = useState<boolean>(false);
    // const [showSignUp, setShowSignUp] = useState<boolean>(false);
    // const [showWallet, setShowWallet] = useState<boolean>(false);
    const [showAffiliate, setShowAffiliate] = useState<boolean>(false);
    const [showLanguage, setShowLanguage] = useState<boolean>(false);
    const [showFAQ, setShowFAQ] = useState<boolean>(false);
    const [selectedLang, setSelectedLang] = useState<string>(DEFAULT_LANGUAGE);

    useEffect(() => {
        if (loggedUser && loggedUser.tokens?.length) {
            // setSelectedToken(loggedUser.tokens[0])
        }
        if (!loggedUser) {
            setShowUserInformation(false);
        }
    }, [loggedUser])

    const handleSignIn = () => {
        dispatch(signIn({
            walletAddress: '123',
            tokens: [
                { symbol: 'USDT', name: 'USDT', icon: '/images/tokens/usdt.svg', balance: '9.99999999' },
                { symbol: 'BTC', name: 'BTC (upcoming)', icon: '/images/tokens/btc.svg', balance: '0' },
                { symbol: 'BNB', name: 'BNB (upcoming)', icon: '/images/tokens/bnb.svg', balance: '0' },
                { symbol: 'ETH', name: 'ETH (upcoming)', icon: '/images/tokens/eth.svg', balance: '0' },
                { symbol: 'BAKAC', name: 'BAKAC', icon: '/images/tokens/bakac.svg', balance: '9.99999999' },
            ],
            totalTickets: 3,
            totalWinningTickets: 0,
            totalPrizeWon: "TIỀN"
        }))
    }

    const handleSignOut = () => {
        dispatch(signOut());
    }

    return <>
        <div className="fn-header">
            <Container>
                <div className="fn-header-inner">
                    <Logo />
                    {
                        loggedUser ? <>
                            <Menu />
                            
                            <ConnectWallet onClick={handleSignIn} title="0xdwd..."/>
                            <MenuMobile
                                onShowAffiliate={() => setShowAffiliate(true)}
                                onShowLanguage={() => setShowLanguage(true)}
                                onShowFAQ={() => setShowFAQ(true)}
                            />
                        </> : <>
                            <ConnectWallet onClick={handleSignIn}/>
                           
                        </>
                    }
                       
                       <Language selectedLang={selectedLang} onChangeLanguage={setSelectedLang}/>
                </div>
            </Container>
        </div>
        {showUserInformation ? <UserInformationModal onLogout={handleSignOut} onDismiss={() => setShowUserInformation(false)} /> : <></>}
        {showAffiliate ? <AffiliateModal onDismiss={() => setShowAffiliate(false)} /> : <></>}
        {showLanguage ? <LanguageModal onDismiss={() => setShowLanguage(false)} selectedLang={selectedLang} onChangeLanguage={setSelectedLang}/> : <></>}
        {showFAQ ? <FAQModal onDismiss={() => setShowFAQ(false)} /> : <></>}
    </>
}
export default Header
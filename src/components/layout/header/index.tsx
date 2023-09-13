import SettingsModal from "components/modals/settings";
import SignInModal from "components/modals/sign-in";
import SignUpModal from "components/modals/sign-up";
import UserInformationModal from "components/modals/user-information";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { authUserSelector, signIn, signOut } from "redux-toolkit-saga/auth";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { IToken } from "types/token.model";
import Balance from "./components/balance";
import Language from "./components/language";
import Logo from "./components/logo";
import Menu from "./components/menu";
import Setting from "./components/setting";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import User from "./components/user";
import "./index.scss";
import WalletModal from "components/modals/wallet";
import MenuMobile from "./components/menu-mobile";

const Header = () => {
    const dispatch = useAppDispatch();
    const loggedUser = useAppSelector(authUserSelector);

    const [selectedToken, setSelectedToken] = useState<IToken | undefined>(undefined);
    const [showUserInformation, setShowUserInformation] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showSignIn, setShowSignIn] = useState<boolean>(false);
    const [showSignUp, setShowSignUp] = useState<boolean>(false);
    const [showWallet, setShowWallet] = useState<boolean>(false);

    useEffect(() => {
        if (loggedUser && loggedUser.tokens?.length) {
            setSelectedToken(loggedUser.tokens[0])
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
        setShowSignIn(false);
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
                            <Menu onShowWallet={() => setShowWallet(true)} />
                            <Balance selectedToken={selectedToken} tokens={loggedUser.tokens} onSelect={setSelectedToken} />
                            <User onClick={() => setShowUserInformation(true)} />
                            <MenuMobile onShowWallet={() => setShowWallet(true)} />
                        </> : <>
                            <SignUp onClick={() => setShowSignUp(true)} />
                            <SignIn onClick={() => { setShowSignIn(true); }} />
                        </>
                    }
                    <Language />
                    {
                        loggedUser ? <Setting onClick={() => setShowSettings(true)} /> : <></>
                    }
                </div>
            </Container>
        </div>
        {showUserInformation ? <UserInformationModal onLogout={handleSignOut} onDismiss={() => setShowUserInformation(false)} /> : <></>}
        {showSettings ? <SettingsModal onDismiss={() => setShowSettings(false)} /> : <></>}
        {showSignIn ? <SignInModal onSignIn={handleSignIn} onSignUp={() => { setShowSignIn(false); setShowSignUp(true) }} onDismiss={() => setShowSignIn(false)} /> : <></>}
        {showSignUp ? <SignUpModal onDismiss={() => setShowSignUp(false)} /> : <></>}
        {showWallet ? <WalletModal onDismiss={() => setShowWallet(false)} /> : <></>}
    </>
}
export default Header
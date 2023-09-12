import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
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
import { useAppDispatch, useAppSelector } from "store/hooks";
import { authUserSelector, signIn, signOut } from "redux-toolkit-saga/auth";
import UserInformationModal from "components/modals/user-information";
import SettingsModal from "components/modals/settings";

const Header = () => {
    const dispatch = useAppDispatch();
    const loggedUser = useAppSelector(authUserSelector);

    const [selectedToken, setSelectedToken] = useState<IToken | undefined>(undefined);
    const [showUserInformation, setShowUserInformation] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

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
                            <Balance selectedToken={selectedToken} tokens={loggedUser.tokens} onSelect={setSelectedToken} />
                            <User onClick={() => setShowUserInformation(true)} />
                        </> : <>
                            <SignUp />
                            <SignIn onClick={handleSignIn} />
                        </>
                    }
                    <Language />
                    {
                        loggedUser ? <Setting onClick={() => setShowSettings(true)}/> : <></>
                    }
                </div>
            </Container>
        </div>
        {showUserInformation ? <UserInformationModal onLogout={handleSignOut} onDismiss={() => setShowUserInformation(false)} /> : <></>}
        {showSettings ? <SettingsModal onDismiss={() => setShowSettings(false)} /> : <></>}
    </>
}
export default Header
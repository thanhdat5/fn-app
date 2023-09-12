import { useEffect, useState } from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import { IToken } from "types/token.model";
import "./index.scss";

type Props = {
    selectedToken?: IToken;
    tokens: IToken[];
    onSelect: (token: IToken) => void;
}
const Balance = ({ selectedToken, tokens, onSelect }: Props) => {
    const [keyword, setKeyword] = useState('');
    const [filteredTokens, setFilteredToken] = useState<any[]>([]);

    useEffect(() => {
        setFilteredToken(tokens.filter(token => token.name.toLowerCase().includes(keyword.toLowerCase().trim())) || []);
    }, [tokens, keyword])

    return <Dropdown className="fn-balance">
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
            <img className="token" src={selectedToken?.icon} alt="" />
            <span>{selectedToken?.balance}</span>
            <img className="arrow" src="/images/icons/arrow.svg" alt="" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <div className="fn-token-search">
                <img className="search" src="/images/icons/search.svg" alt="" />
                <FormControl
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="fn-token-search-icon"
                />
            </div>
            {
                filteredTokens.map(token => <Dropdown.Item onClick={() => onSelect(token)} key={token.symbol} className={`fn-token-item ${token.symbol === selectedToken?.symbol ? 'active' : ''}`}>
                    <img className="icon" src={token.icon} alt="" />
                    <span className="name">{token.name}</span>
                    <span className="balance">{token.balance}</span>
                </Dropdown.Item>)
            }
        </Dropdown.Menu>
    </Dropdown>
}
export default Balance
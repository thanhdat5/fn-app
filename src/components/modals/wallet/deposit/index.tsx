import FnButton from "components/shared/button"
import { useState } from "react";
import { Dropdown, Form, InputGroup } from "react-bootstrap"
import { IToken } from "types/token.model";
import './index.scss'

const Deposit = () => {
  const currencies: IToken[] = [
		{ symbol: 'USDT', name: 'USDT', icon: '/images/tokens/usdt.svg' },
		{ symbol: 'BTC', name: 'BTC ', icon: '/images/tokens/btc.svg' },
		{ symbol: 'BNB', name: 'BNB ', icon: '/images/tokens/bnb.svg' },
		{ symbol: 'ETH', name: 'ETH ', icon: '/images/tokens/eth.svg' },
		{ symbol: 'BAKAC', name: 'BAKAC', icon: '/images/tokens/bakac.svg' }
	];

	const networks: IToken[] = [
		{ symbol: 'ETH', name: 'Ethereum (ERC20)', icon: 'ETH' },
		{ symbol: 'BSC', name: 'BNB Smart Chain (BEP20) ', icon: 'BSC' }
	];
	const [selectedCurrency, setSelectedCurrency] = useState<IToken>(
		currencies[0]
	);
	const [selectedNetwork, setSelectedNetwork] = useState<IToken>(networks[0]);

  return (
    <div className="fn-deposit">
      <div className=" dropdown-wrapper">
				<Form.Group>
					<Form.Label>Currency</Form.Label>

					<Dropdown className="fn-deposit-currency">
						<Dropdown.Toggle variant="dark" id="dropdown-currency">
							<img className="token" src={selectedCurrency.icon} alt="" />
							<span>{selectedCurrency.name}</span>
							<img className="arrow" src="/images/icons/arrow.svg" alt="" />
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{currencies.map(currency => (
								<Dropdown.Item
									onClick={() => setSelectedCurrency(currency)}
									key={currency.name}
									className={`fn-token-item ${
										currency.symbol === selectedCurrency.symbol ? 'active' : ''
									}`}
								>
									<img className="icon" src={currency.icon} alt="" />
									<span className="name">{currency.name}</span>
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</Form.Group>

				<Form.Group >
					<Form.Label>NetWork</Form.Label>
					<Dropdown className="fn-deposit-network">
						<Dropdown.Toggle variant="dark" id="dropdown-network">
							{/* <img className="token" src={selectedNetwork.icon} alt="" /> */}
							<span>{selectedNetwork.icon}</span>
							<img className="arrow" src="/images/icons/arrow.svg" alt="" />
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{networks.map(network => (
								<Dropdown.Item
									onClick={() => setSelectedNetwork(network)}
									key={network.name}
									className={`fn-token-item ${
										network.symbol === selectedNetwork.symbol ? 'active' : ''
									}`}
								>
									<span className="short-hand">{network.icon} - </span>
									<span className="name">{network.name}</span>
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</Form.Group>
			</div>

			<Form.Group className="address-wrapper">
				<Form.Label>Your USDT deposit address</Form.Label>
				<InputGroup >
					<Form.Control placeholder="Your Address" />
					<InputGroup.Text id="basic-addon2">
						<img src="images/icons/copy.svg" alt="" />
					</InputGroup.Text>
				</InputGroup>
			</Form.Group>

			<div className="qr-wrapper">
				<img src="./images/icons/qr.svg" alt="" />
			</div>

			<div className="fn-deposit-footer">
				<FnButton
					width="169px"
					height="35px"
					variant="primary"
					text="confirm"
					onClick={() => {}}
				/>
			</div>
    </div>
  )
}

export default Deposit;
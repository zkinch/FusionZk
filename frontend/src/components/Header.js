import React from "react";
import Eth from "../eth.svg";
import { Link } from "react-router-dom";
const { generateWallet } = require('./WalletRailGun.ts');

function Header(props) {
  //retrieve the wallet information


  const {address, isConnected, connect } = props;

  return (
    <header>
      <div className="leftH">
        {/* <img src="1inch_bw_black_valt.png" alt="1inch" className="oneInch" />
        <img src="Railgun.png" alt="railgun" className="railgun" /> */}

        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Polygon
        </div>
        <div>
  <div className="privateButton" onClick={connect}>
    {isConnected ? (
      <span className="privateButtonText">Public: {address.slice(0, 4)}...</span>
    ) : (
      "Connect"
    )}
  </div>
  <div className="publicButton" onClick={connect}>
    {isConnected ? (
      <span className="publicButtonText">Private: {address.slice(38)}</span>
    ) : (
      "Connect"
    )}
  </div>
</div>
      </div>
    </header>
  );
}
export default Header;

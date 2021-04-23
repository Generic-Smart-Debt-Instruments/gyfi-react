import Header from '../common/Header.js';
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Links</h2>
          <ul>
            <li>
              GYFI Token Sales: <NavLink to="/sale">/#/sale</NavLink>
            </li>
            <li>
              Whitepapers:{" "}
              <a target="_blank" rel="noreferrer" href="https://whitepaper.gyfi.eth.link">
                whitepaper.gyfi.eth
              </a>
            </li>
            <li>
              Telegram Chat:{" "}
              <a target="_blank" rel="noreferrer" href="https://t.me/GSDIofficial">
                t.me/GSDIofficial
              </a>
            </li>
            <li>
              Telegram Ann:{" "}
              <a target="_blank" rel="noreferrer" href="https://t.me/GSDIAnnouncement">
                t.me/GSDIAnnouncement
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a target="_blank" rel="noreferrer" href="https://twitter.com/GsdiOfficial">
                twitter.com/GsdiOfficial
              </a>
            </li>
            <li>
              Medium:{" "}
              <a target="_blank" rel="noreferrer" href="https://gsdiofficial.medium.com/">
                gsdiofficial.medium.com
              </a>
            </li>
            <li>
              Discord:{" "}
              <a target="_blank" rel="noreferrer" href="https://discord.gg/yG7SDGVGzP">
                discord.gg/yG7SDGVGzP
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>About</h2>
          <p>
            <b>GSDI</b> - Generic Smart Debt Instruments are collateralized debt
            backed by smart wallets. Each GSDI is an ERC721 NFT with a unique
            borrower, price, face value, and maturity.
            <br />
            Article:{" "}
            <a target="_blank" rel="noreferrer" href="https://gsdiofficial.medium.com/benefits-of-generic-smart-debt-instruments-901314a6fe5">
              Benefits of GSDI
            </a>
          </p>
          <p>
            <b>GYFI</b> - GSDI Yield Farming Token is the governance and protocol
            ERC20 token for the GSDI ecosystem. Rewards for ecosystem participants
            are issued in GYFI.
          </p>
          <p>
            <b>GAUC</b> - GSDI Auction is the first dapp to be build on GSDI. It
            allows the auction of proposed ERC20/721 collateralized bonds.
          </p>
          <p>
            <b>GSDI Pools</b> - GSDI Pools allow lenders to deposit Dai into
            strategies which purchase GSDI to earn interest. Any developer may
            deploy new pools and strategies.
          </p>
        </section>
        <section>
          <h2>Team</h2>
          <p>We believe in the vision of an open internet where anyone can be anything. Our team is primarily anonymous and operates entirely under psuedonyms. All our members have years of experience building a variety of applications on blockchains.</p>
          <ul>
            <li><b>Crypto Shipwright</b> has consulted for various major defi products and is the technical lead.</li>
            <li><b>Devneser</b> developed defi and trading platforms with options and develops solidity plus react.</li>
            <li><b>JKP</b> built several defi and nft products on Ethereum and writes contracts and react dapps.</li>
            <li><b>BigBronson</b> promoted several successful blockchain projects and educates the public on defi.</li>
            <li><b>RADEON</b> grew multiple defi communities from infancy and provides social media management.</li>
            <li><b>Ambulance</b> designed corporate campaigns and creatively generates effective graphics.</li>
          </ul>
        </section>
        <section>
          <h2>Legal Notices</h2>
          <h3>Jurisdiction Limitations</h3>
          <p>USA Citizens, residents, affiliates, agents, or anyone else who may be under the jurisdiction of the U.S. SEC are not permitted to use GSDI, GYFI, GAUC, GSDI Pools, or this website. If you are in the USA, please leave this site immediately as you are putting the whole community at risk!</p>
          <h3>Disclaimer</h3>
          <p>This is new Defi tech, use at your own risk! GSDI, GYFI, GAUC, GSDI Pools, this website, and any other technology related to GSDI is provided to you "as-is" with no promises of future upgrades, current support, or any other promises by anyone including the devs. GSDI is a community-run project so if there's a feature you want, join the discussion and contribute your skills.</p>
        </section>
      </main>
    </>
  );
}

export default Home;

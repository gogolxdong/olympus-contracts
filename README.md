# Ω Olympus Smart Contracts

<<<<<<< HEAD

##  🔧 Setting up Local Development
Required: 
- [Node v14](https://nodejs.org/download/release/latest-v14.x/)  
- [Git](https://git-scm.com/downloads)


Local Setup Steps:
1. git clone https://github.com/OlympusDAO/olympus-contracts.git 
1. Install dependencies: `npm install` 
    - Installs [Hardhat](https://hardhat.org/getting-started/) & [OpenZepplin](https://docs.openzeppelin.com/contracts/4.x/) dependencies
1. Compile Solidity: `npm run compile`
1. **_TODO_**: How to do local deployments of the contracts.


## 🤨 How it all works
![High Level Contract Interactions](./docs/box-diagram.png)

## Mainnet Contracts & Addresses

|Contract       | Addresss                                                                                                            | Notes   |
|:-------------:|:-------------------------------------------------------------------------------------------------------------------:|-------|
|OHM            |[0x383518188c0c6d7730d91b2c03a03c837814a899](https://etherscan.io/address/0x383518188c0c6d7730d91b2c03a03c837814a899)| Main Token Contract|
|sOHM           |[0x31932e6e45012476ba3a3a4953cba62aee77fbbe](https://etherscan.io/address/0x31932e6e45012476ba3a3a4953cba62aee77fbbe)| Staked Ohm|
|Treasury       |[0x31F8Cc382c9898b273eff4e0b7626a6987C846E8](https://etherscan.io/address/0x31F8Cc382c9898b273eff4e0b7626a6987C846E8)| Olympus Treasury holds all the assets        |
|OlympusStaking |[0xfd31c7d00ca47653c6ce64af53c1571f9c36566a](https://etherscan.io/address/0xfd31c7d00ca47653c6ce64af53c1571f9c36566a)| Main Staking contract responsible for calling rebases every 2200 blocks|
|StakingHelper  |[0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d](https://etherscan.io/address/0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d)| Helper Contract to Stake with 0 warmup |
|Aave Allocator |[0x0e1177e47151Be72e5992E0975000E73Ab5fd9D4](https://etherscan.io/address/0x0e1177e47151Be72e5992E0975000E73Ab5fd9D4)| Sends DAI from the treasury to Aave (via deposit) in exchange for aDAI and holds it. See [Allocator Guide](#allocator-guide)|
|Convex Allocator |[0x3dF5A355457dB3A4B5C744B8623A7721BF56dF78](https://etherscan.io/address/0x3dF5A355457dB3A4B5C744B8623A7721BF56dF78)| Sends FRAX from the treasury to Convex and accumulates trading fees, CRV and CVX. See [Allocator Guide](#allocator-guide)|
|Onsen Allocator |[0x0316508a1b5abf1CAe42912Dc2C8B9774b682fFC](https://etherscan.io/address/0x0316508a1b5abf1CAe42912Dc2C8B9774b682fFC)| Sends OHM-DAI SLP from the treasury to the Sushi Onsen pool, accumulating SUSHI and xSUSHI. See [Allocator Guide](#allocator-guide)|
|DAO            |[0x245cc372C84B3645Bf0Ffe6538620B04a217988B](https://etherscan.io/address/0x245cc372C84B3645Bf0Ffe6538620B04a217988B)|Storage Wallet for DAO under MS |
|Staking Warm Up|[0x2882A5CD82AC49e06620382660f5ed932607c5f1](https://etherscan.io/address/0x2882A5CD82AC49e06620382660f5ed932607c5f1)| Instructs the Staking contract when a user can claim sOHM |


**Bonds**
- **_TODO_**: What are the requirements for creating a Bond Contract?
All LP bonds use the Bonding Calculator contract which is used to compute RFV. 

|Contract       | Addresss                                                                                                            | Notes   |
|:-------------:|:-------------------------------------------------------------------------------------------------------------------:|-------|
|Bond Calculator|[0xcaaA6a2d4B26067a391E7B7D65C16bb2d5FA571A](https://etherscan.io/address/0xcaaA6a2d4B26067a391E7B7D65C16bb2d5FA571A)| |
|DAI bond|[0x575409F8d77c12B05feD8B455815f0e54797381c](https://etherscan.io/address/0x575409F8d77c12B05feD8B455815f0e54797381c)| Main bond managing serve mechanics for OHM/DAI|
|DAI/OHM SLP Bond|[0x956c43998316b6a2F21f89a1539f73fB5B78c151](https://etherscan.io/address/0x956c43998316b6a2F21f89a1539f73fB5B78c151)| Manages mechhanism for thhe protocol to buy baack its own liquidity from the pair. |
|FRAX Bond|[0x8510c8c2B6891E04864fa196693D44E6B6ec2514](https://etherscan.io/address/0x8510c8c2B6891E04864fa196693D44E6B6ec2514)|Similar to DAI bond but using FRAX|
|FRAX/OHM SLP Bond|[0xc20CffF07076858a7e642E396180EC390E5A02f7](https://etherscan.io/address/0xc20CffF07076858a7e642E396180EC390E5A02f7)| Similar to DAI/OHM but using FRAX |

**OLD Contracts**:

- sOHM: 0x31932e6e45012476ba3a3a4953cba62aee77fbbe 
- Vault: 0x886ce997aa9ee4f8c2282e182ab72a705762399d 
- Staking (v1): 0x0822f3c03dcc24d200aff33493dc08d0e1f274a2


### Testnet Addresses

Network: `Rinkeby` (4)
- OHM: `0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932`
- DAI: `0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C` 
- Frax: `0x2F7249cb599139e560f0c81c269Ab9b04799E453`
- Treasury: `0x0d722D813601E48b7DAcb2DF9bae282cFd98c6E7`
- OHM/DAI Pair: `0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2`
- OHM/Frax Pair: `0x11BE404d7853BDE29A3e73237c952EcDCbBA031E`
- Calc: `0xaDBE4FA3c2fcf36412D618AfCfC519C869400CEB` 
- Staking: `0xC5d3318C0d74a72cD7C55bdf844e24516796BaB2` 
- sOHM: `0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084` 
- Distributor `0x0626D5aD2a230E05Fb94DF035Abbd97F2f839C3a` 
- Staking Warmup `0x43B18Ad2624DBEf474aA8E0c8d8404a0A42b7aC4` 
- Staking Helper `0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1`

=======
## 🔧 Setting up local development

Requirements:

-   [Node v14](https://nodejs.org/download/release/latest-v14.x/)
-   [Git](https://git-scm.com/downloads)

Local Setup Steps:

1. `git clone https://github.com/OlympusDAO/olympus-contracts.git`
1. Install dependencies: `yarn install`
    - Installs [Hardhat](https://hardhat.org/getting-started/) and [OpenZepplin](https://docs.openzeppelin.com/contracts/4.x/) dependencies
1. Set up keys. Use the `.env.example` file as a base and populate API keys.
1. Compile Solidity: `yarn run compile`
1. Compile types: `yarn run typechain`
1. Run a local Hardhat node: `yarn run start`
1. Compile and deploy the contracts (in another terminal): `yarn run deploy:hardhat` --> not needed?

A Docker image is available to reduce the steps and variables.

Local Setup Steps (with Docker):

1. Set up keys. Use the `.env.example` file as a base and populate API keys: `ALCHEMY_API_KEY` and `PRIVATE_KEY`
1. Start the node: `make run`

## 🤨 How it all works

![High Level Contract Interactions](./docs/box-diagram.png)

## Contract addresses

### Mainnet

#### Core

-   OHM V2: `0x64aa3364F17a4D01c6f1751Fd97C2BD3D7e7f1D5`
-   sOHM V2: `0x04906695D6D12CF5459975d7C3C03356E4Ccd460`
-   gOHM: `0x0ab87046fBb341D058F17CBC4c1133F25a20a52f`
-   Treasury V2: `0x9A315BdF513367C0377FB36545857d12e85813Ef`
-   Staking: `0xB63cac384247597756545b500253ff8E607a8020`
-   Distributor: `0xeeeb97A127a342656191E0313DF33D58D06B2E05`
-   BondDepositoryV2: `0x9025046c6fb25Fb39e720d97a8FD881ED69a1Ef6`
-   Authority: `0x1c21F8EA7e39E2BA00BC12d2968D63F4acb38b7A`

#### Multisigs

-   DAO: `0x245cc372C84B3645Bf0Ffe6538620B04a217988B`
-   Policy: `0x0cf30dc0d48604A301dF8010cdc028C055336b2E`

### Testnet addresses

Network: `Rinkeby`

-   OHM: `0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932`
-   DAI: `0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C`
-   Frax: `0x2F7249cb599139e560f0c81c269Ab9b04799E453`
-   Treasury: `0x0d722D813601E48b7DAcb2DF9bae282cFd98c6E7`
-   OHM/DAI Pair: `0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2`
-   OHM/Frax Pair: `0x11BE404d7853BDE29A3e73237c952EcDCbBA031E`
-   Calc: `0xaDBE4FA3c2fcf36412D618AfCfC519C869400CEB`
-   Staking: `0xC5d3318C0d74a72cD7C55bdf844e24516796BaB2`
-   sOHM: `0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084`
-   Distributor `0x0626D5aD2a230E05Fb94DF035Abbd97F2f839C3a`
-   Staking Warmup `0x43B18Ad2624DBEf474aA8E0c8d8404a0A42b7aC4`
-   Staking Helper `0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1`

Network: `Localhost`

-   The `deployments/localhost` directory is included in the git repository,
    so that the contract addresses remain constant. Otherwise, the frontend's
    `constants.ts` file would need to be updated.
-   Avoid committing changes to the `deployments/localhost` files (unless you
    are sure), as this will alter the state of the hardhat node when deployed
    in tests.
>>>>>>> 0646cc499d7af8a135f9bf6c653e2c62299f52a1

## Allocator Guide

The following is a guide for interacting with the treasury as a reserve allocator.

A reserve allocator is a contract that deploys funds into external strategies, such as Aave, Curve, etc.

Treasury Address: `0x31F8Cc382c9898b273eff4e0b7626a6987C846E8`

<<<<<<< HEAD
**Managing**:
The first step is withdraw funds from the treasury via the "manage" function. "Manage" allows an approved address to withdraw excess reserves from the treasury.

*Note*: This contract must have the "reserve manager" permission, and that withdrawn reserves decrease the treasury's ability to mint new OHM (since backing has been removed).

Pass in the token address and the amount to manage. The token will be sent to the contract calling the function.

```
function manage( address _token, uint _amount ) external;
```

Managing treasury assets should look something like this:
```
treasury.manage( DAI, amountToManage );
```

**Returning**:
The second step is to return funds after the strategy has been closed.
We utilize the `deposit` function to do this. Deposit allows an approved contract to deposit reserve assets into the treasury, and mint OHM against them. In this case however, we will NOT mint any OHM. This will be explained shortly.

*Note* The contract must have the "reserve depositor" permission, and that deposited reserves increase the treasury's ability to mint new OHM (since backing has been added).


Pass in the address sending the funds (most likely the allocator contract), the amount to deposit, and the address of the token. The final parameter, profit, dictates how much OHM to send. send_, the amount of OHM to send, equals the value of amount minus profit.
```
function deposit( address _from, uint _amount, address _token, uint _profit ) external returns ( uint send_ );
=======
### Managing

The first step is withdraw funds from the treasury via the "manage" function. "Manage" allows an approved address to withdraw excess reserves from the treasury.

**NOTE**: This contract must have the "reserve manager" permission, and that withdrawn reserves decrease the treasury's ability to mint new OHM (since backing has been removed).

Pass in the token address and the amount to manage. The token will be sent to the contract calling the function.

```solidity
function manage(address _token, uint256 _amount) external;

```

Managing treasury assets should look something like this:

```solidity
treasury.manage( DAI, amountToManage );
```

### Returning

The second step is to return funds after the strategy has been closed.
We utilize the `deposit` function to do this. Deposit allows an approved contract to deposit reserve assets into the treasury, and mint OHM against them. In this case however, we will NOT mint any OHM. This will be explained shortly.

**NOTE**: The contract must have the "reserve depositor" permission, and that deposited reserves increase the treasury's ability to mint new OHM (since backing has been added).

Pass in the address sending the funds (most likely the allocator contract), the amount to deposit, and the address of the token. The final parameter, profit, dictates how much OHM to send. send\_, the amount of OHM to send, equals the value of amount minus profit.

```solidity
function deposit(
    address _from,
    uint256 _amount,
    address _token,
    uint256 _profit
) external returns (uint256 send_);

>>>>>>> 0646cc499d7af8a135f9bf6c653e2c62299f52a1
```

To ensure no OHM is minted, we first get the value of the asset, and pass that in as profit.
Pass in the token address and amount to get the treasury value.
<<<<<<< HEAD
```
function valueOf( address _token, uint _amount ) public view returns ( uint value_ );
```

All together, returning funds should look something like this:
```
treasury.deposit( address(this), amountToReturn, DAI, treasury.valueOf( DAI, amountToReturn ) );
```
=======

```solidity
function valueOf(address _token, uint256 _amount) public view returns (uint256 value_);

```

All together, returning funds should look something like this:

```solidity
treasury.deposit( address(this), amountToReturn, DAI, treasury.valueOf( DAI, amountToReturn ) );
```

## Dapptools testing

1. Install dapptools (see [here](https://github.com/dapphub/dapptools))
2. Pull the contract dependencies: `git submodule update --init --recursive`
3. Run `dapp test`
>>>>>>> 0646cc499d7af8a135f9bf6c653e2c62299f52a1

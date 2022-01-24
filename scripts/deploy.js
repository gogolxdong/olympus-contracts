const { ContractFactory } = require("ethers");
const { ethers } = require("hardhat");

async function main() {

    const [deployer, MockDAO] = await ethers.getSigners();
    console.log('Deploying contracts with the account: ' + deployer.address);

    // Initial staking index
    const initialIndex = '7675210820';

    // First block epoch occurs
    const firstEpochBlock = '15995152';

    // What epoch will be first epoch
    const firstEpochNumber = '0';

    // How many blocks are in each epoch
    const epochLengthInBlocks = '28800';

    // Initial reward rate for epoch
    const initialRewardRate = '3000';

    // Ethereum 0 address, used when toggling changes in treasury
    const zeroAddress = '0x0000000000000000000000000000000000000000';

    // Large number for approval for Frax and DAI
    const largeApproval = '100000000000000000000000000000000';

    // Initial mint for Frax and DAI (10,000,000)
    const initialMint = '10000000000000000000000000';

    // DAI bond BCV
    const daiBondBCV = '369';

    // Frax bond BCV
    const fraxBondBCV = '690';

    const bondVestingLength = '432000';

    // Min bond price
    const minBondPrice = '300';

    // Max bond payout
    const maxBondPayout = '50'

    // DAO fee for bond
    const bondFee = '10000';

    // Max debt bond can take on
    const maxBondDebt = '1000000000000000';

    // Initial Bond debt
    const intialBondDebt = '0'

    var router = { address: "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3" }
    var factory = { address: "0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc" }
    router = await ethers.getContractAt('PancakeRouter', router.address);
    factory = await ethers.getContractAt('PancakeFactory', factory.address);

    var ohm = { address: "0x3E921a39b4D224596E4a130be690Da3c85bcF861" }
    var dai = { address: "0xa76cfDbEdF7883428B0e847AC354DeBA21B58CfC" }
    var test = { address: "0x78DBd0C53487248d6b62B7543a74d88a757CF37B" }
    var treasury = { address: "0x87e4E6655AE0A7a1F576E96Cd844620b77aDD5e8" }
    var olympusBondingCalculator = { address: "0xF4d46fAc3ad21B9F11427f169b939B366Ddfba6f" }
    var distributor = { address: "0x6e540b04BFa462B290C1d66cd403BB3118F35823" }
    var sOHM = { address: "0x1af5a01Ec47D3092Bd63f5Ef8b5a0b6376245E94" }
    var staking = { address: "0xa483923988B8283DE9e00b34db92bC5B018C7b57" }
    var stakingWarmup = { address: "0xeA8a261b2A8B9edb645881659039de0Ac997e20d" }
    var stakingHelper = { address: "0x5E91CDe2040cAaC04292359c5cee25451d42AF4a" }
    var daiBond = { address: "0xd347e8F4645294E5F16231a5a79d96dA5dFfd6Ba" }

    async function deploy() {
        // const OHM = await ethers.getContractFactory('OlympusERC20Token');
        // ohm = await OHM.deploy();
        // console.log('ohm= {address:"', ohm.address, '"}');

        // const DAI = await ethers.getContractFactory('DAI');
        // dai = await DAI.deploy(0);
        // await dai.mint(deployer.address, initialMint);
        // console.log('dai= {address:"', dai.address, '"}');

        // const SOHM = await ethers.getContractFactory('sOlympus');
        // sOHM = await SOHM.deploy();
        // console.log('sOHM= {address:"', sOHM.address, '"}');

        // var test = await ethers.getContractFactory('Test');
        // test = await test.deploy(200, 200);
        // console.log('test= {address:"' + test.address + '"}');

        // var createPair = await factory.createPair(dai.address, ohm.address)
        // await createPair.wait()
        // var ohmdaiPair = await factory.getPair(dai.address, ohm.address)
        // console.log("ohmdaiPair:", ohmdaiPair);

        // const Treasury = await ethers.getContractFactory('MockOlympusTreasury');
        // treasury = await Treasury.deploy(ohm.address, dai.address, ohmdaiPair, 0);
        // console.log('treasury= {address:"' + treasury.address + '"}');

        // const OlympusBondingCalculator = await ethers.getContractFactory('OlympusBondingCalculator');
        // olympusBondingCalculator = await OlympusBondingCalculator.deploy(ohm.address);
        // console.log('olympusBondingCalculator= {address:"', olympusBondingCalculator.address, '"}');

        // const Distributor = await ethers.getContractFactory('Distributor');
        // distributor = await Distributor.deploy(treasury.address, ohm.address, epochLengthInBlocks, firstEpochBlock);
        // console.log('distributor= {address:"'+ distributor.address+ '"}');

        // const Staking = await ethers.getContractFactory('OlympusStaking');
        // staking = await Staking.deploy(ohm.address, sOHM.address, epochLengthInBlocks, firstEpochNumber, firstEpochBlock);
        // console.log('staking= {address:"', staking.address, '"}');

        // const StakingWarmpup = await ethers.getContractFactory('StakingWarmup');
        // stakingWarmup = await StakingWarmpup.deploy(staking.address, sOHM.address);
        // console.log('stakingWarmup= {address:"', stakingWarmup.address, '"}');

        // const StakingHelper = await ethers.getContractFactory('StakingHelper');
        // stakingHelper = await StakingHelper.deploy(staking.address, ohm.address);
        // console.log('stakingHelper = {address:"', stakingHelper.address, '"}');

        // const DAIBond = await ethers.getContractFactory('MockOlympusBondDepository');
        // daiBond = await DAIBond.deploy(ohm.address, dai.address, treasury.address, deployer.address, zeroAddress);
        // console.log('daiBond = {address:"' + daiBond.address +'"}');

        daiBond.setaddressReferral(test.address);
        console.log('setaddressReferral');

        // treasury = await ethers.getContractAt('MockOlympusTreasury', treasury.address);
        // dai = await hre.ethers.getContractAt('OlympusERC20Token', dai.address);
    }

    async function getContracts() {
        test = await ethers.getContractAt('Test', test.address);
        ohm = await ethers.getContractAt('OlympusERC20Token', ohm.address);
        dai = await hre.ethers.getContractAt('OlympusERC20Token', dai.address);
        treasury = await ethers.getContractAt('MockOlympusTreasury', treasury.address);
        olympusBondingCalculator = await ethers.getContractAt('OlympusBondingCalculator', olympusBondingCalculator.address);
        distributor = await ethers.getContractAt('Distributor', distributor.address);
        sOHM = await ethers.getContractAt('sOlympus', sOHM.address);
        staking = await ethers.getContractAt('OlympusStaking', staking.address);
        stakingWarmup = await ethers.getContractAt('StakingWarmup', stakingWarmup.address);
        stakingHelper = await ethers.getContractAt('StakingHelper', stakingHelper.address);
        daiBond = await ethers.getContractAt('MockOlympusBondDepository', daiBond.address);
    }

    async function deployTest() {
        var test = await ethers.getContractFactory('Test');
        test = await test.deploy(200, 200);
        console.log('test= {address:"' + test.address + '"}');

        daiBond = await ethers.getContractAt('MockOlympusBondDepository', daiBond.address);
        daiBond.setaddressReferral(test.address);
        console.log('setaddressReferral');

        
    }


    async function deployBond() {
        const DAIBond = await ethers.getContractFactory('MockOlympusBondDepository');
        daiBond = await DAIBond.deploy(ohm.address, dai.address, treasury.address, deployer.address, zeroAddress);
        console.log('daiBond = {address:"' + daiBond.address + '"}');

        daiBond.setaddressReferral(test.address);
        console.log('setaddressReferral');

        treasury = await ethers.getContractAt('MockOlympusTreasury', treasury.address);

        var receipt = await treasury.queue('0', daiBond.address);
        await receipt.wait()
        console.log("treasury.queue")

        await treasury.toggle('0', daiBond.address, zeroAddress);
        console.log("treasury.toggle")

        await daiBond.initializeBondTerms(daiBondBCV, bondVestingLength, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt);

        await daiBond.setStaking(staking.address, stakingHelper.address);
        console.log("daiBond.setStaking");

        dai = await hre.ethers.getContractAt('OlympusERC20Token', dai.address);
        await dai.approve(daiBond.address, largeApproval);

        await daiBond.deposit('1000000000000000000', '60000', deployer.address);
        console.log("daiBond.deposit")
    }
    // await deploy();

    await deployTest();
    // await deployBond();

    // await getContracts();

    // var totalProfit = await test.totalProfit(deployer.address);
    // console.log("totalProfit:",totalProfit.toNumber());
    // var receipt = await treasury.queue('0', daiBond.address);
    // await receipt.wait()
    // console.log("treasury.queue")

    // await treasury.toggle('0', daiBond.address, zeroAddress);
    // console.log("treasury.toggle")

    // await daiBond.initializeBondTerms(daiBondBCV, bondVestingLength, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt);

    // await daiBond.setStaking(staking.address, stakingHelper.address);
    // console.log("daiBond.setStaking")

    // await sOHM.initialize(staking.address);
    // console.log("sOHM.initialize")

    // await sOHM.setIndex(initialIndex);
    // console.log("sOHM.setIndex")

    // await staking.setContract('0', distributor.address);
    // console.log("staking.setContract")

    // await staking.setContract('1', stakingWarmup.address);
    // console.log("staking.setContract")

    // await ohm.setVault(treasury.address);
    // console.log("ohm.setVault")

    // await distributor.addRecipient(staking.address, initialRewardRate);
    // console.log("distributor.addRecipient")

    // await treasury.queue('8', distributor.address);
    // await treasury.queue('0', deployer.address);
    // await treasury.queue('4', deployer.address,);
    // console.log("treasury.queue")

    // await treasury.toggle('8', distributor.address, zeroAddress);
    // await treasury.toggle('0', deployer.address, zeroAddress);
    // await treasury.toggle('4', deployer.address, zeroAddress);
    // console.log("treasury.toggle")

    // await dai.approve(treasury.address, largeApproval);
    // await dai.approve(daiBond.address, largeApproval);
    // console.log("dai.approve")

    // await ohm.approve(staking.address, largeApproval);
    // await ohm.approve(stakingHelper.address, largeApproval);

    // await treasury.deposit('9000000000000000000000000', dai.address, '8400000000000000');
    // console.log("treasury.deposit")

    // await stakingHelper.stake('100000000000');
    // console.log("stakingHelper.stake")

    // await dai.approve(router.address, largeApproval);
    // await ohm.approve(router.address, largeApproval);

    // var now = Math.round(Date.now() / 1000) + 30
    // var bAmount = ethers.utils.parseEther("400")
    // console.log("amount:", bAmount);
    // var tx = await router.addLiquidity(ohm.address, dai.address, 100000000000,bAmount , 100000000000, bAmount, deployer.address, now)
    // console.log("tx:", tx)

    // await daiBond.deposit('1000000000000000000', '60000', deployer.address);
    // console.log("daiBond.deposit")
}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
    })

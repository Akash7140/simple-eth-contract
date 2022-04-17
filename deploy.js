// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'message neck physical torch night loan good thunder cradle suffer echo camera',
    'https://rinkeby.infura.io/v3/b29f04a8295b49cd8e6ee029db887e63'
)

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('deploying from ', accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ["Hi there!"],
        })
        .send({ from: accounts[0], gas: "1000000" });

    console.log('Contract deployed to ', result.options.address);
    provider.engine.stop();
}
deploy();
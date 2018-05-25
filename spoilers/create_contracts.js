const contractAddress = "";

function createContracts() {
  return new Promise((res, rej) => {
    var Contract = web3.eth.contract(contractAbi);
    contractInstance = Contract.at(contractAddress);
    contractInstance.method((err, result) => {
        if (err) console.log(err);
        // use result
      }
    });
  })
}
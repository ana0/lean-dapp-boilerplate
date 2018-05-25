function getTransactionReceiptMined(txHash) {
  function transactionReceiptAsync(resolve, reject) {
    web3.eth.getTransactionReceipt(txHash, (error, receipt) => {
      if (error) {
        reject(error);
      } else if (receipt == null) {
        setTimeout(
          () => transactionReceiptAsync(resolve, reject),
        500);
      } else {
        resolve(receipt);
      }
    });
  };
  return new Promise(transactionReceiptAsync)
    .then(() => alert(`${txHash} is mined!`))
    .catch((err) => console.log(err))
};
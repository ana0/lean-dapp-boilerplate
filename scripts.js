detectMetaMask();

function detectMetaMask() {
  window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
      window.web3 = new Web3(web3.currentProvider);
    } else {
      alert("You must have a metamask installed!");
    }
  })
}
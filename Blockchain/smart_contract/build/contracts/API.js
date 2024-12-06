// Check if MetaMask is installed
if (window.ethereum) {
  const ethereum = window.ethereum;

  // Request account access
  ethereum.request({ method: 'eth_requestAccounts' })
    .then(accounts => {
      const account = accounts[0];
      
      // Construct a transaction object
      const transaction = {
        from: '0xb029c6C8d59B63251BAb45b446B42e5da91a21Ab',
        to: '0x59Fba1FD66f8beE7ACd7a9A3Eb0EEeDD53b9b71e',
        value: '0.01',
        gas: '0x6691b7',
        gasPrice: '2.78449967 gwei',
        data: '0xOptionalTransactionData',
      };

      // Request transaction signature
      ethereum.request({ method: 'eth_sendTransaction', params: [transaction] })
        .then(txHash => {
          console.log('Transaction sent:', txHash);
          // Handle transaction confirmation
        })
        .catch(error => {
          console.error('Transaction error:', error);
          // Handle transaction error
        });
    })
    .catch(error => {
      console.error('Account access error:', error);
      // Handle account access error
    });
} else {
  console.error('MetaMask is not installed');
  // Handle MetaMask not installed
}

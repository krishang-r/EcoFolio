import { ethers } from "ethers";

// Replace with your deployed contract details
const CONTRACT_ADDRESS = "0xYourCarbonCoinContractAddress";
const CONTRACT_ABI = [
  // Add your contract's ABI here (copy from Hardhat/Remix after deployment)
];

// Extend window to recognize MetaMask's ethereum object
declare global {
  interface Window {
    ethereum?: any;
  }
}

// Get the Ethereum contract instance
const getEthereumContract = async () => {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return null;
  }

  const provider = new ethers.BrowserProvider(window.ethereum as any);
  const signer = await provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
};

// Connect Wallet
export const connectWallet = async () => {
  try {
    if (!window.ethereum) throw new Error("MetaMask not found");
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    return accounts[0]; // Return connected wallet address
  } catch (error) {
    console.error("Wallet connection failed:", error);
  }
};

// Get Balance
export const getBalance = async (account: string) => {
  try {
    const contract = await getEthereumContract();
    if (contract) {
      const balance = await contract.balanceOf(account);
      return ethers.formatEther(balance); // Convert from Wei to CNC
    }
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};

// Send CarbonCoin
export const sendTokens = async (recipient: string, amount: string) => {
  try {
    const contract = await getEthereumContract();
    if (contract) {
      const amountInWei = ethers.parseEther(amount);
      const tx = await contract.transfer(recipient, amountInWei);
      await tx.wait();
      alert(`Sent ${amount} CNC to ${recipient}`);
    }
  } catch (error) {
    console.error("Transaction failed:", error);
  }
};

// Burn CarbonCoin (from sender's balance)
export const burnTokens = async (amount: string) => {
  try {
    const contract = await getEthereumContract();
    if (contract) {
      const amountInWei = ethers.parseEther(amount);
      const tx = await contract.burn(amountInWei);
      await tx.wait();
      alert(`Burned ${amount} CNC`);
    }
  } catch (error) {
    console.error("Burn failed:", error);
  }
};

// Burn CarbonCoin from any account (onlyOwner)
export const burnFromAccount = async (account: string, amount: string) => {
  try {
    const contract = await getEthereumContract();
    if (contract) {
      const amountInWei = ethers.parseEther(amount);
      const tx = await contract.burnFrom(account, amountInWei);
      await tx.wait();
      alert(`Burned ${amount} CNC from ${account}`);
    }
  } catch (error) {
    console.error("BurnFrom failed:", error);
  }
};

// Fetch Transaction History from Etherscan API
export const fetchTransactions = async (account: string, apiKey: string) => {
  try {
    const url = `https://api.etherscan.io/api?module=account&action=tokentx&address=${account}&contractaddress=${CONTRACT_ADDRESS}&apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.result; // Return transaction list
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
};

// Listen for Transfer Events in Real-Time
export const listenForTransfers = async () => {
  const contract = await getEthereumContract();
  if (contract) {
    contract.on("Transfer", (from, to, amount, event) => {
      console.log(`New transaction: ${from} → ${to}: ${ethers.formatEther(amount)} CNC`);
    });
  }
};

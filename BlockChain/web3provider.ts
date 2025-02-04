import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xYourContractAddressHere"; // Replace with your deployed contract address
const CONTRACT_ABI = [ /* ABI goes here */ ];

declare global {
    interface Window {
      ethereum?: any; // Allow TypeScript to recognize MetaMask's ethereum object
    }
  }
  

export const getEthereumContract = () => {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner(); 
        return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    } else {
        console.error("Ethereum object not found, install MetaMask.");
        return null;
    }
};

export const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            return accounts[0]; // Return connected account
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    } else {
        alert("Please install MetaMask!");
    }
};

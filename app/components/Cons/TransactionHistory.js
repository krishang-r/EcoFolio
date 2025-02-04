"use client";
import { useState } from "react";
import { Button } from "../ui/Button";

const TransactionHistory = () => {
  // Sample transaction data
const transactions = [
    { date: "2025-04-15", cost: 450, coinsEarned: 45 },
    { date: "2025-04-01", cost: 400, coinsEarned: 40 },
    { date: "2025-03-15", cost: 350, coinsEarned: 35 },
    { date: "2025-03-01", cost: 300, coinsEarned: 30 },
    { date: "2025-02-15", cost: 250, coinsEarned: 25 },
    { date: "2025-02-01", cost: 150, coinsEarned: 15 },
    { date: "2025-01-15", cost: 200, coinsEarned: 20 },
    { date: "2025-01-01", cost: 100, coinsEarned: 10 }
];

  return (
    <div className="py-4 w-full">
      <h2 className="text-xl font-bold mb-4">Your Previous Transactions</h2>

      {/* Transaction History */}
      <div className="bg-green-900 text-white p-4 rounded-lg shadow-md w-full">
        <ul className="space-y-2">
          {transactions.map((transaction, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span className="text-sm text-white">{transaction.date}</span>
              <span className="text-sm text-white">${transaction.cost}</span>
              <span className="text-sm text-white">{transaction.coinsEarned} CBC</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;

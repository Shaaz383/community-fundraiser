import React from 'react';

const TotalFunds = ({ totalFunds, spentAmount }) => {
  const remainingAmount = totalFunds - spentAmount;

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-blue-200 p-4 rounded-md">
        <h2 className="text-xl font-bold mb-2">Total Funds</h2>
        <p className="text-lg">Total: ${totalFunds}</p>
        <p className="text-lg">Spent: ${spentAmount}</p>
        <p className="text-lg">Remaining: ${remainingAmount}</p>
      </div>
    </div>
  );
}

export default TotalFunds;

import React from 'react';

const Donation = () => {
  // Dummy data for the problem and donation list
  const problem = {
    imageUrl: 'https://via.placeholder.com/400',
    amountNeeded: 5000, // Amount needed to solve the problem
  };

  const donations = [
    { name: 'John Doe', amount: 100 },
    { name: 'Jane Smith', amount: 200 },
    { name: 'Michael Johnson', amount: 50 },
    { name: 'Emily Brown', amount: 300 },
    { name: 'David Wilson', amount: 150 },
  ];

  // Function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="container mx-auto py-8 px-16">
      <h1 className="text-3xl font-bold mb-4">Make a Donation</h1>
      {/* Problem Image and Amount Needed */}
      <section className="mb-8">
        <img src={problem.imageUrl} alt="Problem" className="mb-4 rounded-lg shadow-lg" />
        <p className="text-lg font-semibold">Amount Needed: {formatCurrency(problem.amountNeeded)}</p>
      </section>
      {/* Donate Button */}
      <section className="mb-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600">Donate Now</button>
      </section>
      {/* Donor List */}
      <section className='mb-16'>
        <h2 className="text-xl font-semibold mb-2">Donors</h2>
        <ul className="list-disc ml-6">
          {donations.map((donation, index) => (
            <li key={index} className="text-gray-700">{donation.name} - {formatCurrency(donation.amount)}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Donation;

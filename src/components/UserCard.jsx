import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <img src={user.photo} alt={user.name} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.mobile}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-red-600 font-semibold">Dues: ₹ {user.dues}</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md">Pay Now</button>
    </div>
  );
}

export default UserCard;

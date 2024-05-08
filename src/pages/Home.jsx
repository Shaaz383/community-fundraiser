import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Navbar from '../components/Navbar';
import TotalFunds from '../components/TotalFunds';
import UserCard from '../components/UserCard';
import Footer from '../components/Footer';

function App() {

  // Dummy user data
  const users = [
    {
      name: 'User 1',
      mobile: '+91 1234567890',
      email: 'user1@example.com',
      photo: 'https://via.placeholder.com/150',
      dues: 100,
    },
    {
      name: 'User 2',
      mobile: '+91 9876543210',
      email: 'user2@example.com',
      photo: 'https://via.placeholder.com/150',
      dues: 200,
    },
    {
      name: 'User 3',
      mobile: '+91 5555555555',
      email: 'user3@example.com',
      photo: 'https://via.placeholder.com/150',
      dues: 300,
    },
    {
      name: 'User 4',
      mobile: '+91 6666666666',
      email: 'user4@example.com',
      photo: 'https://via.placeholder.com/150',
      dues: 400,
    },
    {
      name: 'User 5',
      mobile: '+91 6666666666',
      email: 'user4@example.com',
      photo: 'https://via.placeholder.com/150',
      dues: 400,
    },
    {
      name: 'User 7',
      mobile: '+91 6666666666',
      email: 'user4@example.com',
      photo: 'https://via.placeholder.com/150',
      dues: 400,
    },
    {
      name: 'User 8',
      mobile: '+91 6666666666',
      email: 'user4@example.com',
      photo: 'https://via.placeholder.com/150',
      dues: 400,
    },
    {
      name: 'User 9',
      mobile: '+91 6666666666',
      email: 'user4@example.com',
      photo: 'https://via.placeholder.com/150',
      dues: 400,
    },
    {
      name: 'User 10',
      mobile: '+91 6666666666',
      email: 'user4@example.com',
      photo: 'https://via.placeholder.com/150',
      dues: 400,
    },
    {
      name: 'User 11',
      mobile: '+91 6666666666',
      email: 'user4@example.com',
      photo: 'https://via.placeholder.com/150',
      dues: 400,
    },
  ];


  return (
    <>
     
      <div className="flex flex-col min-h-screen">
       
        <TotalFunds />
        <div className="flex-grow overflow-y-auto p-4">
          <h1 className='text-center text-3xl my-4 font-semibold'>All Users</h1>
          <div className="container mx-auto flex flex-wrap justify-center px-4 py-10">
            {users.map((user, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
                <UserCard user={user} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    


    </>

    
  );
}

export default App;

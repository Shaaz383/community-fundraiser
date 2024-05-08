import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-auto fixed bottom-0 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-white mb-4 md:mb-0">© 2024 CommunityFundraiser. All rights reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-end">
          <a href="#" className="text-white mr-4">Privacy Policy</a>
          <a href="#" className="text-white mr-4">Terms of Service</a>
          <a href="#" className="text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

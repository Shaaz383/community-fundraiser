import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-8 px-16">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <p className="text-gray-700">
          Feel free to reach out to us for any inquiries or assistance. Here's how you can contact us:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Email: info@jodamasjidfundraiser.com</li>
          <li>Phone: +91 1234567890</li>
          <li>Address: Joda Masjid, Gaya, India</li>
        </ul>
      </section>
      {/* Contact Form */}
      <section className='mb-16 '>
        <h2 className="text-xl font-semibold mb-2">Send us a Message</h2>
        <form className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;

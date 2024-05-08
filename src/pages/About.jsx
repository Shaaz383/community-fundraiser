import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-12 md:px-16 px-8">
      <h1 className="text-3xl font-bold mb-4">About Our Fundraiser Community</h1>
      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700">
          At Joda Masjid Fundraiser Community, our mission is to foster a sense of unity and collaboration among the residents of the Joda Masjid locality. We aim to pool together our resources and efforts to address the pressing needs and challenges faced by our community.
        </p>
      </section>
      {/* Vision and Goals Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Vision and Goals</h2>
        <p className="text-gray-700">
          Our vision is to create a vibrant and thriving community where every member feels empowered and supported. To achieve this vision, we have set the following goals:
          <ul className="list-disc ml-6">
            <li>Enhance the infrastructure of our locality, including roads, sanitation facilities, and green spaces.</li>
            <li>Support educational initiatives to ensure every child in our community has access to quality education.</li>
            <li>Provide healthcare facilities and services to promote the well-being of all residents.</li>
            <li>Address social issues and support marginalized groups within our community.</li>
          </ul>
        </p>
      </section>
      {/* Membership Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Become a Member</h2>
        <p className="text-gray-700">
          Joining our community is simple! All residents of the Joda Masjid locality are welcome to become members. By contributing a nominal amount of 500 rupees per month, you can become an integral part of our efforts to bring positive change to our community.
        </p>
      </section>
      {/* Financial Transparency */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Financial Transparency</h2>
        <p className="text-gray-700">
          We believe in complete transparency when it comes to managing our funds. Every contribution is meticulously tracked and accounted for. Members have full access to financial reports and can participate in decision-making processes regarding fund allocation.
        </p>
      </section>
      {/* Donation Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Make a Donation</h2>
        <p className="text-gray-700">
          Your generous donations can make a significant impact on the lives of our community members. Whether it's contributing towards a specific project or supporting a family in need, every donation counts. Together, we can create a brighter future for Joda Masjid.
        </p>
      </section>
      {/* Testimonials or Success Stories */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-md">
            <p className="text-gray-700">
              "Being a member of the Joda Masjid Fundraiser Community has been an incredibly rewarding experience. I've witnessed firsthand the positive impact our collective efforts have had on our locality."
            </p>
            <p className="text-gray-600 mt-2">- Shaaz, Community Member</p>
          </div>
          <div className="p-4 border rounded-md">
            <p className="text-gray-700">
              "I'm proud to be part of a community that prioritizes the well-being and advancement of its residents. Together, we can achieve great things!"
            </p>
            <p className="text-gray-600 mt-2">- Shadab, Community Member</p>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className='mb-16'>
        <h2 className="text-xl font-semibold mb-2">Join Us Today</h2>
        <p className="text-gray-700 mb-4">
          Ready to make a difference? Join our community and contribute to the advancement of our locality.
        </p>
        {/* Add buttons or links for joining */}
      </section>
    </div>
  );
}

export default About;

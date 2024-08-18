import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
     

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Manage Your Content Seamlessly</h2>
          <p className="text-lg text-gray-700">A powerful and intuitive platform to create, manage, and publish content with ease.</p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Get Started
          </button>
        </section>

        <section id="features" className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-6">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Easy to Use</h4>
              <p className="text-gray-600">An intuitive interface designed for all skill levels.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Customizable</h4>
              <p className="text-gray-600">Personalize your site with themes and plugins.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">SEO Friendly</h4>
              <p className="text-gray-600">Optimize your content for search engines easily.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-6">Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Basic</h4>
              <p className="text-gray-600">$9.99/month</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Pro</h4>
              <p className="text-gray-600">$19.99/month</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">Enterprise</h4>
              <p className="text-gray-600">$49.99/month</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-6">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">"MyCMS has transformed the way we manage content. Highly recommend!"</p>
              <p className="mt-2 font-semibold">- John Doe</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">"A user-friendly platform with excellent support."</p>
              <p className="mt-2 font-semibold">- Jane Smith</p>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-lg text-gray-700">Have any questions? We'd love to hear from you.</p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Contact Us
          </button>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 MyCMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

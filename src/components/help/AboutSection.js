import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-700">
      <div className="container px-4 py-10 mx-auto relative text-white">
        <div className="card dark-card p-8 bg-gray-800">
          <h1 className="text-5xl text-center font-bold mb-4"><i className="fas fa-user-friends mr-4"></i> About</h1>
          <p className="text-2xl">Photo Caption Tool was created from the ground up with the user in mind. It was created to solve the common issue of inserting a caption in the easiest way possible. It is the quickest and easiest way to add a caption on desktop and mobile. Your photos are processed locally on your computer to keep what's yours, yours. This also allows you to work quickly while having maximum flexibility. And best of all, Photo Caption Tool is <strong>FREE!</strong></p>
          <div className="flex flex-col items-center">
            <h2 className="flex-shrink-0 text-xl md:text-4xl text-center mt-8 px-8 py-4 shadow-lg font-bold text-white rounded-lg gold inline-block mb-6">Thank you for creating with us!</h2>
            <h3 className="text-xl mb-6">If you find Photo Caption Tool useful, consider supporting the site with a donation <i className="fas fa-heart text-red-600 ml-1"></i></h3>
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=UPREMZJUGFCQU&currency_code=USD&source=url" target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center bg-yellow-500 text-gray-800 px-6 py-4 text-lg shadow-md rounded-full font-bold text-center"
            ><i className="fab fa-paypal text-2xl mr-2"></i> Support the site</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;

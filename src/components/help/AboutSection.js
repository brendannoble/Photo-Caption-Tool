import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-700">
      <div className="container px-4 py-10 mx-auto relative text-white">
        <div className="card dark-card py-6 px-6 md:px-12 bg-gray-800">
          <h1 className="text-3xl md:text-5xl text-center font-bold mb-4"><i className="fas fa-user-friends mr-4"></i> About</h1>
          <p className="text-lg md:text-2xl mb-12">Photo Caption Tool was created from the ground up with the user in mind. It was created to solve the common issue of inserting a caption in the easiest way possible. It is the quickest and easiest way to add a caption on desktop and mobile. Your photos are processed locally on your computer to keep what's yours, yours. This also allows you to work quickly while having maximum flexibility. And best of all, Photo Caption Tool is <strong>FREE!</strong></p>
          <h2 className="font-bold text-3xl mb-4"><i className="fas fa-tools mr-2"></i> Use the tool to create...</h2>
          <hr className="mb-8"/>
          <ul className="flex flex-wrap md:text-xl mb-2 md:mb-12">
            <li className="bg-blue-800 py-2 px-4 rounded-full mx-2">Social media posts</li>
            <li className="bg-blue-800 py-2 px-4 rounded-full mx-2">Scrapbook pages</li>
            <li className="bg-blue-800 py-2 px-4 rounded-full mx-2">Family photos</li>
            <li className="bg-blue-800 py-2 px-4 rounded-full mx-2">Memes</li>
            <li className="bg-blue-800 py-2 px-4 rounded-full mx-2">Photo documentation</li>
          </ul>
          <div className="flex flex-col items-center">
            <h2 className="flex-shrink-0 text-xl md:text-4xl text-center mt-8 px-8 py-4 shadow-lg font-bold text-white rounded-lg gold inline-block mb-6">Thank you for creating with us!</h2>
            <h3 className="text-xl mb-6">If you find Photo Caption Tool useful, consider supporting the site with a donation <i className="fas fa-heart text-red-600 ml-1"></i></h3>
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=UPREMZJUGFCQU&currency_code=USD&source=url" target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center bg-yellow-500 text-gray-800 px-6 py-4 mb-4 text-lg shadow-md rounded-full font-bold text-center"
            ><i className="fab fa-paypal text-2xl mr-2"></i> Support the site</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;

import React from 'react';

const HelpSection = () => {
  return (
    <section id="help" className="bg-gray-800">
      <div className="container px-4 py-10 mx-auto relative text-white">
          <h2 className="text-3xl text-white font-bold mb-4">
            <i className="fas fa-book mr-4 text-3xl"></i>
            How to use
          </h2>
          <hr className="mb-8"/>
          <ol className="list-decimal list-inside text-lg md:text-xl">
            <li>Click select or drag an image to select an image to which you want to add a caption</li>
            <li>Input your text in the "Edit text" box</li>
            <li>Use the controls to adjust your caption to your preference</li>
            <li>Click "Create Captioned Image" to generate a full-resolution photo with your caption</li>
            <li>Click the "Save Image" button to save it to your computer</li>
          </ol>
          <h2 className="text-3xl text-white font-bold mb-4 mt-16">
            <i className="far fa-question-circle text-3xl mr-4"></i> 
            FAQ
          </h2>
          <hr className="mb-8"/>
          <ul className="list-disc list-inside text-lg md:text-xl text-gray-500">
            <li>Where are my photos processed? <strong className="text-white">Your photos are processed locally on your computer, no data is sent to our servers</strong></li>
            <li>The page is stuck loading! <strong className="text-white">Be sure to use Firefox or Chrome and reload the browser if necessary</strong></li>
            <li>The output image shows a shadow, where did it go? <strong className="text-white">The shadow is only to give the image some depth from the background</strong></li>
            <li>I have an idea for a feature, where do I send it? <strong className="text-white">Send me an email at me@brendannoble.com</strong></li>
          </ul>
        </div>
    </section>
  )
}

export default HelpSection;

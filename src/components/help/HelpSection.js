import React from 'react';

const HelpSection = ({isOpen, setIsOpen}) => {
  return (
    <aside>
      <div className="bg-white shadow-lg">
        <div className="container mx-auto py-8 px-4 md:px-0 relative">
          <h2 className="text-3xl text-gray-700 font-bold mb-4">
            <i className="fas fa-book mr-4 text-3xl"></i>
            How to use
          </h2>
          <ol className="list-decimal list-inside text-lg">
            <li>Click select or drag an image to select an image to which you want to add a caption</li>
            <li>Click on the "Enter caption here..." text to enter in your caption</li>
            <li>Enter a font size to adjust the text size to your preference</li>
            <li>Click "Create Captioned Image" to generate a full-res photo with your caption</li>
            <li>Click the "Save Image" button to save it to your computer</li>
          </ol>
          <h2 className="text-3xl text-gray-700 font-bold mb-4 mt-8">
            <i className="far fa-question-circle text-3xl mr-4"></i> 
            FAQ
            </h2>
          <ul className="list-disc list-inside text-lg">
            <li>Where are my photos processed? <strong>Your photos are processed locally on your computer, no data is sent to our servers</strong></li>
            <li>The page is stuck loading! <strong>Be sure to use Firefox or Chrome and reload the browser if necessary</strong></li>
            <li>The output image shows a shadow, where did it go? <strong>The shadow is only to give the image some depth from the background</strong></li>
            <li>I have an idea for a feature, where do I send it? <strong>Send me an email at me@brendannoble.com</strong></li>
          </ul>
          <div onClick={() => setIsOpen(!isOpen)} className="absolute top-0 right-0 mt-8 mr-8 flex justify-center items-center text-md font-bold text-white bg-red-500 px-4 py-3 rounded-full shadow-md cursor-pointer hover:bg-red-700 transition-colors duration-200">
          <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default HelpSection;

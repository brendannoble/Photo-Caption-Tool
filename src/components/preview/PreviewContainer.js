import React from 'react';
import Render from '../render/Render';

const PreviewContainer = () => {

  return (
    <section className="pt-20">
      <div className="flex justify-center card p-5 mb-8">
      <div className="shadow-md inline-block">
        <Render isPreview={true}/>
      </div>
      </div>
    </section>
  )
}

export default PreviewContainer;

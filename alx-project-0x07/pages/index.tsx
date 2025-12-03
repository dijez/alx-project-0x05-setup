import React, {useState} from "react";




const Home: React.FC = () => {

  const handleGenerateImage = async () => {
    console.log("Generating Images");
    
  }


  return (
    <div>
      <div>
        <h1>
          Image Generation App
        </h1>
        <p>
          Generate stunning images based on your prompts!
        </p>

        <div>
          <input 
          type="text"
          placeholder="enter your prompts" />
          <button onClick={handleGenerateImage}> 
            Generate Image
          </button>
        </div>
      </div>
    </div>
  )

}

export default Home;

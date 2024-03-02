import React from "react";

function News() {
  return (
    <div className="bg-red-100 h-fit p-6  grid grid-cols-3 gap-4 ">
      <div className="bg-secondary h-96  rounded-xl m-1  box-border">
        <div className="image bg-yellow-100 w-full h-[50%] "></div>
        <div className="content h-[50%]  ">
          {/* <span className="bg-green-100 text-ellipsis"> */}
                 <p className="h-full text-ellipsis overflow-hidden ...">
           An old scandal revolving around disgraced US financier Jeffrey
            Epstein and Microsoft co-founder Bill Gates has surfaced online and
            the revelations have raised many eyebrows. According to a Wall
            Street Journal report, Epstein had tried blackmailing Bill Gates
            over his alleged affair with Russian bridge player Mila Antonova.
            urnal report, Epstein had tried blackmailing Bill Gates
            over his alleged affair with Russian bridge player Mila Antonova.
            over his alleged affair with Russian bridge player Mila Antonova.
            over his alleged affair with Russian bridge player Mila Antonova.
            </p> 

         <button className="relative bottom-10 left-[50%] text-white bg-green-500 ">Read More</button>
        </div>
      </div>
      <div className="bg-secondary h-96  rounded-xl m-1"></div>
      <div className="bg-secondary h-96  rounded-xl m-1"></div>
      <div className="bg-secondary h-96  rounded-xl m-1"></div>
      <div className="bg-secondary h-96  rounded-xl m-1"></div>
      <div className="bg-secondary h-96  rounded-xl m-1"></div>
      <div className="bg-secondary h-96  rounded-xl m-1"></div>
      <div className="bg-secondary h-96  rounded-xl m-1"></div>

      {/* <div className="bg-secondary h-1/2  rounded-lg">
                            
          
                            </div>
                            <div className="bg-secondary h-1/2  rounded-lg">
                            
          
                            </div>
                            <div className="bg-secondary h-1/2  rounded-lg">
                            
          
                            </div>
                            <div className="bg-secondary h-1/2  rounded-lg">
                            
          
                            </div>
                            <div className="bg-secondary h-1/2  rounded-lg">
                            
          
                            </div> */}
    </div>
  );
}

export default News;

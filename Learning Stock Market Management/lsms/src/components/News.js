import React, {useEffect, useState} from "react";


function News() {
  const [arr,setArr]=useState([]);
  useEffect(()=>{
 

  const url="https://api.marketaux.com/v1/news/all?countries=in&filter_entities=true&limit=10&published_after=2024-02-28T08:44&api_token=RveJbhbTRqbVnKGg1y19wFEdJkpDKuq0qfWBcSFK";
  const data=fetch(url);
  console.log(data);
  data.then((res)=>{  
    return res.json();
  }).then((data)=>{ 
    console.log(data);
    console.log("hello")
    setArr([...data.data]);
  }).catch((err)=>{ 
    console.log(err);
  });
  for(let i=0;i<arr.length;i++){
    console.log(arr[i].title);
  
}
  },[]);
  return (
    <div className=" h-fit p-14  grid grid-cols-3 gap-4  ">
      {/* <button  className="bg-green-100 " onClick={()=>run()}>Run buddy</button> */}
      {arr.map((item)=>{
        return (
      <div className="bg-secondary h-96  rounded-lg m-1 border-1   hover:scale-[1.12] transition-transform duration-300">
            <div className="image bg-yellow-100 w-full h-[50%] rounded-lg">
              <img className="w-full h-full rounded-lg" src={item.image_url} /> 
          </div><div className="content h-[50%] rounded-lg ">

              <p className="h-full text-ellipsis overflow-hidden ... p-2 text-white">
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

              <button className="relative bottom-16 left-[37%] text-white bg-green-500 p-1 rounded-xl ">Read More</button>
            </div>
      </div>
        )
      })}
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

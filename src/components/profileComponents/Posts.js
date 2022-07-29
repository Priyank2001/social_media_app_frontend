import { useEffect, useState } from "react";
import ProNav from "./ProNav";


export default function Posts (props){
    let [dogImage, setDogImage] = useState(null)

    // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setDogImage(data))
  },[])

  return (
    <div >
        <div className="">
            <ProNav ></ProNav>
        </div>
        <div>
        {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
    {dogImage && dogImage.map((dog) => <img key={dog.id} width={"200px"} height={"200px"}  src={dog.url}></img>)}
    </div>
    </div>
  );
}




import { useEffect, useState } from "react";
import ProNav from "./ProNav";
import './Profile.css'


export default function Profile (props){
    let [Imagee, setImagee] = useState(null)

    // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setImagee(data))
  },[])

  return (
    <div >
        <div>
            <ProNav  setUser={props.setUser} user={props.user}/>
        </div>
        <div className="profilediv"  >
        {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
    {Imagee && Imagee.map((im) => <img key={im.id} width={"200px"} height={"200px"}  src={im.url}></img>)}
    </div>
    </div>
  );
}



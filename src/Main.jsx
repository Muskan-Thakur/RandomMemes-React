import React from "react";

function Main()
{

    const[memeData, setMemeData]=React.useState([])

    async function meme()
    {
        const res=await fetch("https://api.imgflip.com/get_memes")
        const data=await res.json();

        setMemeData(data.data.memes)

    }
  
React.useEffect(function(){
    meme();
},[])
   
  const[img, setImg]=React.useState(false)
    function handleClick()
    {
        const randomIndex = Math.floor(Math.random() * memeData.length);
  
        setImg(memeData[randomIndex].url);
    }

    return(<div className="containier">

        <div className="box">
        <h1>Click on button to display images</h1>
 <div>    <button onClick={handleClick}>Random Images</button></div>
    <div> {img && <img style={{width:"300px", height:"300px"}} src={img} alt="Random Meme" />}</div>

         </div>
    </div>)
}
export default Main;
import { useState } from "react"

export default function StateExample() {
  
    let [ likes, setLikes] = useState(5)
    let [isUserLike, setIsUserLike] = useState(false)

    const handleClick = () => {
       if (isUserLike === false){
          setLikes(likes + 1)
          setIsUserLike(true)
       }
       else{
        setLikes(likes - 1)
        setIsUserLike(false)
     }
    }

  return (
        <div>
           <h1>{likes}</h1> 
           <button onClick={() => handleClick()}>like</button>
        </div>
  ) 
}

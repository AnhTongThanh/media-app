import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "AnAn",
      img: "https://imgs.search.brave.com/y7jplhqrGj3ddhva_NXJSEbFhX2-XdIM7CpJtSBwwVE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/M3VVQUIxcDMtX05s/NHRCU0tFcFhBSGFF/OCZwaWQ9QXBp",
    },
    {
      id: 2,
      name: "AnAn",
      img: "https://imgs.search.brave.com/y7jplhqrGj3ddhva_NXJSEbFhX2-XdIM7CpJtSBwwVE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/M3VVQUIxcDMtX05s/NHRCU0tFcFhBSGFF/OCZwaWQ9QXBp",
    },
    {
      id: 3,
      name: "AnAn",
      img: "https://imgs.search.brave.com/y7jplhqrGj3ddhva_NXJSEbFhX2-XdIM7CpJtSBwwVE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/M3VVQUIxcDMtX05s/NHRCU0tFcFhBSGFF/OCZwaWQ9QXBp",
    },
    {
      id: 4,
      name: "AnAn",
      img: "https://imgs.search.brave.com/y7jplhqrGj3ddhva_NXJSEbFhX2-XdIM7CpJtSBwwVE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/M3VVQUIxcDMtX05s/NHRCU0tFcFhBSGFF/OCZwaWQ9QXBp",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
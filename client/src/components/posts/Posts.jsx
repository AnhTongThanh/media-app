import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "An",
      userId: 1,
      profilePic:
        "https://imgs.search.brave.com/y7jplhqrGj3ddhva_NXJSEbFhX2-XdIM7CpJtSBwwVE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/M3VVQUIxcDMtX05s/NHRCU0tFcFhBSGFF/OCZwaWQ9QXBp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://imgs.search.brave.com/y7jplhqrGj3ddhva_NXJSEbFhX2-XdIM7CpJtSBwwVE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/M3VVQUIxcDMtX05s/NHRCU0tFcFhBSGFF/OCZwaWQ9QXBp",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://imgs.search.brave.com/y7jplhqrGj3ddhva_NXJSEbFhX2-XdIM7CpJtSBwwVE/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/M3VVQUIxcDMtX05s/NHRCU0tFcFhBSGFF/OCZwaWQ9QXBp",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;

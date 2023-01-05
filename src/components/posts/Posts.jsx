import Post from "../post/Post";
import "./posts.scss";
import dp from "../../assets/display-picture.jpg";
import post2 from "../../assets/post-2.jpeg";

// "../../assets/display-picture.jpg"

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Ashutosh K.",
      userId: 1,
      profilePic: dp,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: post2,
    },
    {
      id: 2,
      name: "Ashutosh K.",
      userId: 2,
      profilePic: dp,
      desc: "Welcome to AK Profile",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;

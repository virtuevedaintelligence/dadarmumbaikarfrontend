import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Ashutosh K.",
      userId: 1,
      profilePic: "https://kolambkarashutosh.000webhostapp.com/img/display-picture.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://scontent-bom1-1.xx.fbcdn.net/v/t31.18172-8/10869393_781302868608395_2943290994619657595_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=19026a&_nc_ohc=npcxBVpHi_wAX9CAC3Z&_nc_ht=scontent-bom1-1.xx&oh=00_AfAL3LY1Ta1uE-Xa5oOkjzsn41e0RLP1Fm2_5-e58YyHvA&oe=63DD1135",
    },
    {
      id: 2,
      name: "Ashutosh K.",
      userId: 2,
      profilePic: "https://kolambkarashutosh.000webhostapp.com/img/display-picture.jpg",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
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

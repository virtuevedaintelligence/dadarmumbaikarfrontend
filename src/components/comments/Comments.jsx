import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import dp2 from "../../assets/dp2.jpeg";
import dp3 from "../../assets/dp3.jpeg";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Good Old Days of college fest",
      name: "Rushikesh D.",
      userId: 1,
      profilePicture: dp3,
    },
    {
      id: 2,
      desc: "Nostalic feeling good to see those memories ❤️",
      name: "Rushikesh K.",
      userId: 2,
      profilePicture: dp2,
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment, index) => (
        <div className="comment" key={index}>
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;

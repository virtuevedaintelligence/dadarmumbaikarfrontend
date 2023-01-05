import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="right">
          <h1>Welcome to DadarMumbaikar</h1>
          <p> DadarMumbaikar helps you to get all things which are going in Dadar. We have information about all great shops, restuarants, authentic food spot, and many more. Have best exprience by registering to DadarMumbaikar. Waiting to see you as a logged in user.           </p>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

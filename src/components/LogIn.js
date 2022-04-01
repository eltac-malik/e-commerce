import { useState,useContext } from "react";
import {useNavigate} from 'react-router-dom'
import Context from "../context/Context";

function LogIn() {
  const [username, setUsername] = useState("");
  const [psw, setPsw] = useState("");



  const navigate = useNavigate();
  
  const user =useContext(Context);
  
  const handleClick = () =>
  {


    user.users.forEach(e =>
    {
      if (e.first_name.toLowerCase() === username.toLowerCase() && e.last_name.toLowerCase() === psw.toLowerCase())
      {
        navigate("/home");
        user.setCurrentuser(e);

      }
    });

  }



  return (
    <div className="bg-body">
    <div className="containers">
      <div className="tops"></div>
      <div className="titles">
        <div className="icons"></div>
        <div className="texts">Login</div>
      </div>
      <div className="bodys">
        <div className="emails">
          <label htmlFor="emails">Username</label>
          <input onChange={(e) => setUsername(e.target.value)} value={username} type="email" id="email" name="email" />
        </div>
        <div className="passs">
          <label htmlFor="passs">Password</label>
          <input onChange={(e) => setPsw(e.target.value)} value={psw} type="password" id="pass" name="pass" />
        </div>
        <div className="remembers">
          <label htmlFor="remembers">
            <input type="checkbox" id="remember" name="pass" />
            Remember Me
          </label>
        </div>
      </div>
      

      <button onClick={handleClick} className="footer">Log in</button>
    </div>
  </div>
  )
}

export default LogIn
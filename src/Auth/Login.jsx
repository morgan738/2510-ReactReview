import axios from "axios";
import { useNavigate } from "react-router";

const Login = ({ authenticate }) => {
  const navigate = useNavigate();
  const login = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    const user = {
      username,
      password,
    };
    try {
      const { data } = await axios.post(
        "https://auth-api-8ysj.onrender.com/api/login",
        user
      );
      window.localStorage.setItem("token", data.token);
      authenticate();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form id="loginForm" action={login}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

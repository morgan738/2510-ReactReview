import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const register = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    const user = {
      username,
      password,
    };
    try {
      const { data } = await axios.post(
        "https://auth-api-8ysj.onrender.com/api/users",
        user
      );
      alert("Thanks for registering!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <form id="loginForm" action={register}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

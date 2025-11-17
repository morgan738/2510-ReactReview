import axios from "axios";
import { useNavigate } from "react-router";

const AddGameForm = ({ setGames, games }) => {
  const navigate = useNavigate();
  const addGame = async (formData) => {
    const newGame = {
      name: formData.get("gameName"),
      description: formData.get("description"),
    };
    try {
      const { data } = await axios.post(
        "https://auth-api-8ysj.onrender.com/api/games",
        newGame
      );
      //console.log(data);
      setGames([...games, data]);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form action={addGame}>
      <h3>Add a game!</h3>
      <label>
        Name:
        <input type="text" name="gameName" />
      </label>
      <label>
        Description:
        <input type="text" name="description" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddGameForm;

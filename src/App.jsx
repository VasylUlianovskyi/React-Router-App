import "./App.css";
import UserCard from "./UserCard";

function App() {
  const user = {
    photo: "https://ichef.bbci.co.uk/images/ic/1200x675/p096hbwt.jpg",
    firstName: "Mark",
    lastName: "Aurelius",
    username: "m_aurelius",
    gender: "male",
    tweets: 1337,
    following: 561,
    followers: 719,
  };

  const user1 = {
    photo:
      "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7154725/harry-potter-top-10-hermione-granger-moments-hermione-granger-358045.jpg?quality=90&strip=all&crop=0,15.095986038394,100,69.808027923211",
    firstName: "Hermione",
    lastName: "Granger",
    username: "h_granger",
    gender: "female",
    tweets: 828,
    following: 728,
    followers: 1329,
  };

  return (
    <>
      <UserCard user={user} />
      <UserCard user={user1} />
    </>
  );
}

export default App;

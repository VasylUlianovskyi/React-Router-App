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
    followers: 718,
  };

  return <UserCard user={user} />;
}

export default App;

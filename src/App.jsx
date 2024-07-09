import "./App.css";
import UserCard from "./UserCard";

function App() {
  const user = {
    photo:
      "https://img.etimg.com/thumb/msid-68885634,width-650,height-488,imgsize-364466,resizemode-75/emmawatson.jpg",
    firstName: "Emma",
    lastName: "Watson",
    username: "emwatson",
    gender: "male",
    tweets: 1337,
    following: 561,
    followers: 718,
  };

  return <UserCard user={user} />;
}

export default App;

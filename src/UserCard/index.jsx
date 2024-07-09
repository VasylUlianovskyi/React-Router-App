import { useState } from "react";
import style from "./UserCard.module.css";

function UserCard({ user }) {
  const [followers, setFollowers] = useState(user.followers);
  const [initialFollowers] = useState(user.followers);
  const [followed, setFollowed] = useState(false);
  const [like, setlike] = useState(false);

  const userCardStyle = {
    display: "flex",
    flexDirection: "column",
    positon: "relative",
    margin: "100px",
    boxShadow: "0 0 10px 2px silver",
    borderRadius: "10px",
    padding: "0",
    maxWidth: "250px",
    textAlign: "center",
    boxShadow: like ? "0 0 10px 2px red" : "0 0 10px 2px grey",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  };

  const userInfoWrapper = {
    position: "relative",
    bottom: "100px",
    width: "100%",
    color:
      user.gender === "male"
        ? "rgb(126 179 244 / 90%)"
        : "rgba(255, 192, 203, 0.9)",
    padding: "10px",
  };

  const handleFollow = () => {
    if (followed) {
      setFollowers(initialFollowers);
    } else {
      setFollowers(followers + 1);
    }
    setFollowed(!followed);
  };

  const likeHandle = () => {
    setlike(!like);
  };

  return (
    <article style={userCardStyle}>
      <img
        className={style.userPhoto}
        src={user.photo}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <div style={userInfoWrapper}>
        <h2 className={style.nameStyle}>
          {user.firstName} {user.lastName}
        </h2>
        <p className={style.userNickName}>@{user.username}</p>
      </div>
      <div className={style.userStaticsWrapper}>
        <div>
          <p className={style.userStatic}>Tweets</p>
          <p className={style.userStaticValue}>{user.tweets}</p>
        </div>
        <div>
          <p className={style.userStatic}>Following</p>
          <p className={style.userStaticValue}>{user.following}</p>
        </div>
        <div>
          <p className={style.userStatic}>Followers</p>
          <p className={style.userStaticValue}>{followers}</p>
        </div>
      </div>
      <button className={style.followBtn} onClick={handleFollow}>
        {followed ? (
          <i className="fa-solid fa-check"></i>
        ) : (
          <i className="fa-solid fa-plus"></i>
        )}
      </button>
      <button className={style.likeBtn} onClick={likeHandle}>
        {like ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </button>
    </article>
  );
}

export default UserCard;

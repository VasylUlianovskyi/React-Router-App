import { useState } from "react";
import style from "./UserCard.module.css";

function UserCard({ user }) {
  const [followers, setFollowers] = useState(user.followers);
  const [initialFollowers] = useState(user.followers);
  const [followed, setFollowed] = useState(false);
  const [like, setLike] = useState(false);

  const userCardStyle = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    borderRadius: "10px",
    margin: "30px auto",
    padding: "0",
    minWidth: "100px",
    maxWidth: "250px",
    width: "100%",
    textAlign: "center",
    boxShadow:
      user.gender === "male"
        ? "0 0 10px 5px rgb(126 179 244) "
        : "0 0 10px 5px rgb(255, 192, 203)",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  };

  const userInfoWrapper = {
    position: "absolute",
    bottom: "140px",
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

  const followedBtnIcon = followed ? (
    <i className="fa-solid fa-check"></i>
  ) : (
    <i className="fa-solid fa-plus"></i>
  );

  const likeHandle = () => {
    setLike(!like);
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
        {followedBtnIcon}
      </button>
      <button className={style.likeBtn} onClick={likeHandle}>
        {like ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i className="fa-regular fa-heart" style={{ color: "grey" }}></i>
        )}
      </button>
    </article>
  );
}

export default UserCard;

import { useState } from "react";
import style from "./UserCard.module.css";

function UserCard({ user }) {
  const [followers, setFollowers] = useState(user.followers);
  const [initialFollowers] = useState(user.followers);
  const [followed, setFollowed] = useState(false);
  const [like, setlike] = useState(false);

  const userCardStyle = {
    positon: "relative",
    margin: "100px",
    boxShadow: "0 0 10px 2px silver",
    borderRadius: "10px",
    padding: "0",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: like ? "0 0 10px 2px yellow" : "0 0 10px 2px grey",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
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
    setLike(!like);
  };

  return (
    <article style={userCardStyle}>
      <img
        className={style.userPhoto}
        src={user.photo}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <div className={style.userInfo}>
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
          <i class="fa-solid fa-check"></i>
        ) : (
          <i class="fa-solid fa-plus"></i>
        )}
      </button>
      <button className={style.likeBtn} onClick={likeHandle}>
        {like ? (
          <i class="fa-solid fa-heart"></i>
        ) : (
          <i class="fa-regular fa-heart"></i>
        )}
      </button>
    </article>
  );
}

export default UserCard;

import classNames from "classnames";
import { FaTrash } from "react-icons/fa";
import styles from "./UserListItem.module.css";

function UserListItem({ user, userIndex, changeActiveUser, deleteUser }) {
  const activeUser = classNames(styles.userListItm, {
    [styles.isSelect]: user.isActive,
  });

  const userClickhandler = () => {
    changeActiveUser(userIndex);
  };

  return (
    <li onClick={userClickhandler} className={activeUser}>
      <img className={styles.userImg} src={user.photo} alt={user.name} />
      <p className={styles.userName}>
        {user.name}
        <span className={styles.userNickName}>{user.nickname}</span>
      </p>

      <FaTrash onClick={deleteUser} className={styles.deleteBtn} />
    </li>
  );
}

export default UserListItem;

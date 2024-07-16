import { useState } from "react";
import UserListItem from "./UserListItem";
import styles from "../UserList/UserList.module.css";

const USERS = [
  {
    id: 1,
    name: "John Doe",
    nickname: "johnny",
    photo:
      "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isActive: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    nickname: "jane_s",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isActive: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    nickname: "alice_j",
    photo:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isActive: false,
  },
  {
    id: 4,
    name: "Bob Brown",
    nickname: "bobby_b",
    photo:
      "https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isActive: false,
  },
  {
    id: 5,
    name: "Charlie Davis",
    nickname: "charlie_d",
    photo:
      "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isActive: false,
  },
];

function UserList() {
  const [users, setUser] = useState(USERS);

  function changeActiveUser(selectedUserIndex) {
    const usersArrCopy = [...users];

    usersArrCopy[selectedUserIndex].isActive =
      !usersArrCopy[selectedUserIndex].isActive;

    setUser(usersArrCopy);
  }

  function deleteUser(e, userIndex) {
    e.stopPropagation();
    const newUsersArray = users.filter((users, index) => index !== userIndex);
    setUser(newUsersArray);
  }

  const mapUserList = (user, index) => {
    return (
      <UserListItem
        key={index}
        user={user}
        userIndex={index}
        changeActiveUser={() => changeActiveUser(index)}
        deleteUser={(e) => deleteUser(e, index)}
      />
    );
  };

  return (
    <>
      <ul className={styles.userList}>{users.map(mapUserList)}</ul>
    </>
  );
}

export default UserList;

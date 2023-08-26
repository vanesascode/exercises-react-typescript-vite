import { useState, useEffect } from "react";

interface User {
  id: number;
  username: string;
}

const AddUser = () => {
  // useState:

  const [users, setUsers] = useState<User[]>([]);

  // Side Effects => in this case, it will only happen if 'users' state changes:

  useEffect(() => {
    console.log("mounting");
    console.log("Users: ", users);

    return () => {
      console.log("unmounting");
    };
  }, [users]);

  //Button function:

  const handleAddUser = () => {
    const newUser: User = {
      id: Math.random(),
      username: `User ${Math.random()}`,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      <ul className="list-unstyled fs-4">
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      <button onClick={handleAddUser} className="btn btn-danger btn-lg">
        Add User
      </button>
    </div>
  );
};

export default AddUser;

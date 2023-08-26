interface User {
  id: number;
  username: string;
}

interface AddUserProps {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const AddUser = ({ setUsers }: AddUserProps) => {
  const handleAddUser = () => {
    const newUser: User = {
      id: Math.random(),
      username: `User ${Math.random()}`,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <button onClick={handleAddUser} className="btn btn-danger btn-lg">
      Add User
    </button>
  );
};

export default AddUser;

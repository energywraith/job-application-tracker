import useQuery from "hooks/useQuery";

const useUsers = () => {
  const { sendQuery } = useQuery();

  const User = ({ id }) => sendQuery(`users/${id}`);

  return { User };
};

export default useUsers;

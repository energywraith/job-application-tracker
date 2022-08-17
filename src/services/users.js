import useQuery from "hooks/useQuery";
import useQueryWrapped from "hooks/useQueryWrapped";

const useUsers = () => {
  const { sendQuery } = useQuery();

  const User = ({ id }) => sendQuery(`users/${id}`);

  const UserCategories = ({ id }, fetchOnInit) =>
    useQueryWrapped({
      path: `users/${id}/categories`,
      fetchOnInit,
      defaultParams: {
        method: "GET",
      },
    });

  return { User, UserCategories };
};

export default useUsers;

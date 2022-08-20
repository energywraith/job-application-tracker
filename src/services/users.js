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

  const PostUserCategory = ({ id, name, index }) =>
    sendQuery(`users/${id}/categories`, {
      method: "POST",
      body: {
        name,
        index,
      },
    });
  const PostUserCategoryJob = ({ id, categoryId, name, company }) =>
    sendQuery(`users/${id}/categories/${categoryId}/jobs`, {
      method: "POST",
      body: {
        name,
        company,
      },
    });

  return { User, UserCategories, PostUserCategory, PostUserCategoryJob };
};

export default useUsers;

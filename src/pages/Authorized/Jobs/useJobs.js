import { useMemo } from "react";
import useUser from "hooks/useUser";

import useUsers from "services/users";

const useJobs = () => {
  const { user } = useUser();
  const { UserCategories } = useUsers();

  const { data: categoriesRaw } = UserCategories({ id: user.id });

  const categories = useMemo(() => {
    if (!categoriesRaw) return null;

    return categoriesRaw.map((category) => ({
      ...category,
      data: category.jobs,
    }));
  }, [categoriesRaw]);

  const isInitiallyLoaded = useMemo(() => !!categories, [categories]);
  const isLoading = useMemo(() => !isInitiallyLoaded, [isInitiallyLoaded]);

  return { categories, isInitiallyLoaded, isLoading };
};

export default useJobs;

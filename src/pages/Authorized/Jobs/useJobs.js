import { useMemo } from "react";
import useQueryWrapped from "hooks/useQueryWrapped";
import useUser from "hooks/useUser";

const useJobs = () => {
  const { user } = useUser();

  const { data: categoriesRaw } = useQueryWrapped({
    path: `users/${user.id}/categories`,
    fetchOnInit: true,
    defaultParams: {
      method: "GET",
    },
  });

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

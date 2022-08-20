import { useMemo } from "react";

import useUser from "hooks/useUser";
import useModal from "hooks/useModal";
import useUsers from "services/users";
import createJobModal from "consts/modals/createJobModal";

const useJobs = () => {
  const { user } = useUser();
  const { UserCategories, PostUserCategoryJob } = useUsers();
  const modal = useModal();

  const { data: categoriesRaw } = UserCategories({ id: user.id }, true);

  const categories = useMemo(() => {
    if (!categoriesRaw) return null;

    return categoriesRaw.map((category) => ({
      ...category,
      data: category.jobs,
    }));
  }, [categoriesRaw]);

  const isInitiallyLoaded = useMemo(() => !!categories, [categories]);
  const isLoading = useMemo(() => !isInitiallyLoaded, [isInitiallyLoaded]);

  const createJob = async ({ categoryId }) => {
    try {
      const modalResponse = await modal.open(createJobModal);

      if (!modalResponse) return null;

      const response = await PostUserCategoryJob({
        id: user.id,
        categoryId,
        name: modalResponse.name,
        company: {
          name: modalResponse.companyName,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return { categories, createJob, isInitiallyLoaded, isLoading };
};

export default useJobs;

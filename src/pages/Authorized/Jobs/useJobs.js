import { useState, useMemo } from "react";

import useUser from "hooks/useUser";
import useModal from "hooks/useModal";
import useErrorsHandling from "hooks/useErrorsHandling";
import useUsers from "services/users";
import createJobModal from "consts/modals/createJobModal";

const useJobs = () => {
  const modal = useModal();
  const { user } = useUser();
  const { UserCategories, PostUserCategoryJob } = useUsers();
  const { handleResponseError, handleFormValidationErrors } =
    useErrorsHandling();

  const { data: categoriesRaw } = UserCategories({ id: user.id }, true);

  const [isMutationLoading, setIsMutationLoading] = useState(false);

  const categories = useMemo(() => {
    if (!categoriesRaw) return null;

    return categoriesRaw.map((category) => ({
      ...category,
      data: category.jobs,
    }));
  }, [categoriesRaw]);

  const isInitiallyLoaded = useMemo(() => !!categories, [categories]);
  const isLoading = useMemo(
    () => !isInitiallyLoaded || isMutationLoading,
    [isInitiallyLoaded]
  );

  const createJob = async ({ categoryId }) => {
    const modalResponse = await modal.open(
      createJobModal({
        onSubmit: async (values, methods) => {
          setIsMutationLoading(true);

          try {
            return await PostUserCategoryJob({
              id: user.id,
              categoryId,
              name: values.name,
              company: {
                name: values.companyName,
              },
            });
          } catch (error) {
            methods.clearErrors();

            if (error.errorType === "ResourceExistsError") {
              handleResponseError(error);
            }

            handleFormValidationErrors(error, methods);
          } finally {
            setIsMutationLoading(false);
          }
        },
      })
    );

    if (!modalResponse) return null;
    return modalResponse;
  };

  return { categories, createJob, isInitiallyLoaded, isLoading };
};

export default useJobs;

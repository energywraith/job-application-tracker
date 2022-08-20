import { useState, useMemo } from "react";

import useUser from "hooks/useUser";
import useModal from "hooks/useModal";
import useErrorsHandling from "hooks/useErrorsHandling";
import useUsers from "services/users";
import createJobModal from "consts/modals/createJobModal";
import createCategoryModal from "consts/modals/createCategoryModal";
import parseCategories from "utils/parseCategories";

const useJobs = () => {
  const modal = useModal();
  const { user } = useUser();
  const { UserCategories, PostUserCategory, PostUserCategoryJob } = useUsers();
  const { handleResponseError, handleFormValidationErrors } =
    useErrorsHandling();

  const { data: categoriesRaw } = UserCategories({ id: user.id }, true);
  const [categories, setCategories] = useState(null);

  const [isMutationLoading, setIsMutationLoading] = useState(false);

  useMemo(() => {
    if (!categoriesRaw) return null;

    setCategories(categoriesRaw);
  }, [categoriesRaw]);

  const createCategory = async () => {
    const modalResponse = await modal.open(
      createCategoryModal({
        onSubmit: async (values, methods) => {
          setIsMutationLoading(true);

          const maxIndex = categories.reduce(
            (acc, column) => (column.index > acc ? column.index : acc),
            -1
          );

          try {
            const newCategory = await PostUserCategory({
              id: user.id,
              name: values.name,
              index: maxIndex + 1,
            });

            setCategories((currentCategories) => [
              ...currentCategories,
              newCategory,
            ]);

            return newCategory;
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

  const createJob = async ({ categoryId }) => {
    const modalResponse = await modal.open(
      createJobModal({
        onSubmit: async (values, methods) => {
          setIsMutationLoading(true);

          try {
            const newJob = await PostUserCategoryJob({
              id: user.id,
              categoryId,
              name: values.name,
              company: {
                name: values.companyName,
              },
            });

            setCategories((currentCategories) =>
              currentCategories.map((category) => {
                if (category.id === categoryId) {
                  return {
                    ...category,
                    jobs: [...category.jobs, newJob],
                  };
                }

                return category;
              })
            );

            return newJob;
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

  const isInitiallyLoaded = useMemo(() => !!categories, [categories]);

  const isLoading = useMemo(
    () => !isInitiallyLoaded || isMutationLoading,
    [isInitiallyLoaded]
  );

  return {
    categories: parseCategories(categories),
    createCategory,
    createJob,
    isInitiallyLoaded,
    isLoading,
  };
};

export default useJobs;

import { useState } from "react";

const useFiltersManager = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const onFiltersChange = (payload) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      ...payload,
    }));
  };

  return {
    filters,
    onFiltersChange,
  };
};

export default useFiltersManager;

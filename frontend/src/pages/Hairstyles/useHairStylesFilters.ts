import { useMemo, useState } from "react";
import { debounce } from "../../utils/debounce";

export function useHairStylesFilters() {
  const [search, setSearch] = useState<string>("");

  const onSearchChange = useMemo(() => debounce(setSearch, 300), []);

  return {
    search,
    onSearchChange,
  };
}

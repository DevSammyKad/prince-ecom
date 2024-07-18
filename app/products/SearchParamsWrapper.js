import { useSearchParams } from "next/navigation";

const SearchParamsWrapper = ({ children }) => {
  const searchParams = useSearchParams();
  const collection = searchParams.get("collection");

  return children({ collection });
};

export default SearchParamsWrapper;

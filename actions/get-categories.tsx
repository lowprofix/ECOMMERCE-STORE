import { Category } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
interface Query {
  name?: string;
}

const getCategories = async (query: Query): Promise<Category[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      name: query.name,
    },
  });
  const res = await fetch(URL);

  return res.json();
};

export default getCategories;

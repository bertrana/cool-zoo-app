import { http } from "./axios-config";

export const getUser = async (num) => {
  const url = `/api/?results=${num}&inc=name,picture&noinfo`;

  try {
    const response = await http.get(url);
    const data = response.data.results;

    console.log(data);
    return data;
  } catch (error) {
    return []
  };
}

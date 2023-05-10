import { http } from "./axios-config";

export async function getUser(num) {
	const url = `/api/?results=${num}&inc=name,picture&noinfo`;

	try {
		const response = await http.get(url);
		const data = response.data.results;

		return data;
	} catch (error) {
		return [];
	}
}

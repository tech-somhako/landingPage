import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "public/blogs.json");

export default async function handler(req, res) {
	if (req.method === "GET") {
		// Read the existing data from the JSON file
		const jsonData = await fsPromises.readFile(dataFilePath);
		const objectData = JSON.parse(jsonData);

		res.status(200).json(objectData);
	} else if (req.method === "POST") {
		try {
			const response = await fetch("https://atsapi.somhako.com/api/admin/specific-blogs-list/", {
				method: "GET"
				// headers: {
				//   'Content-Type': 'application/json'
				// },
				// body: JSON.stringify({ name: "Lorenzo", email: "lo@lorenzozar.com" })
			});
			const data = await response.json();
			console.log("get", data);

			const updatedData = JSON.stringify(data);

			// // Write the updated data to the JSON file
			await fsPromises.writeFile(dataFilePath, updatedData);

			// Send a success response
			res.status(200).json({ message: "Data stored successfully" });
		} catch (error) {
			console.error(error);
			// Send an error response
			res.status(500).json({ message: "Error storing data" });
		}
	}
}

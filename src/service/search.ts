import { MyError } from "../error/my-error";
import axios from "axios";

// Sending request to pixabay api with the parameters in the url.
const search = async (data: string) => {
  try {
    const fixData = data.substring(2);

    let url = `${process.env.BASE_PIXABAY}&${fixData}`;

    const { data: dataFromServer } = await axios.get(url);

    return await dataFromServer;
  } catch (err) {
    throw new MyError("Search failed", 400);
  }
};

// Sending request to pixabay api with a specific id.
const searchById = async (id: string) => {
  try {
    let url = `${process.env.BASE_PIXABAY}&id=${id}`;
    const { data: dataFromServer } = await axios.get(url);
    return await dataFromServer;
  } catch (err) {
    throw new MyError("Search failed", 400);
  }
};

export { search, searchById };

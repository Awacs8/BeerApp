import axios from "axios";

const url = `https://api.punkapi.com/v2`;
export const getBeer = async () => {
  return await axios.get(`${url}/beers`).then((response) => response.data);
};

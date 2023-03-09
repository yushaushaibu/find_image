import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 2DJbsLCoM3ZsCxg9ovMne4L3GpLHkOonA8QuKjd-OW8",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);
  return response;
};

export default searchImages;

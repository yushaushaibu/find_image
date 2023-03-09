import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 2DJbsLCoM3ZsCxg9ovMne4L3GpLHkOonA8QuKjd-OW8",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;

import { useState, useEffect } from "react";

import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    onTermSearch(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const onTermSearch = async (term) => {
    const response = await youtube.get("/search", {
      params: { q: term },
    });

    setVideos(response.data.items);
  };

  return [videos, onTermSearch];
};

export default useVideos;

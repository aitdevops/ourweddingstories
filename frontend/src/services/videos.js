export const getVideos = async () => {
    const response = await fetch('http://videos:3002/');
    const data = await response.text();
    return data;
  };
  
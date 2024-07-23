export const getPhotos = async () => {
    const response = await fetch('http://photos:3001/');
    const data = await response.text();
    return data;
  };
  
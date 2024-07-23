export const getStories = async () => {
    const response = await fetch('http://stories:3003/');
    const data = await response.text();
    return data;
  };
  
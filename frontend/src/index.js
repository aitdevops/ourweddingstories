import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getPhotos } from './services/photos';
import { getVideos } from './services/videos';  // Corrected import
import { getStories } from './services/stories';  // Corrected import

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [videos, setVideos] = useState(null);
  const [stories, setStories] = useState(null);

  useEffect(() => {
    getPhotos().then(data => setPhotos(data));
    getVideos().then(data => setVideos(data));
    getStories().then(data => setStories(data));
  }, []);

  return (
    <div>
      <h1>Welcome to Our Wedding Stories</h1>
      <div>
        <h2>Photos</h2>
        <p>{photos}</p>
      </div>
      <div>
        <h2>Videos</h2>
        <p>{videos}</p>
      </div>
      <div>
        <h2>Stories</h2>
        <p>{stories}</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

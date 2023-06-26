import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    // console.log('Do a search with:', term);
    const result = await searchImages(term);
    // console.log(result);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

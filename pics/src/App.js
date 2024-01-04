import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImage from './api'
import { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleSumit = async (term) => {
    const result = await searchImage(term);

    setImages(result)
  };

  return (
    <section>
      <SearchBar onSubmit={handleSumit} />

      <ImageList images={images}/>
    </section>
  );
}

export default App;

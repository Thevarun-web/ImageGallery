
import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => {
        if (res.ok) {
          setIsLoading(false)

        }
        return res.json()
      })
      .then(data => {
        console.log('image-data', data);
        setImages(data.hits);


      })
      .catch(err => console.log(err))



  }, [term]);
  return (
    <div className='max-w-6xl mx-auto my-5'>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No images found </h1>}
      {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1> : <div className=" grid grid-cols-3 gap-4">
        {images?.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App

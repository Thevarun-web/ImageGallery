
// eslint-disable-next-line react/prop-types
const ImageCard = ({ image }) => {
  // eslint-disable-next-line react/prop-types
  const { tags, webformatURL, user, views, downloads, likes } = image
  // eslint-disable-next-line react/prop-types
  const tag = tags.split(',');
  return (
    <>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img src={webformatURL} alt='' className='w-fully'></img>
        <div className='px-6 py-4'>
          <div className='font-bold text-purple-500 text-xl mb-2'>Photo by {user}</div>
          <ul>
            <li>
              <strong>Views:</strong>
              {views}
            </li>
          </ul>
          <ul>
            <li>
              <strong>Dowloads:</strong>
              {downloads}
            </li>
          </ul>
          <ul>
            <li>
              <strong>Likes:</strong>
              {likes}
            </li>
          </ul>
        </div>
        <div className='px-6 py-4'>
          {tag.map((tag, index) => (
            <span key={(index)} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              #{tag}

            </span>
          ))}

        </div>
      </div>
    </>
  )
}

export default ImageCard;
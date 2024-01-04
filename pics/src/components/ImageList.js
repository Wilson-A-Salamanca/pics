import ImageShow from './ImageShow'
import './ImageList.css'

function ImageList({images}) {
    const renderedImage = images.map((image) => {
      return <ImageShow image={image} key={image.id}/>
    });

    return (
      <div className='image-list'>{renderedImage}</div>
    );
  }
  
  export default ImageList;
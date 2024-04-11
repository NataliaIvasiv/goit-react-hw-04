import css from './ImageCard.module.css'
const ImageCard = ({ image, handleImageClick }) => {
  const imageData = {
    imageSrc: image.urls.regular,
    imageDescription: image.description,
    imageAltDescription: image.alt_description,
    imageAutor: image.user.name,
    imageLikes: image.likes,
  };
  return (
    <div className={css.imageCard}>
<button className={css.imageCardRef} type='click' onClick={()=>handleImageClick(imageData)}><img className={css.image} src={image.urls.small} alt={image.alt_description}  id={image.id} /></button>

    </div>
    
  )
}
export default ImageCard;

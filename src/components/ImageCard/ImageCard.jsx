import css from './ImageCard.module.css'
const ImageCard = ({ alt_description, id, src }) => {
  return (
    <div className={css.imageCard}>
<a className={css.imageCardRef} href={src}><img className={css.image} src={src} alt={alt_description} width='320px' id={id} /></a>

    </div>
    
  )
}
export default ImageCard;

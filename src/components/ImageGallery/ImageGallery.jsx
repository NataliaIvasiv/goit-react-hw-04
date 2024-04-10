import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

const ImageGallery = ({ images}) => {
    console.log(images)
    return(
    <ul className={css.imageGalleryList}>
            {images.map((image) => 
                <li className={css.imageGalleryItem} key={image.id}>
                    <ImageCard src={image.urls.small} alt={image.alt_description} id={image.id} />
                </li>
            )
            }
    </ul>
    )
}
export default ImageGallery;
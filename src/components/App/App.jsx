import axios from "axios";
import { useState, useEffect } from "react";
import css from './App.module.css'
import fetchApi from "../../api/api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  

    const handleSearch = async (query, currentPage) => {
        try {
            setLoading(true)
            //setImages([]);
            const img = await fetchApi(query, currentPage);
            setImages(img.data.results);
        
        }
        catch {
            setIsError(true)
        }
        finally {
            setLoading(false)
        }
    }
  

    return (
        <section>
        <SearchBar 
                onSearch={handleSearch} />
            {loading && <Loader/>}
            {images && <ImageGallery images={images} />}
            {isError && <p>Whops..there are some issues</p>}
            {images.length>0 &&<LoadMoreBtn handleSearch={ handleSearch} />}
            </section>
    )

};

export default App;
import { useState } from "react";
const LoadMoreBtn = ({ handleSearch }) => {
    const [currentPage, setCurrentPage] = useState(2);
    const handleClick = () => {
        handleSearch(currentPage);
        setCurrentPage(currentPage + 1)
        console.log(currentPage)
    }
    return (
        <div>
            <button type="click" onClick={handleClick}>Load more</button>
        </div>
    )
}
export default LoadMoreBtn;
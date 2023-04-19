import { useEffect, useMemo, useState } from 'react';
import './style.css';

export const PaginationComponent = ({currentPage, postsPerPage, totalPosts, paginate, setCurrentPage}) => {
    
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
    const pageNumbers = useMemo(()=>Array.from({length:Math.ceil(totalPosts/postsPerPage)}, (_, i)=>i+1), [totalPosts,postsPerPage]);

    useEffect(()=>{
        let tempNumberOfPages = [...arrOfCurrButtons];

        let dots = '...';
        let dotsLeft = '... '
        let dotsRight = ' ...'
        if (pageNumbers.length < 6) {
          tempNumberOfPages = pageNumbers
        }
        else if (currentPage >= 1 && currentPage <= 3) {
          tempNumberOfPages = [1, 2, 3, 4, dots, pageNumbers.length]
        }
    
        else if (currentPage === 4) {
          const sliced = pageNumbers.slice(0, 5)
          tempNumberOfPages = [...sliced, dots, pageNumbers.length]
        }
    
        else if (currentPage > 4 && currentPage < pageNumbers.length - 2) {               
          const sliced1 = pageNumbers.slice(currentPage - 3, currentPage)                 
          const sliced2 = pageNumbers.slice(currentPage, currentPage + 2)             
          tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumbers.length]) 
        }
        
        else if (currentPage > pageNumbers.length - 3) {                 
          const sliced = pageNumbers.slice(pageNumbers.length - 4)        
          tempNumberOfPages = ([1, dotsLeft, ...sliced])                        
        }
        
        else if (currentPage === dots) {
          // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3 
          // arrOfCurrButtons[3] = 4 + 1 = 5
          // or 
          // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
          // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
          setCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length-3] + 1) 
        }
        else if (currentPage === dotsRight) {
          setCurrentPage(arrOfCurrButtons[3] + 3)
        }
        else if (currentPage === dotsLeft) {
          setCurrentPage(arrOfCurrButtons[3] - 2)
        }
        setArrOfCurrButtons(tempNumberOfPages)

    }, [currentPage, pageNumbers])
    return(
        <div>
            <ul className='pagination'>
                {arrOfCurrButtons.map(number => (
                    <li 
                        className={currentPage===number ? "pagination-item active" : "pagination-item" }
                        key={number} 
                        onClick={()=>paginate(number)}
                    > 
                        <a href="#">{number}</a>
                    </li>))}
            </ul>
            </div>
    )
}
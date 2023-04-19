import { useEffect, useMemo, useState } from 'react';
import { Next } from "./Next";
import { Prev } from "./Prev";
import { Select } from '../Select';
import './style.css';

export const PaginationComponent = ({currentPage, postsPerPage, totalPosts, setCurrentPage, setPostsPerPage}) => {
    
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
  
  const totalPages = Math.ceil(totalPosts/postsPerPage); //calcultes total number of Pages

  const pageNumbers = useMemo(()=>
    Array.from({length:Math.ceil(totalPosts/postsPerPage)}, (_, i)=>i+1), 
  [totalPosts,postsPerPage]);//creates array og page numbers

  const paginate = pageNumber => {
    setCurrentPage(pageNumber); 
    pageNumber === 1 ? setPrevDisabled(true) : setPrevDisabled(false);
  };//to change currentPage onclick on some of numbers
  
  const nextPage = ()=> setCurrentPage(prev => {
    if(totalPages === prev) {
        setNextDisabled(false)
        return prev
    } else if(totalPages === prev + 1) {
        setNextDisabled(true)
        return prev + 1
    } 
    else { 
        setNextDisabled(false)
        return prev + 1
    }
  });

const prevPage = () =>  setCurrentPage(prev => {
    if(prev > 2) {
        setPrevDisabled(false)
        return prev - 1
    }      
    else if( prev === 2) {
        setPrevDisabled(true)
        return prev -1
    }
});

  useEffect(()=>{
      let tempNumberOfPages = [...arrOfCurrButtons];

      let dots = '...';
      let dotsLeft = '... ';
      let dotsRight = ' ...';

      if(totalPages < 2) {//[1]
        setNextDisabled(true)
        setPrevDisabled(true)
      } 
      if(currentPage === 1) {
        setPrevDisabled(true)
      } 
      if(totalPages===2 && currentPage ===1){//['1',2], '' - currentPage
        setNextDisabled(false)
      } 
      if(totalPages>2 && currentPage !== totalPages){//[1,2,'3',4], '' - currentPage
        setNextDisabled(false)
      }
      if(currentPage === totalPages){//[1,2,3,4,'5'], '' - currentPage
        setNextDisabled(true)
      }
      if (pageNumbers.length < 8) {
        tempNumberOfPages = pageNumbers
      }   
      if(currentPage > totalPages){
        setCurrentPage(totalPages)
      } 
      if(currentPage < 1 ){
        setCurrentPage(1)
      }
      else if (currentPage >= 1 && currentPage <= 3) {//[1,2,'3',4,5,6], '' - currentPage
        tempNumberOfPages = [1, 2, 3, 4, dots, pageNumbers.length]//[1,2,3,4,...6]
      }
      else if (currentPage === 4) {
        const sliced = pageNumbers.slice(0, 5)
        tempNumberOfPages = [...sliced, dots, pageNumbers.length]//[1,2,3,4,5,...,10]
      }
      else if (currentPage > 4 && currentPage < pageNumbers.length - 3) {
      //[1,2,3,4,5,6,7,8,9,10].length = 10 - 3 = 7 :   4 < currentPage < 7

        const sliced1 = pageNumbers.slice(currentPage - 3, currentPage)                
        const sliced2 = pageNumbers.slice(currentPage, currentPage + 2)             
        tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumbers.length]) 
      }
      else if (currentPage > pageNumbers.length - 4) {                 
        const sliced = pageNumbers.slice(pageNumbers.length - 4)        
        tempNumberOfPages = ([1, dotsLeft, ...sliced])                       
      }
      else if (currentPage === dots) {
        // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3 
        // arrOfCurrButtons[3] = 4 + 1 = 5
        // or 
        // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
        // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
        setCurrentPage(arrOfCurrButtons[3] + 1) 
      }
      else if (currentPage === dotsRight) {
        setCurrentPage(arrOfCurrButtons[3] + 6)
      }
      else if (currentPage === dotsLeft) {
        setCurrentPage(arrOfCurrButtons[3] - 4)
      }
      setArrOfCurrButtons(tempNumberOfPages)

  }, [currentPage, pageNumbers, totalPages]);

  return(
    <div className="pagination-wrap">
      <Prev onClick={()=>{prevPage(); setNextDisabled(false)}} disabled={prevDisabled} />
      <div>
        <ul className='pagination'>
          {arrOfCurrButtons.map(number => (
            <li 
              className={currentPage===number ? "pagination-item active" : "pagination-item" }
              key={number} 
              onClick={()=>paginate(number)}
            > 
              <a href="#">{number}</a>
            </li>))
          }
        </ul>
      </div>
      <Next onClick={()=>{nextPage(); setPrevDisabled(false)}} disabled={nextDisabled}/>
      <Select setPostsPerPage={setPostsPerPage}/>
    </div>
  )
}
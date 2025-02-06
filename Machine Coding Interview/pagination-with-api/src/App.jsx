import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard';
import './App.css'


// const ProductCard = ({image, title}) => {
//   return(
//     <div>
//       <img src={image} alt={title} />
//       <span>{title}</span>
//     </div>
//   )
// } 

let pageSize = 10;

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  // Fetch the data using (https://dummyjson.com/)

  const fetchData = async()=>{
    const data = await fetch('https://dummyjson.com/products');
    const jsonData = await data.json();
    // console.log(jsonData);
    setProducts(jsonData.products);
  }

  useEffect( ()=>{
    fetchData();
  }, []);

  // console.log(products);
  

  const totalPages = products.length;
  const noOfPage = Math.floor(totalPages/pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize;

  return (
    <>
      <h1>Pagination using React With API</h1>

      <div className='pagination-container'>
        {[...Array(10).keys()].map((n)=>(
          <span key={n} className='no-pages'>
            {n}
          </span>
        ))}
      </div>

      <div className='product-container'>
        {
          products.slice(start, end).map((product) => ( 
          <ProductCard key = {product.id} image={product.thumbnail} title={product.title}/>
        ))
        }
      </div>
    </>
  )
}

export default App

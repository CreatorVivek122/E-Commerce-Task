import {addToCart, removeFromCart, emptyCart} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';


function Main() {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.productData);
  console.warn("data in main component from saga", data);
  // const product = {
  //   name:'I phone',
  //   type:'mobile',
  //   price: 10000,
  //   color:'red'
  // }
  useEffect(()=>{
   dispatch(productList())
  },[])
  return (
    <div>
      {/* <button onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
      <div>
      <button onClick={()=>dispatch(removeFromCart(product.name))}>Remove From Cart</button>
      </div> */}
      <div>
      <button onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
      </div>
      {/* <div>
      <button onClick={()=>dispatch(productList())}>Get Product List</button>
      </div> */}
      <div className='product-container'>
        {
          data.map((item)=><div key={item.id}  className='product-item'>
            <img src={item.photo} alt=''/>
            <div>Name : {item.name}</div>
            <div>Price : {item.price}</div>
            <div>
              <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
              <button onClick={()=>dispatch(removeFromCart(item._id))}>Remove to cart</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;

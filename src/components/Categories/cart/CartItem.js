// import React, { useEffect, useState } from "react";
// import { Context } from "../../../utils/context"
// import { MdClose } from "react-icons/md";
// import axios from "axios";
// import "./CartItem.css";
// let data1;


// const CartItem = () => {
//     const [categories, setCategories] = useState([]);
//   let data1;
//   //console.log("categories:", categories.data)
//   useEffect(() => {
//     getData();
//   }, []);

  

//         const getData = async () => {
//             try {
//               const data = await axios.get(
//                 `http://localhost:1337/api/products?populate=*`
//               );
//               data1 = data.data;
//               console.log(
//                 "🚀 ~ file: ProductList.js:180 ~ getData ~ data:",
//                 data.data.data
//               );
//               console.log("dada", data1.data);
//               setCategories(data.data.data);
//             } catch (error) {
//               console.log(error);
//             }
//           };
//     return (
//         <div className="cart-products">
//             {categories?.map((item) => (
//                 <div
//                     className="search-result-item"
//                     key={item.id}
//                     onClick={() => {}}
//                 >
//                     <div className="image-container">
//                         <img
//                             src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`}
//                         />
//                     </div>
//                     <div className="prod-details">
//                         <span className="name">{item.attributes.productName}</span>
//                         {/* <MdClose
//                             className="close-btn"
//                             onClick={() => handleRemoveFromCart(item)}
//                         /> */}
//                         <div className="quantity-buttons">
//                             <span
//                                 onClick={() =>
//                                     handleCartProductQuantity("dec", item)
//                                 }
//                             >
//                                 -
//                             </span>
//                             <span>{item.attributes.quantity}</span>
//                             <span
//                                 onClick={() =>
//                                     handleCartProductQuantity("inc", item)
//                                 }
//                             >
//                                 +
//                             </span>
//                         </div>
//                         <div className="text">
//                             <span>{item.attributes.quantity}</span>
//                             <span>x</span>
//                             <span className="highlight">
//                                 <span>&#8377;</span>
//                                 {item.attributes.price *
//                                     item.attributes.quantity}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CartItem;
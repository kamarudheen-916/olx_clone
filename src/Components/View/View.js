import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../context/postContext';
import { FirebaseContext } from '../../context/context';
import { useParams } from 'react-router';

function View() {
  
  const { firebase } = useContext(FirebaseContext);
  
  const {id} = useParams()
  const [product, setProducts] = useState()
  useEffect(() => {
    firebase.firestore().collection('products').doc(id).get().then((doc) => {
      if (doc.exists) {
        setProducts(doc.data());
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [id, firebase]);
  

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
      <img src={product ? product.url:''} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {product?.price}</p>
          <span>{product?.name}</span>
          <p>{product?.category}</p>
          <span>{product?.createdAt}</span>
        </div>
        {/* {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{}</p>
            <p>{}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default View;

import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const {id} = useParams();

  return (
    <div>
      <h1 className="text-primary">ProductDetail</h1>
      <h3>Id: {id}</h3>
    </div>
  )
}

export default ProductDetail

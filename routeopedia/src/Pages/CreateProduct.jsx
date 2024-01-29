import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function CreateProduct() {
  const [backToProduct, setBackToProduct] = useState(() => { return false});

  return (
    <div>
      CreateProduct
      <br />
      <button className="btn btn-primary" onClick={() => {setBackToProduct({ backToProduct: !backToProduct})}}>
        {backToProduct && <Navigate to="/product"/>}
        Back to Product Page
      </button>
    </div>
  )
}

export default CreateProduct

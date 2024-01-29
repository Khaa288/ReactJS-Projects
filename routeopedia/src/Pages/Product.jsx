import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Product() {
  const navigate = useNavigate();
  const [goToProduct, setGoToProduct] = useState(() => {return false;})

  return (
    <div>
      <h1>Product Page</h1>
      <button className="btn btn-primary" onClick={() => { navigate("/")}}>Back</button>
      <br />
      <br />

      {/* Method 1 */}
      <button className="btn btn-success" onClick={() => { navigate("/product/create")}}>
        Add Product (Method 1: using "useNavigate")
      </button>

      {/* Method 2 */}<br />
      <Link to="/product/create">
        <button className="btn btn-success">
          Add Product (Method 2: using Link Component)
        </button>
      </Link>

      {/* Method 3 */}<br />
      <button className="btn btn-success" onClick={() => {setGoToProduct({ goToProduct: !goToProduct})}}>
        {
          goToProduct && <Navigate to="create"/>
        }
        Add Product (Method 3: using "useState")
      </button>
      
    </div>
  )
}

export default Product

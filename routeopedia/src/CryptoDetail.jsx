import React from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetail() {
  const { cryptoSymbol, id } = useParams();

  return (
    <div>
      <h1 className="text-danger">Crypto</h1>

      <h4 className="text-success">Id: {id}</h4>
      <h4>Symbol: {cryptoSymbol}</h4>
    </div>
  )
}

export default CryptoDetail

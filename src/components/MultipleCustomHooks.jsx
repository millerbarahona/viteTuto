import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

import './Effects.css';
export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0]; //!!data si existe la data, entonces author y quote van a ser extraidos de data[0]
  //si !!data es para hacer la doble negacion, si existe la data  


  return (
    <div>
      <h1>Breaking Bad Wuotes</h1>
      <hr />
      {
        loading //carga ternaria, donde si existe el loading muestra el loading o el blockquote
          ?
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          ) : //else 
          (
            <blockquote className="blockquote">
              <p className=""> {quote} </p>
              <footer className="blockquote-footer"> {author} </footer>
            </blockquote>
          )
      }
      <button
        className="btn btn-primary"
        onClick={increment}
      >
        Siguiente Quote
      </button>
    </div>
  )
}

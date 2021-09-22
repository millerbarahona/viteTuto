import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {

    return (() => {
      isMounted.current = false;
    })
  }, []);

  useEffect(() => {

    setState({
      data: null,
      loading: true,
      error: null
    })

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (isMounted.current) { //esto se hace para que solo se llame si el componente está renderizado
          setState({
            loading: false,
            error: null,
            data  //data: data
          });
        }

      })

  }, [url]);

  return state;

}

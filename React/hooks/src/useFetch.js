import { useState, useEffect } from 'react';

const useFetch = (callback, url) => {  //custom hook : (sideEffect, fetching data 분리) -> can use as module 
    const [loading, setLoading] = useState(false);
    
    const fetchInitialData = async () => {
      setLoading(true);
       const response = await fetch(url);
       const initialData = await response.json();
       callback(initialData);  //callback :pass setTodos with parameters
       setLoading(false);
    }
    useEffect(() => {
      fetchInitialData(); //비동기 함수 처리시 useEffect 콜백 함수안에 직접 넣지 말고, 함수를 따로 작성 후 불러 와라
    }, []) //after first render, there are not observe things to render again. 
  
  
    return loading;
  }

  export default useFetch;
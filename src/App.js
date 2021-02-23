
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import React, { useState } from 'react';

function App() {
  let data={title:"Waitng for Data"};
  const [todo,settodo]=useState({});
  const [isdata,setData]=useState(false);
  const [isfetching,setFetching]=useState(false);
  useEffect(()=>{
    
    async function fetchData(){
      setFetching(true);
      const response =await fetch('https://jsonplaceholder.typicode.com/posts/1')
      console.log("Response : ",response);
      let data2=await response.json();
      settodo(data2);
      setFetching(false)
      console.log("Data 2:",todo);

    }
    fetchData();
    
  },[isdata]);
  if(isfetching){
    return <div>Data Loading.........................</div>
  }
  return (
    <div>
      Hello World
      <span>Title:{todo.title}</span>
    </div>
  );
}

export default App;

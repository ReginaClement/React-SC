import React, { useEffect, useState } from 'react'
import { useAsyncError } from 'react-router-dom';

export default function EffectHook() {
   const [count, setCount] = useState(0);
   const [users, setUsers] = useState([]);
  // To make a API calls ---> componentDidMount & componentDidUpdate

   useEffect(() => {
    async function call()  {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+count);
    data.json().then(res => {
        console.log(res); 
        setUsers([res]);
        console.log(users);
    }); 
}
 call();

 return () => {
 }
  }, [count]);  

  const add = () => {
      setCount(count + 1);
  }
  return (
    <div>
        Count --> {count}
        <button onClick={add}>Add</button>
        {
            users.map(user => {
                return <p>{user.title}</p>
            })
        }
        
    </div>
  )
}

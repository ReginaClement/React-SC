import React, { useState } from 'react'

export default function Hooks() {
  // Primitive - number, string --> [value, method]
   const [count, setCount] = useState(0);
  // Objects
    const [person, setPerson] = useState({name: 'alex', age: 21})
  // Arrays
    const [names, setNames] = useState(['alex', 'anne', 'tony'])
    
  const add = () => {
    setCount(count + 1);
  }

  const updateName = () => {
      setPerson({...person, name: 'tony'})
  }

  const addName = () => {
    //const name = ['peter']  
    setNames([...names, 'peter']);      
  }

  return (
    <div>Hooks -- { count }
        Person --- {person.name} {person.age}
        {
            names.map(name => {
                return <p>{name}</p>
            })
        }
        <button onClick={addName}>Add Name</button>
    </div>
  )
}

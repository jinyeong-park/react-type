import React, { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 }
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined>()

  const onClick = () => {
    const foundUser = users.find(user => user.name.toLowerCase() === name.toLowerCase()
    )
    setUser(foundUser)
    // const foundUser = users.filter(user => user.name.toLowerCase() === name.toLowerCase())
    // setDisplay(displaySearched)

  }

  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>

    </div>

  )
}

export default UserSearch
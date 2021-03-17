import { useState } from 'react';

// add guest name, show guest names
const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name])


  }


  return (
    <div>
      <h3>Guest List</h3>
      {/* <p>{guests}</p> */}
      <ul>
        {guests.map(guest => <li>{guest}</li>)}
      </ul>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={onClick}>Add Guest</button>
    </div>
  )
}

export default GuestList
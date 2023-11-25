import React from 'react'

const ListOfContacts = (arrayOfContacts) => {
  arrayOfContacts.map(contact => {
    const {id, name, number} = contact;

    return (
        <>
            <h2>Contacts</h2>
            <ul>
                <li key={id}>
                   <h3>{name}</h3>
                   <p>{number}</p>
                </li>
            </ul>
        </>
      )
  })

}

export default ListOfContacts
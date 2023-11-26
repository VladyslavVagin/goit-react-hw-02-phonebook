import ContactUser from "components/Contact/ContactUser"
import css from './ListOfContacts.module.css'



const ListOfContacts = (arrayCont) => {
    return (
        <div>
            <ul className={css.contactList}>
             {arrayCont.map(contact => ContactUser(contact))}
            </ul>
        </div>
      ) 
}

export default ListOfContacts
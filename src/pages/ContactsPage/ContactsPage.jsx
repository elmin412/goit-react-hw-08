import { useDispatch, useSelector } from "react-redux"
import { selectIsLoading } from "../../redux/contacts/selectors"
import { useEffect } from "react"
import ContactList from "../../components/ContactList/ContactList"
import {fetchContacts} from "../../redux/contacts/operations"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactForm from "../../components/ContactForm/ContactForm"

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading)

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]) 

    
    return (
        <div>
            <ContactForm />
            <SearchBox />
            {isLoading ? ("Please wait") : (<ContactList />)}
            
        </div>
        
    )
}
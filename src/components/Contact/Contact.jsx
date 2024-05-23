import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";



export default function Contact({ contact }) {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
        <div>
            <p> <AiOutlineUser />{contact.name}</p>
            <p> <AiTwotonePhone />{contact.number}</p>
            <button  onClick={handleDelete}> Delete</button>
        </div>
    );
}
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm" 
import { useSelector } from "react-redux"
import { selectIsLoading } from "../../redux/auth/selectors"


export default function RegistrationPage() {

    const isLoading = useSelector(selectIsLoading)

    return (
        <div>
            <h1>Register your account</h1>

            {isLoading ? ("Pleease wait") : (<RegistrationForm />)}
        
        </div>

        
        
    )
}
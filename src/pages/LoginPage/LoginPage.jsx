import LoginForm from "../../components/LoginForm/LoginForm"
import { useSelector } from "react-redux"
import { selectIsLoading } from "../../redux/auth/selectors"




export default function LoginPage() {
    const isLoading = useSelector(selectIsLoading)


    return (
        <div>
            <h1>Please Log in</h1>
            {isLoading ? ("Please wait") : (<LoginForm />)}
            
        </div>
    )
}
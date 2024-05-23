import { useDispatch } from "react-redux"
import { Formik, Form, Field } from "formik"
import { logIn } from "../../redux/auth/operations"

export default function LoginForm() {

    const dispatch = useDispatch()


    const handleSubmit = (values, actions) => {

        dispatch(logIn(values))
        actions.resetForm()
    }
    return (

        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
            }}
                onSubmit={handleSubmit}
            >
                <Form autoComplete="off">
                    <label> 
                        Email
                        <Field type="email" name="email"/>
                    </label>
                    
                    <label> 
                        Password
                        <Field  type="password" name="password"/>
                    </label>
                    <button type="submit">Log In</button>
                </Form>
        </Formik>
        </>
    )
}
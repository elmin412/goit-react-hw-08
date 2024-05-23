import { Outlet } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
        <h1> Task manager welcome page 💁‍♀️</h1>
        <Outlet/>
        </div>
        
    )
}
import  AppBar  from "../AppBar/AppBar";
import { Suspense } from "react";
import style from "../Layout/Layout.module.css"

export default function Layout({children}) {

    return (
        <div className={style.navHeader}>
            <AppBar />
            <Suspense fallback={null}>
                {children}
            </Suspense>
            
        </div>
        
    )
}
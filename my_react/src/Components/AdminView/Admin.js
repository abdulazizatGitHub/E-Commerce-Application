import { useContext } from "react";
import AdminHeader from "./AdminHeader";
import { MyContext } from "../../Common/Context";
function Admin()
{
    const {admin}=useContext(MyContext)
    if(admin){
        return (
            <body>
                <AdminHeader />
            </body>
        )
    } else{
        return(
            <>
            Nothing
            </>
        )
    }
   
}
export default Admin;
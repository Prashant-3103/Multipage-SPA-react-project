import { useRouteError } from "react-router-dom"
import PageContent from "../components/PageContent"
import MainNavigation from "../components/MainNavigation";
function ErrorPage(){
    const error = useRouteError()
   let title = "an error occured";
   let message = "someething went wrong"
if(error.status === 500){
    message = error.data.message
}

if(error.status === 400)
{
  title = "not found";
  message= "could not found resource or page"
}

return<>
<MainNavigation/>
 <PageContent title ={title}>
    <p>{message}</p>
 </PageContent>

</>
}

 export default ErrorPage

import { useAuth } from "../hook/useAuth"
import { useNavigate, } from "react-router-dom";


const Createpost = () => {
  const {signOut} = useAuth();
  const navigate = useNavigate();
  

  return (
    <>
      <h1>Create new post</h1>
      <button onClick={() => signOut(() => navigate('/', {replace: true}))}>Log out</button>
    </>
  )
}

export { Createpost }
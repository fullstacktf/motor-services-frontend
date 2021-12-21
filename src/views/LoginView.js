import LoginForm  from "../components/LoginComponents/LoginForm";

export default function LoginView ({onChangeRegister,onChange}){
   
   
   return(
    <LoginForm onChangeRegister={onChangeRegister} onChange={onChange}></LoginForm>
   )

}
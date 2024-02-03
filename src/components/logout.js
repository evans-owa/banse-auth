import { GoogleLogin } from 'react-google-login';

const clientId ="457329746789-cvm5m9sn78jao05k4so6jnakgf7csdmf.apps.googleusercontent.com";

function Logout() {

    const onSuccess =() => {
        console.log("log out successfull")
    }

    return (
        <div id="signOutButton">
            <GoogleLogin 
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess ={onSuccess}
            />
        </div>
    )
}

export default Logout;
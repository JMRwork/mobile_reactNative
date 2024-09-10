import { router } from "expo-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, Auth } from "@firebase/auth";


export const login = async (auth: Auth, email: string, password: string, setSession: any) => {
    await signInWithEmailAndPassword(auth, email, password)
        .then(response => { return response.user.toJSON(); })
        .then((user) => {
            setSession(user.stsTokenManager.accessToken);
            alert("Login sucessfull");
            router.replace("(tabs)");
        }).
        catch((error) => {
            alert('Error during login: ' + error);
        });

}


export const register = async (auth: Auth, email: string, senha: string) => {
    createUserWithEmailAndPassword(auth, email, senha)
        .then((user) => {
            alert("Cadastrado");
            router.replace('/login');
        })
        .catch((err) => { alert("Erro ao cadastrar: " + err); })
}

export const novaSenha = async (auth: Auth, email: string) => {
    sendPasswordResetEmail(auth, email)
        .then(() => { alert("Email enviado."); })
        .catch(error => { alert("Erro ao enviar email: " + error) });
}
import { Button, Grid, TextInput } from "@/components";
import { Link } from "expo-router";
import { useState } from "react";
import { useSession } from "./ctx";
import { novaSenha } from "@/services/Auth";

export default function forgotPasswordScreen() {
    const { auth } = useSession();
    const [email, setEmail] = useState('');

    function handleNovaSenha() {
        novaSenha(auth, email);
    }

    const styles = {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        padding: { padding: 12 }
    }


    return (
        <Grid style={{ textAlign: "center" }}>
            <text>Esqueci a senha.</text>
            <TextInput value={email} onChange={(event) => setEmail(event.target.value)} style={{ ...styles.padding }} label="Email" mode='outlined' />
            <Button onPress={handleNovaSenha}>Enviar Email</Button>
            <Link href={"/login"}>Voltar para Login</Link>
        </Grid>)
}
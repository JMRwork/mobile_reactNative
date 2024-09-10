import { Button, TextInput } from "@/components";
import Grid from "@/components/grid";
import { Link } from "expo-router";
import { useSession } from "./ctx";
import { ScrollView } from "react-native";
import { useState } from "react";

export default function LoginScreen() {
    const { auth, signIn } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        signIn(auth, email, password);
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
        <ScrollView>
            <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <TextInput value={email} onChange={(event) => setEmail(event.target.value)} style={{ ...styles.padding }} label="Email" mode='outlined' />
                <TextInput value={password} onChange={(event) => setPassword(event.target.value)} style={{ ...styles.padding }} label="Password" secureTextEntry mode='outlined' />
                <Grid style={{
                    ...styles.padding,
                    ...styles.container,
                    textAlign: 'center'
                }}>
                    <Button mode="contained" onPress={handleLogin}>Entrar</Button>
                    {/*@ts-ignore*/}
                    <Link href="/register">
                        Criar conta
                    </Link>
                    <Link href="/forgot-password">
                        Esqueci minha senha
                    </Link>
                </Grid>
            </Grid>
        </ScrollView>
    );

}
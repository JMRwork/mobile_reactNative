import { Grid, Button, TextInput } from "@/components";
import { useSession } from "./ctx";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
import { useState } from "react";

export default function RegisterScreen() {
    const { auth, signUp } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleRegistrar() {
        signUp(auth, email, password);
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
                    <Button mode="contained" onPress={handleRegistrar}>Registrar</Button>
                    {/*@ts-ignore*/}
                    <Link href="login">
                        Login
                    </Link>
                </Grid>
            </Grid>
        </ScrollView>
    );
}
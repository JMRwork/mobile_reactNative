import { Button, TextInput } from "@/components";
import Grid from "@/components/grid";
import { Link } from "expo-router";
import { useSession } from "./ctx";
import { ScrollView } from "react-native";

export default function LoginScreen() {
    const { signIn } = useSession();

    function handleLogin() {
        alert('Login Sucessfull');
        signIn();

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
                <TextInput style={{ ...styles.padding }} label="Email" mode='outlined' />
                <TextInput style={{ ...styles.padding }} label="Password" secureTextEntry mode='outlined' />
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
import { Grid, Button, TextInput } from "@/components";
import { useSession } from "./ctx";
import { Link } from "expo-router";
import { ScrollView } from "react-native";

export default function RegisterScreen() {
    const { signUp } = useSession();

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
                    <Button mode="contained" onPress={() => signUp()}>Registrar</Button>
                    {/*@ts-ignore*/}
                    <Link href="login">
                        Login
                    </Link>
                </Grid>
            </Grid>
        </ScrollView>
    );
}
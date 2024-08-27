import { Grid } from "@/components";
import { Link } from "expo-router";

export default function forgotPasswordScreen() {
    return (
        <Grid style={{ textAlign: "center" }}>
            <text>Esqueci a senha.</text>
            <Link href={"/login"}>Voltar para Login</Link>
        </Grid>)
}
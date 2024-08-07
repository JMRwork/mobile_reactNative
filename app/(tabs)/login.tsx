import { Card, TextInput } from "@/components";
import { router } from "expo-router";

export default function LoginScreen() {
    function handleLogin() {
        alert('Login Sucessfull');
        router.replace('/(tabs)');
    }
    return (
        <Card title="Login" haveButton handleButton={handleLogin} buttonText="Submit">
            <TextInput label="Email" mode='outlined' />
            <TextInput label="Password" secureTextEntry mode='outlined' />
        </Card>
    );
}
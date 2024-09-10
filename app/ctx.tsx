import { router } from "expo-router";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from 'firebase/auth'
import { setStorageItemAsync, useStorageState } from "./useStorageState";
import { login, register } from "@/services/Auth";

const firebaseConfig = {
    apiKey: "AIzaSyAivTGjBK_zyPsoNsLB4K5gy8b9QBorReo",
    authDomain: "tp3-react-native.firebaseapp.com",
    databaseURL: "https://tp3-react-native-default-rtdb.firebaseio.com",
    projectId: "tp3-react-native",
    storageBucket: "tp3-react-native.appspot.com",
    messagingSenderId: "466770307081",
    appId: "1:466770307081:web:104386a591f34a694df0d8"
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)

const AuthContext = createContext<{
    signIn: (auth: Auth, email: string, password: string) => void;
    signOut: () => void;
    signUp: (auth: Auth, email: string, password: string) => void;
    session?: string | null;
    firebaseApp: FirebaseApp | null;
    auth: Auth;
    theme?: string | null;
    changeTheme: (theme: string) => void;
}>({
    signIn: () => null,
    signOut: () => null,
    signUp: () => null,
    session: null,
    firebaseApp: firebaseApp,
    auth: auth,
    theme: "dark",
    changeTheme: (theme: string) => null,
    // @ts-ignore
});

// This hook can be used to access the user info.
export function useSession() {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }

    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [session, setSession] = useStorageState('session');
    const [theme, setTheme] = useStorageState('theme');

    return (
        <AuthContext.Provider
            value={{
                signIn: (auth: Auth, email: string, password: string) => {
                    // Perform sign-in logic here
                    login(auth, email, password, setSession);
                    // @ts-ignore
                },
                signOut: () => {
                    setSession(null);
                    return router.replace("/login");
                },
                signUp: (auth: Auth, email: string, password: string) => {
                    register(auth, email, password);
                },
                changeTheme: (value) => {
                    setTheme(value);
                },
                session,
                firebaseApp,
                auth,
                theme,
            }}>
            {children}
        </AuthContext.Provider>
    );
}
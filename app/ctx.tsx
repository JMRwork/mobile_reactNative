import { router } from "expo-router";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const AuthContext = createContext<{
    signIn: () => void;
    signOut: () => void;
    signUp: () => void;
    session?: string | null;
}>({
    signIn: () => null,
    signOut: () => null,
    signUp: () => null,
    session: null,
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
    const [session, setSession] = useState("");

    return (
        <AuthContext.Provider
            value={{
                signIn: () => {
                    // Perform sign-in logic here
                    setSession("user");
                    // @ts-ignore
                    return router.replace("(tabs)");
                },
                signOut: () => {
                    setSession("");
                    return router.replace("/login");
                },
                signUp: () => {
                    // Perform sign-in logic here
                    // @ts-ignore
                    return router.replace("/login");
                },
                session
            }}>
            {children}
        </AuthContext.Provider>
    );
}
import Root from "./app/+html";
import RootLayout from "./app/_layout"
import { SessionProvider } from "./app/ctx";
export default function App() {
    return
    <Root>
        <SessionProvider>
            <RootLayout />
        </SessionProvider>;
    </Root>
}
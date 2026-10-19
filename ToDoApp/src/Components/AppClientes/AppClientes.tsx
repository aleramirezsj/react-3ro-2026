import ClientesList from "../ClientesList/ClientesList";
import { ClienteProvider } from "../ClienteContext/ClienteProvider";

export default function AppClientes() {
    return (
        <ClienteProvider>
            <ClientesList/>
        </ClienteProvider>
    );
}
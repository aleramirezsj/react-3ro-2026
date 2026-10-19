import type { ReactNode } from "react";
import useClientesApi from "../../Hooks/useClientesApi";
import { ClienteContext } from "./ClienteContext";

export function ClienteProvider({ children }: { children: ReactNode }) {
  const clienteApi = useClientesApi();

  return (
    <ClienteContext.Provider value={clienteApi}>
      {children}
    </ClienteContext.Provider>
  );
}

import { createContext, useContext } from "react";
import type useClientesApi from "../../Hooks/useClientesApi";

export type ClienteContextType = ReturnType<typeof useClientesApi>;

export const ClienteContext = createContext<ClienteContextType | null>(null);

export function useClienteContext(): ClienteContextType {
  const context = useContext(ClienteContext);

  if (context === null) {
    throw new Error("useClienteContext debe usarse dentro de ClienteProvider");
  }

  return context;
}

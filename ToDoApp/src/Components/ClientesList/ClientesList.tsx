import { useState } from "react";
import Cliente from "../Cliente/Cliente";
import AgregarEditarCliente from "../AgregarEditarCliente/AgregarEditarCliente";
import { Card, Button, CardActions, CircularProgress, CardContent} from "@mui/material";
import type ICliente from "../../Interfaces/ICliente";
import { useClienteContext } from "../ClienteContext/ClienteContext";

 export default function ClientesList() {
    const { clientes,
            cargando,
            error,
            agregarCliente,
            editarCliente,
            obtenerClientesEliminados,
            obtenerClientes,
            openModal,
            setOpenModal,
            verEliminados,
            setVerEliminados,
            clienteSeleccionado,
            setClienteSeleccionado
           } = useClienteContext();
    
    return (
        <div>
            <h2>Lista de Clientes</h2>
                {cargando && <CircularProgress aria-label="Loading…" />}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {clientes.map((cliente) => (
                        <Cliente key={cliente.id} 
                                cliente={cliente} 
                                />
                ))}
                {openModal && (
                    <AgregarEditarCliente>
                        <Card>
                        <CardContent>
                          <h2>Agregar/Editar Cliente</h2>
                          <label htmlFor="firstname">Nombre:</label>
                          <input type="text" id="firstname" name="firstname" 
                          defaultValue={clienteSeleccionado?.firstname ?? ""}/>
                          <label htmlFor="lastname">Apellido:</label>
                          <input type="text" id="lastname" name="lastname" 
                          defaultValue={clienteSeleccionado?.lastname ?? ""}/>
                          <label htmlFor="dni">DNI:</label>
                          <input type="text" id="dni" name="dni" 
                          defaultValue={clienteSeleccionado?.dni ?? ""}/>
                          <label htmlFor="address">Dirección:</label>
                          <input type="text" id="address" name="address" 
                          defaultValue={clienteSeleccionado?.address ?? ""}/>
                        </CardContent>
                        <CardActions sx={{ justifyContent: "center" }}>
                          <Button variant="contained" onClick={async () => {
                            const nuevoCliente = {
                              firstname: (document.getElementById("firstname") as HTMLInputElement).value,
                              lastname: (document.getElementById("lastname") as HTMLInputElement).value,
                              dni: (document.getElementById("dni") as HTMLInputElement).value,
                              address: (document.getElementById("address") as HTMLInputElement).value,
                              localidadId: 1,
                            };
                            if (clienteSeleccionado) {
                              await editarCliente(clienteSeleccionado.id, { ...nuevoCliente, id: clienteSeleccionado.id });
                              setClienteSeleccionado(null);
                            } else {
                              await agregarCliente(nuevoCliente);
                            }
                            setOpenModal(false);
                          }}>
                            Guardar
                          </Button>

                          <Button variant="outlined" onClick={() => setOpenModal(false)}>
                            Cerrar
                          </Button>
                        </CardActions>
                      </Card>
                    </AgregarEditarCliente>
                )}
                <button onClick={() => setOpenModal(true)}>Agregar Cliente</button>
                <button onClick={async () => {
                     setVerEliminados(!verEliminados);
                    if (verEliminados===false) {
                        await obtenerClientesEliminados();
                    } else {
                        await obtenerClientes();
                    }
                }}>
                    {verEliminados ? "Ver Clientes Activos" : "Ver Clientes Eliminados"}
                </button>

        </div>
    );
}
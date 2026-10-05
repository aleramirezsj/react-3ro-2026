import Card  from "@mui/material/Card";
import CardHeader  from "@mui/material/CardHeader";
import CardContent  from "@mui/material/CardContent";
import CardActions  from "@mui/material/CardActions";
import Button  from "@mui/material/Button";
import Swal from "sweetalert2";
import type { SweetAlertOptions } from "sweetalert2";
import type ICliente  from "../../Interfaces/ICliente";

 const configDialogEliminar: SweetAlertOptions = {
                            title: "¿Estás seguro?",
                            text: "No podrás revertir este cambio.",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Sí, eliminarlo"
                        }



export default function Cliente({ cliente, eliminarCliente, setOpenModal, setClienteSeleccionado }: 
            { cliente: ICliente; eliminarCliente: (id: number) => void; 
                                setOpenModal: (open: boolean) => void; 
                                setClienteSeleccionado: (cliente: ICliente | null) => void }) {
    const onEliminar=(id: number) => {
                        Swal.fire(configDialogEliminar).then((result) => {
                            if (result.isConfirmed) {
                                eliminarCliente(id);
                            }
                        });
                    }
    return (
            <Card>
                <CardHeader title={`${cliente.firstname} ${cliente.lastname}`} />
                <CardContent>
                    <p>DNI: {cliente.dni}</p>
                    <p>Dirección: {cliente.address}</p>
                </CardContent>

                <CardActions sx={{ justifyContent: "center" }}>
                    <Button variant="contained" onClick={() => {
                        setOpenModal(true); 
                        setClienteSeleccionado(cliente)}}>
                        Editar
                    </Button>
                    <Button variant="outlined" onClick={() => onEliminar(cliente.id)}>
                        Eliminar
                    </Button>
                </CardActions>
            </Card>
    );
}
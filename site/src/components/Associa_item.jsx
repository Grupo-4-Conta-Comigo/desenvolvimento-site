import Swal from "sweetalert2";
import { useEffect } from "react";
import api from "../config/api";

function Associa_item(props){

    useEffect(() => {
        Swal.fire({
            title: 'Observação do pedido (opcional):',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: false,
            confirmButtonText: 'Concluir',
            showLoaderOnConfirm: true,
            preConfirm: (obs) => {
                api.post("/itens-comanda/criar/" ,{
                    idComanda: sessionStorage.clienteAtual,
                    idProduto: props.prod.id,
                    observacao: obs
                })
                    .then((response) => {
                        console.log("RESPONSE: ", response)
                    window.location.href = "http://localhost:3000/adicionarItens";
                    }).catch((err) => {
                        console.log(err.response.data.errors[0].defaultMessage)
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
          })
    }, []);

    return(
       <div></div>
    );
}

export default Associa_item;
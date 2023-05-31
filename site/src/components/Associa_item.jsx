import Swal from "sweetalert2";
import { useEffect } from "react";
import api from "../config/api";
import { useNavigate } from "react-router-dom";

function Associa_item(props){

    const navigate = useNavigate()

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
                    navigate("/adicionarItens");
                    
                    
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
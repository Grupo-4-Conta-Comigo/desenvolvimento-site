import apagar from "../_assets/img/icons/btnApagar.png"
import api from "../config/api";

function ItensIndv(props) {
    return (
        <tr>
            <td>{props.item.produto.nome}</td>
            <td></td>
            <td>R$ {props.item.produto.preco}</td>
            <td></td>
            <td>{props.item.observacao ? props.item.observacao : "--"}</td>
            <td onClick={
                () => {
                    api.delete("/itens-comanda/deletar/" + props.item.id)
                        .then((response) => {
                            window.location.reload()
                        }).catch((err) => {
                            console.error(err)
                        })
                }
            }><img src={apagar} alt="" /></td>
        </tr>
    );
}

export default ItensIndv;


function Lista_Pessoas_Option(props){
    return (
            <option value={props.cliente.id}>{props.cliente.nomeDono}</option>
    );
}

export default Lista_Pessoas_Option;
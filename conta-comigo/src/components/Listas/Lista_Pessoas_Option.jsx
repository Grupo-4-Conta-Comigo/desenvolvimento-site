

function Lista_Pessoas_Option(props){
    return (
            <option value={props.cliente.nomeDono}>{props.cliente.nomeDono}</option>
    );
}

export default Lista_Pessoas_Option;
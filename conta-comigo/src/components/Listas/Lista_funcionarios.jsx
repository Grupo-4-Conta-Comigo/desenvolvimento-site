import styles from "../../_assets/css/modules/listas modules/lista_funcionarios.module.css"
import garcom from "../../_assets/img/icons/garcom.png"
import editar from "../../_assets/img/icons/btnEditar.png"
import apagar from "../../_assets/img/icons/btnApagar.png"
import Swal from "sweetalert2"
import api from "../../config/api"
import { useNavigate } from "react-router-dom"
function Lista_funcionarios(props){

    const navigate = useNavigate()

    return(
            <div className={styles.funcionario}>
                <div className={styles.icon}> <img src={garcom} alt="" /></div>
                <div className={styles.dados}>
                <div className={styles.nome}>{props.garcom.nome}</div>
                <div className={styles.email}>{props.garcom.email}</div>
                </div>
                <div className={styles.editar}>
                    <img src={editar}  />
                </div>
                <div onClick={()=>{
                    Swal.fire({
                        title: 'Apagar ' + props.garcom.nome + '?',
                        text: "Você não poderá reverter!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        cancelButtonText: 'Cancelar',
                        confirmButtonText: 'Sim, quero deletar!'
                      }).then((result) => {
                        if (result.isConfirmed) {
            
                          api.delete("/restaurantes/garcons/" + props.garcom.id)
                            .then((response) => {
                                window.location.reload()
                            }).catch((err) => {
                              console.error(err)
                            })
                        }
                      })
                }} className={styles.apagar}>
                <img src={apagar}  />
                </div>
           
            </div>
    );
}

export default Lista_funcionarios;
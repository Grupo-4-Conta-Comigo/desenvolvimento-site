import styles from "../_assets/css/modules/cardapio.module.css"
import editar from "../_assets/img/icons/btnEditar.png"
import apagar from "../_assets/img/icons/btnApagar.png"
import Swal from "sweetalert2";

function Lista_itens(){
    return (
        <tr className={styles.dados}>
                        <td>1</td>
                        <td className={styles.espaco}>{/* espaço */}</td>
                        <td>Porção Batata frita</td>
                        <td className={styles.espaco}>{/* espaço */}</td>
                        <td>R$ 15,00</td>
                        <td className={styles.espaco}>{/* espaço */}</td>
                        <td className={styles.editarApagar}><img src={editar} alt="" /></td>
                        <td className={styles.editarApagar}><img src={apagar} alt="" onClick={
                            ()=>{
                                Swal.fire({
                                  title: 'Deseja mesmo apagar?',
                                  text: "Você não poderá reverter!",
                                  icon: 'warning',
                                  showCancelButton: true,
                                  confirmButtonColor: '#3085d6',
                                  cancelButtonColor: '#d33',
                                  cancelButtonText: 'Cancelar',
                                  confirmButtonText: 'Sim, quero deletar!'
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    Swal.fire(
                                      'Item deletado!',
                                      'O item foi deletado do seu cardápio',
                                      'success'
                                    )
                                  }
                                })
                            }
                        } /></td>
                    </tr>
    );
}

export default Lista_itens;
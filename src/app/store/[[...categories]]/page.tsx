/**Esta es una ruta dinámica 
 * 
 * /store/{valor}
*/

//Se crea una interface para recibir los parametros
interface CategoryProps {
    params: {
        category: string
    }
}


export default function category(props: CategoryProps){

    const { category } = props.params
    console.log(props)
    return(
        <h1>Categoría dinámica: {category}</h1>
    )

}
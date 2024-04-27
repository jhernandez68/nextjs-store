
//siempre hay que retornar el children en el layout

interface CategoriesProps {
    params: {
        categories: string[];
    };
    searchParams: { //Este objeto sirve para recibir los parametros ejemplo ?id
        search?: string;
    };
}


export default function Categories (props: CategoriesProps){
    console.log(props)
    const {categories} = props.params
    console.log(categories)
    return (
        <h1> Categoria dinámica: {categories}</h1>
    )
}
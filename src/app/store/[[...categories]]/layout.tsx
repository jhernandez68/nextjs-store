
//siempre hay que retornar el children en el layout

interface CategoriesProps {
    params: {
        categories: string[];
    };
    searchParams: {
        search?: string;
    };
}


export default function Categories (props: CategoriesProps){
    const {categories} = props.params
    console.log(categories)
    return (
        <h1>Categoria dinámica: {categories}</h1>
    )
}
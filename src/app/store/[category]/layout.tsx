
//siempre hay que retornar el children en el layout
export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <div>
            <nav>Navegación de las categorias</nav>
            {children} 
        </div>
    )
}
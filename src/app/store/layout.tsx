//layour de la ruta store

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <div>
            <nav>Layout de store</nav>
            {children} 
        </div>
    )
}
//layour de la ruta store

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <main>
            <nav>Layout de store</nav>
            {children} 
        </main>
    )
}
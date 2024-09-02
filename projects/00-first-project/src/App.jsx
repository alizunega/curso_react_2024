import './App.css'

//deberia sacar esto de aqui y crear un nuevo componente
//componente tarjetas de lenguajes
export function App() {
    return (
        <article className='pr-project-article'>
            <header className='pr-project-article-header'>
                <img src="../src/assets/react.png" alt="Imagen Logo React" className='pr-project-article-img' />
                <div className='pr-project-article-info'>
                    <strong>Reactjs</strong>
                    <span>framework</span>
                </div>

            </header>
            <aside>
                <button>Me gusta</button>
            </aside>
        </article>

    )
}
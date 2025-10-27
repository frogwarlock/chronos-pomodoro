// Usa PascalCase
import './styles/theme.css'
import './styles/global.css'
import { Heading } from './components/Heading'

export function App() {

    return (
        // (React) Fragment <> </> para não adicionar nós desnecessários na árvore DOM
        <> 
            <Heading />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorem magni quisquam nisi sed, voluptatem repellat neque unde aspernatur fugit expedita excepturi sunt accusantium ad reprehenderit reiciendis in quae quas.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aperiam aliquid facere odio repellat quia eum est odit maxime deserunt consectetur eaque natus consequatur blanditiis a dolorum vero, at corrupti?
            </p>
        </>
    );
}


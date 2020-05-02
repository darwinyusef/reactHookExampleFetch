import React from "react";
import { Link } from "react-router-dom";

const Servicios = () => {

    const [usuarios, setUsuarios] = React.useState([])

    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        // console.log(users)
        setUsuarios(users)
    }

    return (
        <div class="container">
            <div class="row">
                <ul>
                    {
                        usuarios.map(item => (
                            <li key={item.id}>
                                <Link to={`/users/${item.id}`}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Servicios


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Navbar = () => {
    return (    
        <nav >
            <Link to='/' >Home</Link>
            <Link to='/create-todo' >Create A Todo</Link>
            <Link to='/completed-todos' >Completed Todos</Link>
            {/* <Link to='/view-todo/:id' >View Todo</Link> */}
            {/* <Link to='/edit-todo/:id' >Edit Todo</Link> */}
        </nav>
    )
}

export default Navbar

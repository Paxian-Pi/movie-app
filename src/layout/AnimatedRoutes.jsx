import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../screens/Home'

const AnimatedRoutes = () => {
    
    const location = useLocation()
    
    return (
        <AnimatePresence location={location} key={location.pathname}>
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation.jsx';
import Listing from './Pages/Listing.jsx';
import Registration from './Pages/Registration.jsx';

export default function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Listing />} />
                <Route path="/list" element={<Listing />} />
                <Route path="/create" element={<Registration />} />
            </Routes>
        </Router>
    );
}

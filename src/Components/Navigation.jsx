import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import LanguageDropdown from './LanguageDropdown.jsx';

export default function Navigation() {
    const { t } = useTranslation();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Logo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav>
                        <Nav.Link as={NavLink} to="/list">
                            {t('menu:list-link')}
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/create">
                            {t('menu:create-link')}
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <LanguageDropdown />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

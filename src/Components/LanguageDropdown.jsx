import { useTranslation } from 'react-i18next';
import { NavDropdown } from 'react-bootstrap';

export default function LanguageDropdown() {

    const { i18n } = useTranslation();

    const languages = i18n.store.data[i18n.resolvedLanguage].countries;

    const changeLanguage = (languageCode) => {
        i18n.changeLanguage(languageCode);
    };

    return (
        <NavDropdown title={languages[i18n.language]}>
            {Object.entries(languages).map(([code, label]) => (
                <NavDropdown.Item key={code} onClick={() => changeLanguage(code)}>
                    {label}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    );
}

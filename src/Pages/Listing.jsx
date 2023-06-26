import { useTranslation } from 'react-i18next';

export default function Listing() {

    const { t } = useTranslation('pages');
    
    return (
        <div>
            <h1>{t('page:list.title')}</h1>
        </div>
    );
}

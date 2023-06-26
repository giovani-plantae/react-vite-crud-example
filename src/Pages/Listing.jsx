import { useTranslation } from 'react-i18next';

export default function Listing() {

    const { t } = useTranslation('pages');
    
    return (
        <div>
            <h1>{t('page:list')}</h1>
        </div>
    );
}

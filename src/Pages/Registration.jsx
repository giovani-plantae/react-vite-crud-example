import { useTranslation } from 'react-i18next';

export default function Registration() {

    const { t } = useTranslation('pages');

    return (
        <div>
            <h1>{t('page:create')}</h1>
        </div>
    );
}
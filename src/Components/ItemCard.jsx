import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Col, Button } from 'react-bootstrap';

export default function ItemCard({ item, handleEdit, handleRemove }) {
    const { t, i18n } = useTranslation();
    const [imageUrl, setImageUrl] = useState(null);
    const [humanizedDate, setHumanizedDate] = useState('');

    useEffect(() => {
        const imageUrlObjectURL = URL.createObjectURL(item.image);
        setImageUrl(imageUrlObjectURL);

        const now = new Date();
        const diff = item.timestamp - now;
        const humanized = formatDiff(diff);
        setHumanizedDate(humanized);

        return () => {
            URL.revokeObjectURL(imageUrlObjectURL);
        };

    }, []);

    function formatDiff(diff) {

        const formatter = new Intl.RelativeTimeFormat(i18n.language, { numeric: 'auto' });

        // Defina as regras de formatação para diferentes intervalos de tempo
        const thresholds = [
            { unit: 'year', value: 365 },
            { unit: 'month', value: 30 },
            { unit: 'day', value: 1 },
            { unit: 'hour', value: 1 / 24 },
            { unit: 'minute', value: 1 / (24 * 60) },
            { unit: 'second', value: 1 / (24 * 60 * 60) },
        ];

        for (const { unit, value } of thresholds) {
            const unitDiff = diff / (value * 60 * 60 * 1000);
            if (Math.abs(unitDiff) >= 1) {
                const roundedDiff = Math.round(unitDiff);
                return formatter.format(roundedDiff, unit);
            }
        }

        return '';
    }

    return (
        <Col key={item.id}>
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    style={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{humanizedDate}</Card.Text>

                    <Button variant="primary" onClick={() => handleEdit(item.id)}>
                        {t('form:edit')}
                    </Button>
                    <Button variant="danger" onClick={() => handleRemove(item.id)} className="ms-2">
                        {t('form:remove')}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Col, Button } from 'react-bootstrap';

export default function ItemCard({ item, handleEdit, handleRemove }) {

    const { t } = useTranslation();
    const [image, setImage] = useState(null);

    async function getImageUrl(itemId) {

        const base64Img = localStorage.getItem(`image-${itemId}`);

        return fetch(base64Img)
            .then(res => res.blob())
            .then(blob => setImage(URL.createObjectURL(blob)));
    }

    useEffect(() => {
        getImageUrl(item.id);
    }, []);

    return (
        <Col key={item.id}>
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src={image}
                    style={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{new Date(item.timestamp).toLocaleString()}</Card.Text>

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

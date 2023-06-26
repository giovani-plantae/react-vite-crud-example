import { useTranslation } from 'react-i18next';
import { Card, Col, Button } from 'react-bootstrap';

export default function ItemCard({ item, handleEdit, handleRemove }) {

    const { t } = useTranslation();

    return (
        <Col key={item.id}>
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src={localStorage.getItem(`image-${item.id}`)}
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
};

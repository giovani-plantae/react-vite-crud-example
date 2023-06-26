import { useForm } from 'react-hook-form';
import { Container, Button, Card, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Registration() {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Card className="mt-4">
                    <Card.Header>
                        <h1>{t('page:create.title')}</h1>
                    </Card.Header>
                    <Card.Body>
                        <Form.Group controlId="title">
                            <Form.Label>{t('form:fields.title.label')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('form:fields.title.placeholder')}
                                {...register('title', {
                                    required: {
                                        value: true,
                                        message: t('validation:required', { field: t('form:fields.title.label') }),
                                    },
                                    maxLength: {
                                        value: 255,
                                        message: t('validation:maxLength', { field: t('form:fields.title.label'), maxLength: 255 }),
                                    },
                                })}
                                isInvalid={!!errors.title}
                            />
                            {errors.title && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.title.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group controlId="image">
                            <Form.Label>{t('form:fields.image.label')}</Form.Label>
                            <Form.Control
                                type="file"
                                accept=".png, .jpeg, .jpg, .gif"
                                {...register('image', {
                                    required: {
                                        value: true,
                                        message: t('validation:fileRequired', { field: t('form:fields.image.label') }),
                                    },
                                })}
                                isInvalid={!!errors.image}
                            />
                            {errors.image && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.image.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">
                            {t('form:submit')}
                        </Button>
                    </Card.Footer>
                </Card>
            </Form>
        </Container>
    );
}

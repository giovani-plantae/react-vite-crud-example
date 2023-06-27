import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Pagination } from 'react-bootstrap';
import ItemCard from '../Components/ItemCard.jsx';
import useIndexedDB from '../Services/DataBase/IndexedDBHook.js';

export default function Listing() {
    const { t } = useTranslation();

    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

    const indexedDB = useIndexedDB('crud-example', 'items');
    const { getAll } = indexedDB;

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAll();
            setItems(data);
        };

        fetchData();
    }, []);

    // Paginação
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }

    function handleEdit(itemId) {
        console.log(`Editar item com ID ${itemId}`);
    }

    function handleRemove(itemId) {
        console.log(`Excluir item com ID ${itemId}`);
    }

    return (
        <Container>
            <h1>{t('page:list.title')}</h1>
            {renderItemList(currentItems, handleEdit, handleRemove)}
            {renderPagination(items, itemsPerPage, currentPage, handlePageChange)}
        </Container>
    );
}

function renderItemList(items, handleEdit, handleRemove) {
    const { t } = useTranslation();

    if (!items.length)
        return <p>{t('page:list.empty')}</p>;

    return (
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
            {items.map((item) => (
                <ItemCard key={item.id} {...{ item, handleEdit, handleRemove }} />
            ))}
        </Row>
    );
}

function renderPagination(items, itemsPerPage, currentPage, handlePageChange) {
    if (items.length <= itemsPerPage) {
        return null;
    }

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages });

    return (
        <Pagination className="justify-content-center mt-3">
            {pageNumbers.map((_, index) => (
                <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </Pagination.Item>
            ))}
        </Pagination>
    );
}

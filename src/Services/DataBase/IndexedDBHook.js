export default function useIndexedDB(databaseName, objectStoreName) {
    function openDB(name, version, upgradeCallback) {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(name, version);

            request.onerror = (event) => {
                reject(event.target.error);
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                resolve(db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                upgradeCallback(db);
            };
        });
    }

    function createObjectStore(db) {
        if (!db.objectStoreNames.contains(objectStoreName)) {
            db.createObjectStore(objectStoreName, {
                keyPath: 'id',
                autoIncrement: true,
            });
        }
    }

    async function add(data) {
        const db = await openDB(databaseName, 1, createObjectStore);
        const transaction = db.transaction(objectStoreName, 'readwrite');
        const store = transaction.objectStore(objectStoreName);

        return store.add(data);
    }

    async function getAll() {
        const db = await openDB(databaseName, 1, createObjectStore);
        const transaction = db.transaction(objectStoreName, 'readonly');
        const store = transaction.objectStore(objectStoreName);
        const request = store.getAll();

        return new Promise((resolve, reject) => {
            request.onerror = (event) => {
                reject(event.target.error);
            };

            request.onsuccess = (event) => {
                resolve(event.target.result);
            };
        });
    }

    return {
        add,
        getAll,
    };
}

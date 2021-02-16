import React from 'react';

interface Repository {
    full_name: string,
    description: string,
    owner: {
        login: string,
        avatar_url: string,
    }
}

const Repository: React.FC = () => {
    return (
        <h1>Repositórios</h1>
    );
}

export default Repository;gh
import { useState } from 'react';

function App() {
    return (
        <>
            <HeaderWithButton />
            <br />
            <br />
            <Header title="tapendra 2" />
        </>
    );
}

function HeaderWithButton() {
    const [title, setTitle] = useState('My name is tapendra');

    function updateTask() {
        setTitle('My name is ' + Math.random());
    }

    return (
        <>
            <button onClick={updateTask}>Update the title</button>
            <br />
            <Header title={title} />
        </>
    );
}

function Header({ title }) {
    return <>{title}</>;
}

export default App;

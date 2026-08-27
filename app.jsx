import { useState } from "react";
import "./App.css";

function Header() {
    return (
        <header>
            <h2>React Practice</h2>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <p>© 2026 React Practice</p>
        </footer>
    );
}

function Card({ title, description }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Button({ text, onClick }) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

function Form() {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <Button text="Submit" onClick={() => {}} />

        </form>
    );
}

function App() {

    const [count, setCount] = useState(0);

    return (
        <>
            <Header />

            <main>

                <h1>React Components</h1>

                <Card
                    title="Reusable Card"
                    description="This card uses props."
                />

                <Card
                    title="Another Card"
                    description="React components can be reused."
                />

                <div className="counter">

                    <h2>Counter: {count}</h2>

                    <Button
                        text="Increase"
                        onClick={() => setCount(count + 1)}
                    />

                    <Button
                        text="Decrease"
                        onClick={() => setCount(count - 1)}
                    />

                </div>

                <Form />

            </main>

            <Footer />
        </>
    );
}

export default App;

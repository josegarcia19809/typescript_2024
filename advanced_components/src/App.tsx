import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from './components/Container.tsx';

function App() {
    return (
        <main>
            <Input label="Your name:" id="name" type="text"/>
            <Input label="Your age:" id="age" type="number"/>
            <p>
                <Button>A Button</Button>
            </p>
            <p>
                <Button href="https://google.com">A Link</Button>
            </p>
            <p>
                <Container as={Button} onClick={() => {
                }} type="button">Click me</Container>
            </p>
        </main>
    );
}

export default App;
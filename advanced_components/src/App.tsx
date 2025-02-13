import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from './components/Container.tsx';
import {Demo} from "./components/Card.tsx";
import {DemoIconButton} from "./components/IconButton.tsx";
import {DemoList} from "./components/List.tsx";

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
            <Demo/>
            <DemoIconButton />
            <DemoList/>
        </main>
    );
}

export default App;
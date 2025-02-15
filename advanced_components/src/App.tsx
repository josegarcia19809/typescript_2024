import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Form from "./components/Form.tsx";

function App() {

    function handleSave(data: unknown) {
        const extractedData = data as { name: string, age: string };
        console.log(extractedData);
    }

    return (
        <main>
            <Form onSave={handleSave}>
                <Input label="Name" id="name" type="text"/>
                <Input label="Age" id="age" type="number"/>
                <p>
                    <Button>Save</Button>
                </p>
            </Form>
        </main>
    );
}

export default App;
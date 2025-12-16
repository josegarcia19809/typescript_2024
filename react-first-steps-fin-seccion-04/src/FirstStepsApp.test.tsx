import {afterEach,describe, expect, test, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import {FirstStepsApp} from "./FirstStepsApp.tsx";

// vi.mock("./shopping-cart/ItemCounter", () => ({
//     ItemCounter: () => <div data-testid="ItemCounter"></div>
// }));

const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="ItemCounter" />;
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe("FirstStepsApp", () => {

    afterEach(() => {
        vi.clearAllMocks();
    });

    test("Should match snapshot", () => {
        const {container} = render(<FirstStepsApp/>);

        expect(container).toMatchSnapshot();
    })

    test("Should render the correct number of ItemCounter components", () => {
        render(<FirstStepsApp/>);
        const itemCounters = screen.getAllByTestId("ItemCounter");
        expect(itemCounters.length).toBe(3);

    })

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2',
            quantity: 1,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro Controller',
            quantity: 2,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Smash',
            quantity: 5,
        });
    });
})
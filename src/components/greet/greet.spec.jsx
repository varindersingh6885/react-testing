import {render, screen} from '@testing-library/react';

import Greet from './greet';

describe("Greet Component Group 1", () => {
    it("Greet renders successfully", () => {
        render(<Greet />);
    })

    // .only can be used with both describe() and test()
    // test.only will only run the test with .only in the current suite
    // test.only("This is the only test to be executed", () => {

    // })

    test.skip("Redundant Test", () => {

    })

    test("Greet renders name succussfully", () => {
        const name = "Varinder"
        render(<Greet name={name} />);
        const nameElement = screen.getByText(name);
        expect(nameElement).toBeInTheDocument();
    })
})

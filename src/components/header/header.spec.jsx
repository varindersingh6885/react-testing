import {render, screen} from '@testing-library/react'

import Header from './header';

describe("Header Component", () => {
    test("Check nav contains Home", () => {
        render(<Header />);
        const home = screen.getByText(/home/i);
        expect(home).toBeInTheDocument();
    })

    it("Check nav contains About", () => {
        render(<Header />)
        const about = screen.getByText(/about/i);
        expect(about).toBeInTheDocument();
    })

    it("Check nav contains Contact", () => {
        render(<Header />)
        const contact = screen.getByText(/contact/i);
        expect(contact).toBeInTheDocument();
    })
})
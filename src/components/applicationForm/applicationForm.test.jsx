import { render, screen } from "@testing-library/react";
import ApplicationForm from "./applicationForm";


// Various default roles for HTML elements
// https://www.w3.org/TR/html-aria/#docconformance

// Options for getByRole method
// https://testing-library.com/docs/queries/byrole/#api

/*
Options :

    getByRole(
        role: string,
        options?: {
            hidden?: boolean = false,
            name?: TextMatch,  // https://www.tpgi.com/what-is-an-accessible-name/
            description?: TextMatch,
            selected?: boolean,
            checked?: boolean,
            pressed?: boolean,
            suggest?: boolean,
            current?: boolean | string,
            expanded?: boolean,
            queryFallbacks?: boolean,
            level?: number,
        }
    ): HTMLElement
*/

describe("Application Form Component", () => {
    test("Form renders successfully", () => {
        render(<ApplicationForm />)

        const h1Element = screen.getByRole('heading', {
            level: 1
        });
        expect(h1Element).toBeInTheDocument();

        const h2Element = screen.getByRole("heading", {
            level: 2
        })
        expect(h2Element).toBeInTheDocument();

        const paragraphElement = screen.getByText("All fields are mandatory");
        expect(paragraphElement).toBeInTheDocument();

        const nameElement = screen.getByLabelText('Name', {
            name: 'Name',
            selector: 'input'
        });
        expect(nameElement).toBeInTheDocument();
        
        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'textarea'
        })
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText("Username");
        expect(nameElement3).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: "Bio"
        })
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions');
        expect(termsElement2).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    })
})
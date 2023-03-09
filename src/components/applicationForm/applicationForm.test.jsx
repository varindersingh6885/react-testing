import { render, screen } from "@testing-library/react";
import ApplicationForm from "./applicationForm";


// Various default roles for HTML elements
// https://www.w3.org/TR/html-aria/#docconformance

describe("Application Form Component", () => {
    test("Form renders successfully", () => {
        render(<ApplicationForm />)

        const nameElement = screen.getByRole('textbox');
        expect(nameElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    })
})
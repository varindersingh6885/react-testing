import { render, screen } from "@testing-library/react";

import Skills from "./skills";

describe("Skills Component", () => {
    const skills = ["HTML", "CSS", "JavaScript", "React"];

    test("renders successfully", () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test("renders a list of skills", () => {
        render(<Skills skills={skills} />);

        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    })
})
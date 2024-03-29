import { render, screen, logRoles } from "@testing-library/react";

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

    test("Login button renders successfully", () => {
        render(<Skills skills={skills} />);
        const loginButtonElement = screen.getByRole('button', {
            name : "Login"
        });
        expect(loginButtonElement).toBeInTheDocument()
    })

    test("Start Learning button is not rendered", () => {
        render(<Skills skills={skills} />);
        const startLearningButtonElement = screen.queryByRole('button', {
            name : "Start Learning"
        })
        expect(startLearningButtonElement).not.toBeInTheDocument();
    })

    test("Start Learning button renders eventually", async () => {
        const view = render(<Skills skills={skills} />);

        logRoles(view.container); // prints the associated roles present in the DOM tree

        screen.debug(); // debug() is used to print the DOM tree
        const startLearningButtonElement = await screen.findByRole('button', {
            name: "Start Learning"
        }, {
            timeout: 2000
        })

        screen.debug();
        expect(startLearningButtonElement).toBeInTheDocument();
    })

    test("Check if Login button renders using manual query", () => {
        const {container} = render(<Skills skills={skills}/>);
        const loginButtonElement = container.querySelector('#login-btn');
        expect(loginButtonElement).toBeInTheDocument();
    })
})
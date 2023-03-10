const ApplicationForm = () => {
    return (
        <>
            <h1>Job Application Form</h1>
            <h2>Punjab, India</h2>
            <p>All fields are mandatory</p>
            <div>
                <span title="Close">X</span>
            </div>
            <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id="name" placeholder="Username"
                        value="Varinder"
                        onChange={() => { }}
                    />
                </div>
                <div>
                    <p>Following element is duplicate input field, for the purpose of demonstrating getByLabelText options</p>
                    <label>
                        Name
                        <textarea type="text" />
                    </label>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea type="text" id="bio" />
                </div>
                <div>
                    <label htmlFor="job-location">Job location</label>
                    <select id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="IN">India</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms" />
                        I agree to the terms and conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    );
}

export default ApplicationForm;
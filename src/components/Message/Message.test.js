import {render} from "@testing-library/react";
import Message from "./Message";

describe("Message", () =>{
    it('matches snapshot online', function () {
        const component = render(<Message author="Denis" text="Hello"/>)

        expect(component).toMatchSnapshot()
    })

    it("should contain message text 'Hello'", ()=>{
        const components = render(<Message/>);
        const placeholder = components.getByText(/Hello/i);
        expect(placeholder).toHaveClass("post-empty")

        // render(<Message author="Denis" text="Hello" />)
        // const  wrapper = screen.getByText("/Hello/i")
        // expect(wrapper).toBeInTheDocument()
    })
})
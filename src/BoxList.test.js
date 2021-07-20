import { fireEvent, render } from '@testing-library/react';
import BoxList from './BoxList';

// smoke test
it("should render without error", () => {
    render(<BoxList />);
});

// snapshot test
it("should match the snapshot", () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

// business logic tests
/** kind of weird, the react-testing-library philosophy is to select elements from
 *  the DOM based on text or a value that the user can see. This example app doesn't
 * render much text, so the options for elements to select are limited.
 */

it("should add box", () => {
    const {getByText, getByLabelText, queryByText} = render(<BoxList />);
    
    expect(queryByText("X")).not.toBeInTheDocument();

    const backgroundColor = getByLabelText("Background Color");
    const width = getByLabelText("Width");
    const height = getByLabelText("Height");
    const addBtn = getByText("Add Box");

    fireEvent.change(backgroundColor, { target: { value: "red"}});
    fireEvent.change(width, { target: { value: "200"}});
    fireEvent.change(height, { target: { value: "150"}});
    fireEvent.click(addBtn);

    const removeBtn = getByText("X")
    expect(removeBtn).toBeInTheDocument(); // button rendered with the colored div
})

it("should remove the box", () => {
    const {getByText, getByLabelText, queryByText} = render(<BoxList />);
    
    expect(queryByText("X")).not.toBeInTheDocument();

    const backgroundColor = getByLabelText("Background Color");
    const width = getByLabelText("Width");
    const height = getByLabelText("Height");
    const addBtn = getByText("Add Box");

    fireEvent.change(backgroundColor, { target: { value: "red"}});
    fireEvent.change(width, { target: { value: "200"}});
    fireEvent.change(height, { target: { value: "150"}});
    fireEvent.click(addBtn);

    const removeBtn = getByText("X")
    expect(removeBtn).toBeInTheDocument(); // button rendered with the colored div

    fireEvent.click(removeBtn);
    expect(queryByText("X")).not.toBeInTheDocument();
})
import { render } from '@testing-library/react';
import Box from './Box';

// smoke test
it("should render without error", () => {
    render(<Box />);
});

// snapshot test
it("should match snapshot", () => {
    const {asFragment} = render(<Box backgroundColor="red" width="200" height="150" />);
    expect(asFragment()).toMatchSnapshot();
})
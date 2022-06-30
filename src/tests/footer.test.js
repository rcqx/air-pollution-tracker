import { screen, render } from "@testing-library/react";
import Footer from "../components/Footer";
import renderer from 'react-test-renderer';

describe('Testing the Footer component', () => {
  test('Footer component renders properly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('When Footer gets rendered inner text is displayed correctly', () => {
    render(<Footer />);
    screen.debug();
    expect(screen.getByText('Copyright © | Jose R. Castaños')).toBeTruthy();
  });
});


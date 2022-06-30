import {
  screen, render,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducerNa } from '../redux/countries/fetchData';
import america from '../images/america.png';
import Footer from '../components/Footer';

const mockStore = () => {
  const preloadedState = {
    northAmerica: [
      {
        country: 'Canada',
        population: 38005238,
        capital: 'Ottawa',
        region: 'North America',
        flags: 'https://flagcdn.com/w320/ca.png',
        latlng: [
          60,
          -95
        ]
      },
      {
        country: 'United States',
        population: 329484123,
        capital: 'Washington, D.C.',
        region: 'North America',
        flags: 'https://flagcdn.com/w320/us.png',
        latlng: [
          38,
          -97
        ]
      },
    ],
  };
  return configureStore({
    preloadedState,
    reducer: {
      northAmerica: reducerNa,
    }
  })
}

const mockHome = () => {
  const fetchNa = [
    {
      country: 'Canada',
      population: 38005238,
      capital: 'Ottawa',
      region: 'North America',
      flags: 'https://flagcdn.com/w320/ca.png',
      latlng: [
        60,
        -95
      ]
    },
    {
      country: 'United States',
      population: 329484123,
      capital: 'Washington, D.C.',
      region: 'North America',
      flags: 'https://flagcdn.com/w320/us.png',
      latlng: [
        38,
        -97
      ]
    },
  ];

  const na = fetchNa;

  return (
    <div className="wrapper" >
      <div className="homeContainer">
        <img id="america" src={america} alt="american-continent" />
        <div className="mainTitle">
          <h1>Cities</h1>
          <p>Total: 56</p>
        </div>
      </div>
      <p id="stats">Select capital city by region</p>
      <div className="regionCont">
        <div role="button" tabIndex={0} className="na">{`North America ${na.length} capital cities`}</div>
      </div>
      <Footer />
    </div >
  );
}

describe('Testing the Home component', () => {
  test('Renders mocked home component properly', () => {
    const tree = renderer.create(mockHome()).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('When app runs north america region is displayed correctly', () => {
    render(<Provider store={mockStore()}>{mockHome()}</Provider>);
    expect(screen.getByAltText("american-continent")).toBeTruthy();
  });

  test('When app runs north america 2 capital cities are loaded correctly', () => {
    render(<Provider store={mockStore()}>{mockHome()}</Provider>);
    expect(screen.getAllByText("North America 2 capital cities")).toBeTruthy();
  });
});

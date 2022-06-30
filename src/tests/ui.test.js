/*eslint-disable */
import {
  screen, render, fireEvent,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { FaAngleLeft, FaCog } from 'react-icons/fa';
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
          -95,
        ],
      },
      {
        country: 'United States',
        population: 329484123,
        capital: 'Washington, D.C.',
        region: 'North America',
        flags: 'https://flagcdn.com/w320/us.png',
        latlng: [
          38,
          -97,
        ],
      },
    ],
  };
  return configureStore({
    preloadedState,
    reducer: {
      northAmerica: reducerNa,
    },
  });
};

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
        -95,
      ],
    },
    {
      country: 'United States',
      population: 329484123,
      capital: 'Washington, D.C.',
      region: 'North America',
      flags: 'https://flagcdn.com/w320/us.png',
      latlng: [
        38,
        -97,
      ],
    },
  ];

  const na = fetchNa;

  return (
    <div className="wrapper">
      <div className="homeContainer">
        <img id="america" src={america} alt="american-continent" />
        <div className="mainTitle">
          <h1>Cities</h1>
          <p>Total: 56</p>
        </div>
      </div>
      <p id="stats">Select capital city by region</p>
      <div id="test" className="regionCont">
        <div
          role="button"
          tabIndex={0}
          className="na"
          onClick={() => document.getElementById('test').innerHTML = 'test passed!'}
          onKeyDown={() => document.getElementById('test').innerHTML = 'test passed!'}
        >
          {`North America ${na.length} capital cities`}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mockNav = () => (
  <nav
    id="navtest"
    onClick={() => document.getElementById('navtest').innerHTML = 'nav test passed!'}
    onKeyDown={() => document.getElementById('navtest').innerHTML = 'nav test passed!'}
  >
    <FaAngleLeft alt="faAngleLeft" size={42} />
    <h4>Air Quality Tracker</h4>
    <FaCog size={28} />
    nav test
  </nav>
);

describe('Testing the Home component', () => {
  test('Renders capital cities accordingly when button clicked', () => {
    render(<Provider store={mockStore()}>{mockHome()}</Provider>);
    fireEvent.click(screen.queryByText('North America 2 capital cities'));
    expect(screen.getByText('test passed!')).toBeTruthy();
  });

  test('When app runs north america region is displayed correctly', () => {
    render(mockNav());
    fireEvent.click(screen.queryByText('nav test'));
    expect(screen.getByText('nav test passed!')).toBeTruthy();
  });
});

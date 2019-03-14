import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import axios from 'axios'
import { App, Grid, GridItem } from './App'
import fakeApi from './fakeApi.json'

jest.mock('axios')
it('fetches mocked data', () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: fakeApi }))
})
it('renders app without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it('renders grid correctly', () => {
  const app = renderer.create(<Grid apiData={fakeApi} />).toJSON()
  expect(app).toMatchSnapshot()
})
it('renders grid item correctly', () => {
  const app = renderer.create(<GridItem item={fakeApi[0]} />).toJSON()
  expect(app).toMatchSnapshot()
})

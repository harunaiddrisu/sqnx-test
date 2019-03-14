import React, { Component } from 'react'
import axios from 'axios'
import {
  appStyles,
  gridContainerStyles,
  firstRowStyles,
  secondRowStyles,
  thirdRowStyles,
} from './styles.js'

const API_URL = ' http://demo9164717.mockable.io'

export class App extends Component {
  _isMounted = false
  state = { apiData: this.props.apiData || [] }

  componentDidMount() {
    this._isMounted = true
    axios
      .get(API_URL)
      .then(({ data }) => {
        // handle success
        // console.log(data)
        if (this._isMounted) {
          this.setState(() => ({ apiData: data }))
        }
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const { apiData = [] } = this.state
    return <Grid apiData={apiData} />
  }
}

export const Grid = ({ apiData }) => {
  return (
    <div {...appStyles}>
      <div {...gridContainerStyles}>
        <section {...firstRowStyles}>
          {apiData.length !== 0 &&
            apiData
              .slice(0, 5)
              .map((item, index) => <GridItem key={item.id} item={item} />)}
        </section>
        <section {...secondRowStyles}>
          {apiData.length !== 0 &&
            apiData
              .slice(5, 9)
              .map((item, index) => <GridItem key={item.id} item={item} />)}
        </section>
        <section {...thirdRowStyles}>
          {apiData.length !== 0 &&
            apiData
              .slice(9, 15)
              .map((item, index) => <GridItem key={item.id} item={item} />)}
        </section>
      </div>
    </div>
  )
}

export const GridItem = ({ item }) => (
  <div>
    <figure>
      <img src={item.artwork} alt={item.title} />
      <figcaption>
        <h3>{`${item.id}. ${item.title}`}</h3>
        {item.content}
      </figcaption>
    </figure>
  </div>
)

export default App

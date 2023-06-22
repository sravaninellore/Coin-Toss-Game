// Write your code here
import {Component} from 'react'

import './index.css'

let tempHead = null

class CoinToss extends Component {
  state = {heads: 0, tails: 0}

  coinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    // console.log(tossResult)

    if (tossResult === 0) {
      this.setState(previousState => ({
        heads: previousState.heads + 1,
      }))
    } else {
      this.setState(previousState => ({
        tails: previousState.tails + 1,
      }))
    }
  }

  render() {
    const {heads, tails} = this.state
    const total = heads + tails
    let tossResultImage
    let isInitial

    if (total === 0) {
      isInitial = true
    } else {
      isInitial = false
    }

    if (heads === tempHead) {
      tossResultImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    } else {
      tossResultImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      tempHead = heads
    }

    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="sub-heading">Heads (or) Tails</p>
          {isInitial && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="toss-result-image"
            />
          )}
          {!isInitial && (
            <img
              src={tossResultImage}
              alt="toss result"
              className="toss-result-image"
            />
          )}
          <button className="button" type="button" onClick={this.coinToss}>
            Toss Coin
          </button>
          <div className="heads-tails-container">
            <p className="toss-result-text">Total: {total}</p>
            <p className="toss-result-text">Heads: {heads}</p>
            <p className="toss-result-text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

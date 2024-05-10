import React from 'react'

const Scoreboard = ({score,GameInstructions}) => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-heading">
                    <h1>CURRENT SCORE</h1>
                </div>
                <div className="col-display" id="scoreHome" onClick={GameInstructions}>{score}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Scoreboard
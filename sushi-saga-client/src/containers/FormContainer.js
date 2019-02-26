import React, { Fragment } from 'react'

const FormContainer = ({budget, addMoneyToWallet}) => {
  return(
    <Fragment>
      <div className="form">
        <form onSubmit={(event) => addMoneyToWallet(event)} >
          Enter the amount you would like to add to your wallet:
          <input type="number" name="amount" />
        </form>
      </div>
    </Fragment>
  )
}


export default FormContainer

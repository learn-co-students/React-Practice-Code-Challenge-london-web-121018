import React from 'react';

 const Form = (props) => {
   return (
      <React.Fragment>
         <h2 style={{ position: 'absolute', marginLeft: '20px'}}>Add Money To Your Wallet:</h2>
         <form className='wallet' onSubmit={props.handleFormSubmit}>
            <input type='number' name='amount' placeholder="Amount..." />
            <input type='submit' value='Add to wallet'/>
         </form>
      </React.Fragment>
   );
}

 export default Form;

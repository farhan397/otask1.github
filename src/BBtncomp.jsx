import React from 'react'

const BBtncomp = ({handleupclick}) => {
    
  return (
    <>
        <div class="selectbutton1">
                <button class="buttonp" disabled>
                  Previous
                </button>
                <button class="buttonn" 
                 onClick={handleupclick}
                >
                  Next
                </button>
        </div>
    </>
  )
}

export default BBtncomp

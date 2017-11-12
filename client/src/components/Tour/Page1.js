import React from 'react'
import NoAuthNav from './NoAuthNav'
import NoAuthFooter from './NoAuthFooter'
import TourBox from './TourBox'

const Page1 = () => (
  <div style={styles.tourFlexContainer}>
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={styles.tourBox}>
          <TourBox/>
        </div>
      </div>
    </div>
  </div>
)

const styles={
  tourFlexContainer:{
    display: 'flex',
    flexDirection: 'column',
  },
  header:{
    height: '10vh',
  },
  footerContainer:{
    paddingBottom: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: 'white',
  },
  tourBox:{
    minHeight: '600px',
    minWidth: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  }
}

export default Page1;
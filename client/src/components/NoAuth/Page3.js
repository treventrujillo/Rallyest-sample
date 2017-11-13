import React from 'react'
import NoAuthNav from './NoAuthNav'
import NoAuthFooter from './NoAuthFooter'
import TourBox from './TourBox'

const Page3 = () => (
  <div style={styles.tourFlexContainer}>
    <div style={styles.header}>
      <NoAuthNav/>
    </div>
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
    <div style={styles.footerContainer}>
      <div>
        <NoAuthFooter/>
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

export default Page3;
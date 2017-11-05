import React from 'react'
import NoAuthNav from './NoAuthNav'

const Page1 = () => (
  <div style={styles.tour_flex_container}>
    <div style={styles.header}>
      <NoAuthNav/>
    </div>
    <div style={styles.tour_box_container}>
      <div style={styles.tour_box}>
        hello, Mr tour box goes here.
      </div>
    </div>
    <div style={styles.footer_container}>
      <div>
        Hello, Mr footer with links goes here.
      </div>
    </div>
  </div>
)

const styles={
  tour_flex_container:{
    display: 'flex',
    flexDirection: 'column',
  },
  header:{
    height: '10vh',
  },
  tour_box_container:{
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tour_box:{
  },
  footer_container:{
    height: '20vh',
    backgroundColor: 'white',
  },
}

export default Page1;
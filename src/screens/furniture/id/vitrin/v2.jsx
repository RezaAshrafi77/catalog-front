import React from 'react'
import { connect } from 'react-redux'

export const V2 = (props) => {
  return (
    <div>V2</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(V2)
import React from 'react'
import { connect } from 'react-redux'

export const V1 = (props) => {
  return (
    <div>V1</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(V1)

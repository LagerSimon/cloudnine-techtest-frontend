import React from "react"

const context = require.context("../icons", true, /\.svg$/)

export default ({ type, ...styles }) => {
  const contextKey = context
    .keys()
    .find(key => key.substring(2, key.length - 4) === type)
  if (!contextKey) return null

  return <img {...styles} src={context(contextKey)} alt="" />
}

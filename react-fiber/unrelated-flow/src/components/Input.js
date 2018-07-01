import React from 'react'

const style = {
  input: {
    fontSize: '1.5rem',
    lineHeight: 1.2,
    width: '90%',
    padding: 5,
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    boxShadow: '1.3px 1.3px 1.3px black',
  },
}

const Input = ({ value, onChange }) => (
  <section>
    <input
      type="text"
      style={style.input}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="please input text"
    />
    <p>{value}</p>
  </section>
)
export default Input

import React from 'react'

function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }
  
  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
  }

function BoxColor(props) {
    const {r, g, b} = props
    const some = `rgb(${r}, ${g}, ${b})`

    return (
        <div style={{backgroundColor: some, height: '100px'}}>
            <p>{some}</p>
            <p>{ConvertRGBtoHex(r, g, b)}</p>
        </div>
    )
}

export default BoxColor

import React, { useEffect, useState } from "react";

export function Input(props) {
  const [type, setType] = useState(props.type || "text");
  const [name, setName] = useState(props.name || null);
  const [value, setValue] = useState(props.value || null);
  const [placeholder, setPlaceholder] = useState(props.placeholder || null);

  if (value)
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        style={props.style}
        onChange={e => {
          props.change(e);
          setValue(e.target.value);
        }}
      />
    );
  else
    return (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        style={props.style}
        onChange={e => {
          props.change(e);
          setValue(e.target.value);
        }}
      />
    );
}

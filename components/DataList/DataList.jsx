import styles from "./DataList.module.scss";
import StyledInput from "../StyledInput/StyledInput";
import { v4 as uuid } from "uuid";
import { useState } from "react";

/* Component for custom dropdown input
uses UUIDv4 for generating unique id for new fields and
lifting up to parent element with function onUserSelect(id, value)=>{}
Example:
      <DataList
        options={options} - data list in format [{id, value}, {id, value},...]
        placeholder={"Begin to write your option..."}
        onUserSelect={userSelect} - userSelect can operate with id and value
      />
 */

//method for string to capitalize first letter in component output
//TODO: need refactoring after, due to future or maybe english translation to capitalize all words.
const capitalize = (str) => {
  return (str && str[0].toUpperCase() + str.slice(1).toLowerCase()) || "";
};

export default (props) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [id, setId] = useState("");
  const [expanded, setExpanded] = useState(false);

  //filtering props to show only matching in dropdown
  const updateFilter = (event) => {
    let value = "";
    if (event) {
      value = event.target.value.toLowerCase();
    }
    let filteredOptions = [];
    for (let i = 0; i < props.options.length; i++) {
      const item = props.options[i];
      if (item.value.toLowerCase().indexOf(value) != -1) {
        filteredOptions.push({
          id: item.id,
          value: item.value,
        });
      }
    }
    //processing option when there is no familiar variant
    if (filteredOptions.length < 1) {
      filteredOptions.push({
        id: uuid(),
        value: event.target.value,
      });
    }
    setFilteredOptions(filteredOptions);
    setTextValue(value);
  };

  const handleClick = (option) => {
    props.onUserSelect(option.id, capitalize(option.value));
    setTextValue(option.value);
    setId(option.id);
    hideList();
  };

  const showList = () => {
    setExpanded(true);
  };

  const hideList = () => {
    setExpanded(false);
  };

  let displayList = filteredOptions.map((option) => {
    return (
      <div
        data-id={option.id}
        key={option.id}
        onClick={() => handleClick(option)}
      >
        {option.value}
      </div>
    );
  });

  return (
    <div>
      <input
        type='text'
        value={textValue}
        onChange={updateFilter}
        onFocus={showList}
        placeholder={props.placeholder}
      />
      <div>{expanded && displayList}</div>
    </div>
  );
};

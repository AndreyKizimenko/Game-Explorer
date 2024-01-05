import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiltersProps } from "../services/types";

const Search = ({ setParams }: FiltersProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [delayedInput, setDelayedInput] = useState('');

    // Update delayedInput with a delay when inputValue changes
    useEffect(() => {
      const delayTimer = setTimeout(() => {
        setDelayedInput(searchValue);
      }, 1000);
  
      return () => clearTimeout(delayTimer); // Clear the timeout on cleanup
  
    }, [searchValue]);

    useEffect(() => {
      // Your logic here, using delayedInput
       
      setParams((prevValue) => {
        const updatedParams = { ...prevValue };
        
        if (updatedParams.search && delayedInput.length === 0) {        
          delete updatedParams.search;
        } else {        
          updatedParams.search = delayedInput;
        }
        return updatedParams;
      });
  
    }, [delayedInput]);

/*   const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = e.target.value;    
    setParams((prevValue) => {
      const updatedParams = { ...prevValue };
      if (updatedParams.search && currentInputValue.length === 0) {        
        delete updatedParams.search;
      } else {        
        updatedParams.search = currentInputValue;
      }
      return updatedParams;
    });
  } */
  return (
    <InputGroup>
      <InputLeftElement>
        <Search2Icon />
      </InputLeftElement>
      <Input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="Search" />
    </InputGroup>
  );
};

export default Search;

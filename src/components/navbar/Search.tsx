import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiltersProps } from "../../services/types";

const Search = ({ setParams }: FiltersProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [delayedInput, setDelayedInput] = useState<string>("");

  // Update delayedInput with a delay when inputValue changes
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelayedInput(searchValue);
    }, 1000);

    return () => clearTimeout(delayTimer); 
  }, [searchValue]);

  useEffect(() => {    

    setParams((prevValue) => {
      const updatedParams = { ...prevValue };

      if (updatedParams.search && delayedInput?.length === 0) {
        delete updatedParams.search;
      } else {
        updatedParams.search = delayedInput;
      }
      return updatedParams;
    });
  }, [delayedInput]);


  return (
    <InputGroup>
      <InputLeftElement>
        <Search2Icon />
      </InputLeftElement>
      <Input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Search"
      />
    </InputGroup>
  );
};

export default Search;

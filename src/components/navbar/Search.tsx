import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useFiltersStore from "../../filterStore";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setSearch = useFiltersStore((s) => s.setSearch);
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
    setSearch(delayedInput);
  }, [delayedInput, setSearch, location.pathname, navigate]);

  const handleChange = () => {
    if (location.pathname !== "/") {      
      navigate("/");
    }
  };
  return (
    <InputGroup>
      <InputLeftElement>
        <Search2Icon />
      </InputLeftElement>
      <Input
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleChange();
        }}
        value={searchValue}
        placeholder="Search"
      />
    </InputGroup>
  );
};

export default Search;

import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <Search2Icon />
      </InputLeftElement>
      <Input onChange={(e) => console.log(e.target.value)} placeholder="Search" />
    </InputGroup>
  );
};

export default Search;

import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = (props) => {
  return (
    <div>
      <Input type="text" placeholder="Search" onChange={event=>props.handleSearch(event)} value={props.search} />
    </div>
  )
}

export default Search;
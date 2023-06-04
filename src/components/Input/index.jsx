import { Container } from "./styles";

import { GoSearch } from "react-icons/go";
import { BiUpload } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
export function Input({ searching, file, ...rest }) {
  return (
    <Container>
      {searching ? <GoSearch size={24} /> : <></>}
      {file ? <BiUpload className="uploadIcon" size={34} /> : <></>}
      {file ? <label htmlFor="fileInput">Selecione um arquivo</label> : null}
      {file ? (
        <input id="fileInput" type="file" {...rest} />
      ) : (
        <input {...rest} />
      )}
    </Container>
  );
}

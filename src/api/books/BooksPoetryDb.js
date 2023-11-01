import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../core/main/Endpoints";
import NavBar from "../../core/main/navigation/NavBar";
import BoxTestCrud from "../../tools/BoxTestCrud";

const BooksPoetryDB = () => {
  return (
    <Box>
      <NavBar link="/BooksDash" route2="/PoetryDB" />
      <Box />
      <BoxTestCrud />
      <Box>
        <BoxApiInfo baseEndpoint="https://poetrydb.org" />
        <Endpoints header="GET" endpoint="/author" />
      </Box>
    </Box>
  );
};

export default BooksPoetryDB;
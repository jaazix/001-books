import { Flex } from "../styled.components";

import Header from "./header";
import Content from "./content";

const Main = (): JSX.Element => {
  return (
    <>
      <Flex>
        <Header />
        <Content />
      </Flex>
    </>
  );
};

export default Main;
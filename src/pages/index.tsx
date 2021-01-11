import React from "react";
import { Alert, Component } from "../components/Alert";
import { Modal } from "../components/Modal";
import { Flex } from "../components/Flex";
import { Grid } from "../components/Grid";

function Index() {
  return (
    <>
      <Alert />
      <Component>hoge</Component>
      <Modal isShow />
      {/* <Flex /> */}
      <Grid />
    </>
  );
}

export default Index;

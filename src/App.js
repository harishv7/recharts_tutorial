import React, { useCallback } from "react";
import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

function App() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="App">
      <Container maxW={"5xl"}>
        <Stack
          textAlign="center"
          align="center"
          spacing={{ base: 8 }}
          py={{ base: 20 }}
        >
          <Heading fontWeight={600} fontSize={{ base: "5xl" }}>
            My Charts
          </Heading>
          <Text color={"gray.500"} fontSize={"3xl"}>
            This is a collection of all my charts made with Recharts.
          </Text>
          <Box
            backgroundColor={"orange"}
            p={10}
            borderRadius={10}
            color={"white"}
            fontWeight={"bold"}
            cursor={"pointer"}
          >
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <Text>Drop the files here ...</Text>
              ) : (
                <Text>
                  Drag 'n' drop some files here, or click to select files
                </Text>
              )}
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default App;

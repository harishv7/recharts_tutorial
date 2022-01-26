import React, { useCallback, useState } from "react";
import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import Nav from "./Nav";
import LineChartContainer from "./LineChart";
import AreaChartContainer from "./AreaChart";
import { AreaChart } from "recharts";

function App() {
  const [data, setData] = useState([]);

  const parseFile = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        console.log(results);
        setData(results.data);
      },
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    if (acceptedFiles.length) {
      parseFile(acceptedFiles[0]);
    }
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="App">
      <Nav />
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
      <Container height={"2xl"} width={"8xl"}>
        {/* <LineChartContainer data={data} /> */}
        <AreaChartContainer data={data} />
      </Container>
    </div>
  );
}

export default App;

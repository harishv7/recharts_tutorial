import React, { useCallback, useState } from "react";
import { Button, Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import Nav from "./Nav";
import LineChartContainer from "./LineChart";
import AreaChartContainer from "./AreaChart";
import BarChartContainer from "./BarChart";
import PieChartContainer from "./PieChart";
import RadialBarChartContainer from "./RadialBarChart";

function App() {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("line");

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
          <Stack spacing={4} direction="row" align="center">
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => setChartType("line")}
            >
              Line Chart
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => setChartType("area")}
            >
              Area Chart
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => setChartType("bar")}
            >
              Bar Chart
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => setChartType("pie")}
            >
              Pie Chart
            </Button>
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => setChartType("radialbar")}
            >
              Radial Bar Chart
            </Button>
          </Stack>
        </Stack>
      </Container>
      {chartType === "line" && <LineChartContainer data={data} />}
      {chartType === "area" && <AreaChartContainer data={data} />}
      {chartType === "bar" && <BarChartContainer data={data} />}
      {chartType === "pie" && <PieChartContainer data={data} />}
      {chartType === "radialbar" && <RadialBarChartContainer data={data} />}
    </div>
  );
}

export default App;

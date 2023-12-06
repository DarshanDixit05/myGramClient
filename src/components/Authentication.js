import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import {useNavigate} from "react-router-dom";
  import {React, useState, useEffect} from 'react';
  import axios from 'axios';
  const BASE_URL = "http://localhost:1999/api/v1"
  
function Authentication(){
  const navigate = useNavigate();
  const [inputData, setInputData] = useState();
  const [password, setPassword] = useState();

  const handleInputData = (e) =>{
    e.preventDefault();
    setInputData(e.target.value);
  }
  const handlePassword = (e) =>{
    e.preventDefault();
    setPassword(e.target.value);
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.post(BASE_URL+"/login", {inputData, password});
      console.log(response);
      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  }
    return(
        <Container
        maxW="lg"
        py={{
          base: '12',
          md: '24',
        }}
        px={{
          base: '0',
          sm: '8',
        }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack
              spacing={{
                base: '2',
                md: '3',
              }}
              textAlign="center"
            >
              <Heading
                size={{
                  base: 'xs',
                  md: 'sm',
                }}
              >
                Log in to your account
              </Heading>
              <Text color="fg.muted">
                Don't have an account? <Link onClick={()=>navigate("/signup")}>Sign up</Link>
              </Text>
            </Stack>
          </Stack>
          <Box
            py={{
              base: '0',
              sm: '8',
            }}
            px={{
              base: '4',
              sm: '10',
            }}
            bg={{
              base: 'transparent',
              sm: 'bg.surface',
            }}
            boxShadow={{
              base: 'none',
              sm: 'md',
            }}
            borderRadius={{
              base: 'none',
              sm: 'xl',
            }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="input_data">Email / Username</FormLabel>
                  <Input id="input_data" type="text" name="input_data" onChange={handleInputData}/>
                </FormControl>
              </Stack>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input id="password" type="password" name="password" onChange={handlePassword}/>
                </FormControl>
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="text" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button onClick={handleSubmit}>Login in</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    )
}

  export default Authentication;
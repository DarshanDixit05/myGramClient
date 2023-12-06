import {React, useState, useEffect} from 'react'
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
  import axios from "axios";
  const BASE_URL = "http://localhost:1999/api/v1"

function Signup() {
  const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleUsername = (e) =>{
    e.preventDefault();
    setUserName(e.target.value);
  }
  const handleEmail = (e) =>{
    e.preventDefault();
    setEmail(e.target.value);
  }
  const handlePassword = (e) =>{
    e.preventDefault();
    setPassword(e.target.value);
  }
  const handleReenteredPassword = (e) =>{
    e.preventDefault();
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(password.length>0 && confirmPassword.length>0 && password===confirmPassword){
      try {
        const response = await axios.post(BASE_URL+"/signup", {username, email, password});
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
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
            Sign Up
          </Heading>
          <Text color="fg.muted">
            Already have an account? <Link onClick={()=>navigate("/login")}>Log In</Link>
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
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input id="username" type="text" name="username" onChange={handleUsername}/>
            </FormControl>
          </Stack>
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" name="email" onChange={handleEmail}/>
            </FormControl>
          </Stack>
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" name="password" onChange={handlePassword}/>
            </FormControl>
          </Stack>
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="confirmPassword">Re-Enter Your Password</FormLabel>
              <Input id="confirmPassword" type="password" name="confirmPassword"onChange={handleReenteredPassword} />
            </FormControl>
          </Stack>
          <Stack spacing="6">
            <Button onClick={handleSubmit}>Sign Up</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
  )
}

export default Signup

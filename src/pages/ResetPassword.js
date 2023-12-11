import React, {useState, useContext} from 'react'
import {useNavigate} from "react-router-dom";
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
import {IdContext} from "../Context.js";
import axios from 'axios';
const BASE_URL="http://localhost:1999/api/v1"

const ResetPassword = () => {
    const navigate = useNavigate();
    const [newPassword , setNewPassword] = useState();
    const {forgotPasswordToken} = useContext(IdContext);
    const handleInputData = (e) =>{
        e.preventDefault();
        setNewPassword(e.target.value);
    }
    const handleSubmit = async(e) =>{
        if(!forgotPasswordToken){
            alert("Session expired log in again.")
            return;
        }
        try {
            const response = await axios.post(BASE_URL+"/resetPassword"+"/"+forgotPasswordToken, {newPassword});
            console.log(response);
            navigate("/login");
        } catch (error) {
            console.log(error);
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
                  <FormLabel htmlFor="input_data">New Password</FormLabel>
                  <Input id="input_data" type="text" name="newPassword" onChange={handleInputData}/>
                </FormControl>
              </Stack>
              <Stack spacing="6">
                <Button onClick={handleSubmit}>Submit</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
  )
}

export default ResetPassword

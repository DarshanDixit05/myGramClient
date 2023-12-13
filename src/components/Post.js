import React from 'react'
import { Input, Card, CardHeader, CardBody, CardFooter,Flex,Avatar,Box,Heading,Text,IconButton,Image, Button, 
} from '@chakra-ui/react'
import {
    FiHeart,
    FiMessageCircle,
    FiNavigation,
    FiMoreVertical
} from 'react-icons/fi'

function Post() {
  return (
    <Card maxW='md'>
    <CardHeader pt="1" pb="1">
        <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar size='md' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Box>
            <Heading size='sm'>Username</Heading>
            </Box>
        </Flex>
        <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={<FiMoreVertical />}
        />
        </Flex>
    </CardHeader>
    <Image
        objectFit='cover'
        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Chakra UI'
    />
    <CardBody pt="1" pb="1">
        <Button flex='1' pl="0" mt='0' variant='ghost' leftIcon={<FiHeart />}>
        </Button>
        <Button flex='1' mt='0' variant='ghost' leftIcon={<FiMessageCircle />}>
        </Button>
        <Button flex='1' mt='0' variant='ghost' leftIcon={<FiNavigation />}>
        </Button>
        <Text>100 likes</Text>
        <Text>
            With Chakra UI, I wanted to sync the speed of development with the speed
            of design. I wanted the developer to be just as excited as the designer to
            create a screen.
        </Text>
    </CardBody>
    <CardFooter
     display="block"
     pt="0"
    >
        <div>View all x comments</div>
        <Input id="comment" type="text" name="comment" />
    </CardFooter>
    </Card>
  )
}

export default Post
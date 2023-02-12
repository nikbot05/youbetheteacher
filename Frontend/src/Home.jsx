import * as React from 'react'

import CardStyle from '../public/CardStyle.jsx';

// 1. import `ChakraProvider` component
import { ChakraProvider, Heading, Box, VStack, StackDivider, HStack, Flex, Spacer } from '@chakra-ui/react';

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

import { MdCheckCircle, MdSettings } from 'react-icons/md'


function Home() {
  // 2. Wrap ChakraProvider at the root of your app
  return (

    <ChakraProvider style={{padding: 10}}>

     <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
    >
       <Heading as='h2' size='3xl' noOfLines={1}>
        Welcome! Explore your subjects
      </Heading>
      <Box h='120px'>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Create your course content, choosing what you want to learn.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Begin by clicking on any course and typing in your answers.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Work to improve on topics that you don't quite understand well enough.
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <ListIcon as={MdSettings} color='green.500' />
            Repeat, until you achieve full mastery of the concept.
          </ListItem>
        </List>
      </Box>
      <Box>
        <HStack spacing={8}>
          <Box>
            <CardStyle headingText="Calculus" imgLink="https://images.unsplash.com/photo-1597589827703-f4b68eafa0ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80" buttonText="Start Now" buttonColor="red" description="Explore the fundamentals of calculus, from the basics of derivation, such as related rates problems and optimization, to volume of solids through revolutions and processes of integration to infinite series." urlPath="/course/calculus"/>
          </Box>


          <Box>

            <CardStyle headingText="US History" imgLink="https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80" buttonText="Start Now" buttonColor="red" description="Explore the comprehensive details about American History, through the exploration of fronteir in the West before the beginning of the American Revolution to the globalization of the economy and the world in general. Learn about significant historical events." urlPath="/course/history" />
          </Box>

          <Box h="100%">
          
            <CardStyle headingText="Physics" imgLink="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBoeXNpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" buttonText="Start Now" buttonColor="red" description="Explore the motion of objects on Earth from one dimensional motion to launching items at an angle, tension, to waves, forms of energy, and circular motion." urlPath="/course/physics"/>
          </Box>
          
        </HStack>
      </Box>
      
    </VStack>
    </ChakraProvider>

  )
}

export default Home;
import React, {useState, useEffect, useMemo} from 'react';

import { useParams } from 'react-router-dom';

import ListView from '../public/ListView.jsx';

import { ChakraProvider, Heading, Box, VStack, StackDivider, Flex, Spacer, Textarea, Text, Button, ButtonGroup, HStack } from '@chakra-ui/react';

import { Badge } from '@chakra-ui/react'

import Input from '../public/Input.jsx';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from '@chakra-ui/react'

export default function Course() {

  const [value, setValue] = useState('');

  const [response, setResponse] = useState('');

  const [loading, setLoading] = useState(false);

  const [question, setQuestion] = useState('');

  const [topics, setTopics] = useState([]);

  

  const { courseName } = useParams();

  //code for toTitleCase function from https://www.w3docs.com/snippets/javascript/how-to-convert-string-to-title-case-with-javascript.html

  function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ')
  };

  async function fetchData(prompt) {
    setLoading(true);
    console.log(question.substring(0, question.length - 1))
    const response = await fetch("https://lh-6-backend.forestgump.repl.co/Give feedback for this statement: " + prompt + " in response to the question: " + question)
    .then((response) => response.json())
    .then((data) => {
      setResponse(data.response);
      setTopics(data.topics);
      console.log(data.topics);
      setLoading(false);
    });
    // waits until the request completes...

  }

  async function fetchQuestion(topic, subject) {

    const response = await fetch("https://lh-6-backend.forestgump.repl.co/question/"+ subject + "/" + topic)
    .then((response) => response.json())
    .then((data) => {
      setLoading(true);
      setQuestion(data.question);
      setLoading(false);
      return null
    })
    
  }

  const taskLists = {
    "calculus":
      [
        {title: "Related Rates", description: "Use derviation to calculate the rates of certain objects in relation to time or their physical properties."},
        {title: "Optimization", description: "Derivation to help solve problems that optimizes certain variables using extrema tests, derivation, and complex algebra."},
        {title: "Derivation Rules", description: "Learn about the chain rule, inverse functions, and trigonometric functions and other advanced derviatives."},
        {title: "Volume through Revolution", description: "Find the volume of a shape that is obtained through rotating objects about a line"},
        {title: "Integrals", description: "Do the reverse process of finding a derivative and how it relates to accumulation,displacement, and total distance"},
{title: "Series", description: "Use Taylor and Maclaurin series to approximate polynomials and find the error approximation."},
      ],
    "physics":
      [
        {title: "2D Motion", description: "Discuss the fundamentals about motion, such as distance, velocity, accleration, and speed. Understaning Newtonian motion is fundamental to grapsing the different concepts in physics."},
        {title: "Projectiles", description: "Projectiles are the study of two dimensional motion with respect to gravity and independent motion in the x and y axes. Projectiles lead to more in depth study of vector substitution and analyzing 2D motion independently."},
        {title: "Basic Forces", description: "2D motion, such as motion in linear dimensions, is important in classical mechanics. Learn about forces, such as friction, normal force, force of gravity to see how objects travel, including the laws of motion (Newton's 1st, 2nd, and 3rd Laws)."},
        {title: "Advanced Forces", description: "Investigate the forces in advanced contraptions, such as pulleys, ramps, inclines, and combinations of both. Use indepedent forces to grasp conceptually how these problems can be solved and how similar they are to basic forces in regards to calculating forces acting upon the object."},
        {title: "Energy and Work", description: "Using the concepts of kinetic energy, potential energy, and potential energy of certain objects. Apply the concepts of acceleration, velocity, and distance to the topics of energy and work, which enable more efficient calculations in motion problems."},
        {title: "Light", description: "Concepts in light (such as Snell's Law) in refraction and reflection are coupled with Doppler's effect in the motion of harmonic waves in both sound and light."}
      ],
    "history": [
        {title: "American Revolution", description: "Evaluate the political, social, economic, and causes of the American Revolution and how it affected America."},
        {title: "War of 1812", description: "Determine the extent to which the War of 1812 changed the nation for the better and for the worse."},
        {title: "Civil War", description: "Evaluate the causes of the Civil War and to what extent it affected American politics, society, and economy and ultimately how it led to Reconstruction."},
        {title: "Reconstruction", description: "Explain how Reconstruction impacted American life and led to the Gilded Age"},
      {title: "Gilded Age", description: "Explain how Gilded Age economy affected US society and poltics"},
      {title: "Imperialism", description: "To what extent did the era of Imperialism change US politics"},
      {title: "World War I", description: "Evaluate the effects to which World War I changed the United States."},
      {title: "Roaring Twenties", description: "To what extent did the Roaring Twenties help the United States"},
      {title: "Great Depression", description: "Evaluate the effects of Great Depression and it's effects"},
      {title: "World War II", description: "Evaluate the causes of World War II and it's effects"},
      {title: "Korean War", description: "Evaluate the causes of the Korean War and it's effects"},
      {title: "Cold War", description: "Evaluate the effects of Cold War on US economy and politics"},
      {title: "Vietnam War", description: "Evaluate the effects of the Vietnam War and it's causes"},
      {title: "Reagan Era", description: "Evaluate Reagan's effects of conservation policies and response to communism in Nicaragua"}
    ]
  }; 
  const [menuTitle, setMenuTitle] = useState(taskLists[courseName][0].title);
  return (
    <ChakraProvider>
      <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
    >
        <Box>
          <Heading as='h2' size='3xl' noOfLines={1}>
            {toTitleCase(courseName)}
          </Heading>
        </Box>
        <Flex>
          <Box p='4' w="45%">
            <ListView title="Tasks" tasks={taskLists[courseName]} />
          </Box>
          <Spacer />
          <Box p='4'w="45%">
            <VStack divider={<StackDivider borderColor='gray.300' />} spacing={4} align='left'>
                <Box>
                  <VStack spacing={4} align='left'>
                    <HStack spacing={4} align='left'>
                      <Box>
                        <Heading>Topics: </Heading>
                      </Box>
                      <Box>
                        <Menu isLazy w={100}>
                          <MenuButton as={Button}>
                            {menuTitle}
                          </MenuButton>
                          <MenuList>
                            {taskLists[courseName].map((dataPoint) => 
                    
                              <MenuItem onClick={() => setMenuTitle(dataPoint.title)}>{dataPoint.title}</MenuItem>
                        
                            )}
                          </MenuList>
                        </Menu>
                      </Box>
                    </HStack>
                    <Box>
                      <Heading as='h4' size='xl' noOfLines={1}>
                        Question
                      </Heading>
                    </Box>
                    <Box>
                      <Text size='lg'>{question}</Text>
                    </Box>
                    <Box>
                      <Button colorScheme='teal' size='md' onClick={() => fetchQuestion(menuTitle, courseName)} isLoading={loading}>
                        Generate Question
                      </Button>
                    </Box>
                  </VStack>
                </Box>
                <Box>
                  <VStack spacing={4} align='left'>
                    <Box>
                      <Heading as='h4' size='xl' noOfLines={1}>
                        Learn
                      </Heading>
                    </Box>
                    <Box>
                      <Input onChange={e => setValue(e.target.value)} value={value} onClick={() => fetchData(value)} isLoading={loading} />
                    </Box> 
                    <Box>
                      <HStack spacing={4}>
                        {topics.map((item) => 
                          <Badge>{item}</Badge>
                        )}
                      </HStack>
                    </Box>
                  </VStack>
                </Box>
              <Box>
                <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='left'>
                  <Box>
                    <Heading as='h4' size='xl' noOfLines={1}>
                    Output
                    </Heading>
                  </Box>
                  <Box h={100}>
                    <Textarea resize={'none'} placeholder={"Output here..."} isDisabled value={response.replace('?', '').trim()} h={400} borderWidth={4} size='lg'  />
                  </Box>
                </VStack>
              </Box>
            </VStack>
            
          </Box>
        </Flex>
      </VStack>

    </ChakraProvider>
  )
  
}


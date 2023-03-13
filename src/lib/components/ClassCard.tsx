import React from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { RootState, useAppDispatch } from "@/store/store";
import { addClass, removeClass } from "@/store/slices/classes-slice";
import { useSelector } from "react-redux";

export interface ClassProps {
  name: string;
  credits: number;
  desc: string;
}

const ClassCard = ({ name, credits, desc }: ClassProps) => {
  // dispatch - reducers, edit the state
  // selector - get the state, "Select" the states

  const dispatch = useAppDispatch();
  const classes = useSelector((state: RootState) => state.classes.value);

  const classesAlreadyAdded = classes.includes(name);

  const handleAddRemoveClass = () => {
    if (classesAlreadyAdded) {
      dispatch(removeClass(name));
      return;
    }
    dispatch(addClass(name));
  };

  return (
    <AccordionItem
      bg="gray.50"
      borderStyle="solid"
      borderColor="gray.100"
      borderWidth={1}
      mb={5}
    >
      <h2>
        <AccordionButton>
          <HStack align="center" justify="space-between" w="100%">
            <Heading size="md">{name}</Heading>
            <Heading as="span" size="xs">
              {credits} credits
            </Heading>
          </HStack>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box w="100%">{desc}</Box>
        <HStack w="100%" justify="flex-end">
          <Button
            w="120px"
            colorScheme={classesAlreadyAdded ? "red" : "blue"}
            onClick={handleAddRemoveClass}
          >
            {classesAlreadyAdded ? "Remove Class" : "Add Class"}
          </Button>
        </HStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default ClassCard;

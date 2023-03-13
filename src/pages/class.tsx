import ClassCard, { ClassProps } from "@/lib/components/ClassCard";
import { useAppSelector } from "@/store/store";
import {
  Accordion,
  Container,
  Heading,
  HStack,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import React from "react";

const CLASSES: ClassProps[] = [
  {
    name: "CSC101",
    credits: 4,
    desc: "Introduction to computer science course!",
  },
  {
    name: "CSC102",
    credits: 4,
    desc: "Introduction to Python!",
  },
  {
    name: "CSC103",
    credits: 4,
    desc: "Introduction to Java!",
  },
];

const Class = () => {
  const classes = useAppSelector((state) => state.classes.value);

  return (
    <Container py={50}>
      <HStack spacing={4} w="100%" py={5} h={20}>
        <Heading as="h3" size="sm">
          My Classes:
        </Heading>
        {classes.map((c, index) => (
          <Tag key={`${c}-${index}`} colorScheme="blue">
            <TagLabel>{c}</TagLabel>
          </Tag>
        ))}
      </HStack>
      <Accordion allowMultiple>
        {CLASSES.map((c, index) => (
          <ClassCard
            key={index}
            name={c.name}
            credits={c.credits}
            desc={c.desc}
          />
        ))}
      </Accordion>
    </Container>
  );
};

export default Class;

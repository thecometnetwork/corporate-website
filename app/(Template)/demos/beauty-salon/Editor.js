import {
  Button,
  Center,
  chakra,
  Portal,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import {useState, lazy} from "react";
import Draggable from "react-draggable";
import {motion, useDragControls} from "framer-motion";

export default function Editor({component}) {
  const Component = component;
  const TCNLocalStorageUpdated = new Event("TCNLocalStorageUpdated");

  const controls = useDragControls();
  const startDrag = (e) => {
    controls.start(e);
  };

  console.log("component editable props", component.editableProps);
  const [componentData, setComponentData] = useState();
  const {isOpen, onOpen, onClose, onToggle} = useDisclosure({defaultIsOpen: false});

  const getComponentDataFromLocalStorage = () => {
    setComponentData(JSON.parse(window.localStorage.getItem(component.editableProps.componentName)));
  };

  const updateComponentData = () => {
    let componentData = {};
    document.querySelectorAll(`[data-component="${component.editableProps.componentName}"] > input `).forEach((item) => {
      let [, block, element] = item.id.split(".");
      if (!Reflect.has(componentData, block)) {
        componentData[block] = {};
      }
      componentData[block][element] = item.value;
    });
    window.localStorage.setItem(component.editableProps.componentName, JSON.stringify(componentData));
    window.dispatchEvent(TCNLocalStorageUpdated);
    console.log("new component data", componentData);
  };

  return (
    <chakra.div
      className="editor"
      width="100%"
      height="fit-content"
      _hover={{
        boxShadow: "inset 0 0 0 5px #92E7FF",
      }}
      position="relative"
      role="group"
    >
      <chakra.div
        position="absolute"
        top="0px"
        left="50%"
        marginLeft="-75px"
        width="150px"
        height="50px"
        backgroundColor="#92E7FF"
        display="none"
        _groupHover={{display: "block"}}
        color="white"
        borderBottomRadius="5px"
      >
        <Center
          h="100%"
          _hover={{cursor: "pointer"}}
          onClick={() => {
            getComponentDataFromLocalStorage();
            console.log(componentData);
            onOpen();
          }}
        >
          Edit Section
        </Center>
      </chakra.div>
      <Component />

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        sx={{
          "*": {
            fontFamily: "Montserrat, sans-serif- !important",
          },
        }}
      >
        <ModalOverlay />
        <ModalContent
          as={motion.div}
          drag
          dragElastic={0}
          dragControls={controls}
          dragListener={false}
        >
          <ModalHeader>
            <VStack>
              <Text
                fontSize="sm"
                onPointerDown={startDrag}
                _hover={{
                  cursor: "grab",
                }}
              >
                Click and drag to move me
              </Text>
              <Heading fontFamily="Montserrat">Edit Section</Heading>
            </VStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Object.keys(component.editableProps)
              .filter((prop) => prop != "componentName")
              .map((prop) => {
                return (
                  <>
                    <Text
                      fontSize="lg"
                      fontFamily="Montserrat, sans-serif"
                    >
                      {component.editableProps[prop].label}
                    </Text>
                    {component.editableProps[prop].elements.map((el) => {
                      return (
                        <FormControl
                          id={`${component.editableProps.componentName}.${prop}.${el.element}`}
                          data-component={component.editableProps.componentName}
                        >
                          <FormLabel>{el.element}</FormLabel>
                          <Input
                            type="text"
                            defaultValue={componentData && componentData[prop][el.element]}
                          />
                        </FormControl>
                      );
                    })}
                  </>
                );
              })}
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                updateComponentData();
                onClose();
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </chakra.div>
  );
}

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useClipboard,
  Image,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";

import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { NavBar } from "../components/Navbar";
const Home: NextPage = () => {
  const [value, setValue] = useState("npm i -g gitsol");
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <Flex
      position="fixed"
      top="-10%"
      // right={["-10%", 0]}
      flexDir="column"
      height="100%"
      width="100%"
      justify="center"
    >
      <Flex>
        <motion.div
          transition={{
            ease: "easeInOut",
            duration: 2,
          }}
          initial={{ opacity: 0, y: 90 }}
          animate={{
            opacity: [0, 0.5, 1],
            y: [90, 0, 0],
          }}
        >
          {/* <Image
            pos="absolute"
            alt="gradient"
            w="100%"
            h="50%"
            src=""
            zIndex="0"
          /> */}
          <Heading
            fontWeight="extrabold"
            color="white"
            fontFamily="monospace"
            fontSize={["xs", "2xl", "2xl"]}
            bgClip="text"
            position={["absolute", "relative", "relative"]}
            right={["0", "0", "0", "0"]}
            top={["30%", "0", "0", "0"]}
            mixBlendMode="difference"
            bgImage="data:image/jpeg;base64,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"
          >
            <pre>
              {`
             ________  ___  _________  ________  ________  ___          
             |\\   ____\\|\\  \\|\\___   ___\\\\   ____\\|\\   __  \\|\\  \\         
             \\ \\  \\___|\\ \\  \\|___ \\  \\_\\ \\  \\___|\\ \\  \\|\\  \\ \\  \\        
              \\ \\  \\  __\\ \\  \\   \\ \\  \\ \\ \\_____  \\ \\  \\\\\\  \\ \\  \\       
               \\ \\  \\|\\  \\ \\  \\   \\ \\  \\ \\|____|\\  \\ \\  \\\\\\  \\ \\  \\____  
                \\ \\_______\\ \\__\\   \\ \\__\\  ____\\_\\  \\ \\_______\\ \\_______\\
                 \\|_______|\\|__|    \\|__| |\\_________\\|_______|\\|_______|
                                          \\|_________|                   
                                                           
            `}
            </pre>
          </Heading>
        </motion.div>
      </Flex>
      <Flex color="white" fontFamily="monospace" justify="flex-end">
        <motion.div
          transition={{
            ease: "easeInOut",
            duration: 2,
            delay: 0.5,
          }}
          initial={{ opacity: 0, y: 90 }}
          animate={{
            opacity: [0, 0.5, 1],
            y: [90, 0, 0],
          }}
        >
          <Button
            marginTop="5"
            marginLeft={["-15%", "5", "5", "5"]}
            marginBottom="5"
            marginRight={["120%", "80", "80", "80"]}
            variant="ghost"
            _hover={{}}
            _active={{}}
            _focus={{}}
            leftIcon={
              !hasCopied ? (
                <FiCopy size="25" onClick={onCopy} />
              ) : (
                <TiTick size="25" color="green" />
              )
            }
            border="2px solid white"
            borderRadius="xl"
            padding="4"
          >
            <Text fontSize="2xl" letterSpacing="widest">
              npm i -g gitsol
            </Text>
          </Button>
        </motion.div>
      </Flex>
      <NavBar />
      <Flex
        justify="center"
        fontFamily="monospace"
        fontStyle="italic"
        fontWeight="thin"
        color="whiteAlpha.800"
      >
        {/* <span className="marquee"> */}
        <Text position="fixed" top={1}>
          Made with 💚 by{" "}
          <Link
            href="
        https://twitter.com/anoushk77"
          >
            @anoushk77
          </Link>
          {" & "}
          <Link href="https://twitter.com/ayshptk">@ayshptk</Link>
        </Text>
        {/* </span> */}
      </Flex>
    </Flex>
  );
};

export default Home;

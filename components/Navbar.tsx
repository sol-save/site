import React from "react";
// import Link from "next/link";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="inline"
      fontSize="2xl"
      _hover={{
        textDecoration: "underline",
        textDecorationThickness: "2px",
      }}
      fontFamily="monospace"
      {...rest}
    >
      <Link _focus={{}} _active={{}} href={to}>
        {children}
      </Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export const NavBar = (props: any) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      position="fixed"
      bottom={0}
      left={0}
      as="nav"
      align="center"
      justify="space-evenly"
      w="100%"
      //   border="1px  red solid"
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="https://github.com/sol-save/cli">
            <>
              Code
              <Text display="inline" fontSize="4xl"></Text>
            </>
          </MenuItem>
          <MenuItem to="https://docs.gitsol.xyz">
            <>
              Docs
              <Text display="inline" fontSize="4xl">
                ↗
              </Text>
            </>
          </MenuItem>
          <MenuItem to="/submission">
            <>
              Submission
              <Text display="inline" fontSize="4xl"></Text>
            </>
          </MenuItem>
          <MenuItem to="https://www.npmjs.com/package/gitsol">
            <>
              Npm
              <Text display="inline" fontSize="4xl"></Text>
            </>
          </MenuItem>
          <MenuItem to="gitpodlink" isLast>
            <Button
              size="sm"
              rounded="md"
              color="black"
              bg={["white", "white", "primary.500", "primary.500"]}
              _hover={{
                bg: [
                  "primary.100",
                  "primary.100",
                  "primary.600",
                  "primary.600",
                ],
              }}
              fontSize="xl"
            >
              Try it on Gitpod
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

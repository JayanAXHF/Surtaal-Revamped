"use client";

import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
} from "@mantine/core";
import { Dots } from "./Dots";
import MainButton from "@/components/Button/Button";
import "./Hero.module.css";
import "./Hero.module.scss";
import "../../app/globals.css";
import Modal from "../BookingModal/Modal";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: rem(60),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(35),
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure();

  return (
    <Container className={`${classes.wrapper} m-0 animate-fade`} fluid>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      {/* <div className="gradient-radial from-amber-500 to-rose-400 absolute inset-0 w-96  h-96 "></div> */}
      <div className={classes.inner}>
        <Modal opened={opened} open={open} close={close} />

        <Title className={`${classes.title} tracking-wide`}>
          <Text
            component="span"
            className={`text-transparent  bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text clipText `}
            inherit
          >
            Music Classes
          </Text>{" "}
          for all people
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Our high-quality courses are taught by experienced teachers who will
            help you master any field in music!
          </Text>
        </Container>

        <div
          className={`${classes.controls} flex flex-row gap-4 flex-grow-0 items-center content-center`}
        >
          <MainButton className={`${classes.control} `} link href="/courses">
            View Courses
          </MainButton>
          <MainButton cartoon className="" onClick={open}>
            Book Now
          </MainButton>
        </div>
      </div>
    </Container>
  );
}

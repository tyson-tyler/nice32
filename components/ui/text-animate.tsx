"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react";
import { ElementType } from "react";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TextAnimateProps extends MotionProps {
  children: string; // Text content to animate
  className?: string; // Class applied to the wrapper component
  segmentClassName?: string; // Class applied to each segment
  delay?: number; // Delay before the animation starts
  duration?: number; // Duration of the animation
  variants?: Variants; // Custom animation variants
  as?: ElementType; // HTML element type (default: "p")
  by?: AnimationType; // Split text by "word", "character", "line", or "text"
  startOnView?: boolean; // Trigger animation on entering viewport
  once?: boolean; // Animate only once
  animation?: AnimationVariant; // Animation preset
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

const defaultContainerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const defaultItemAnimationVariants: Record<
  AnimationVariant,
  { container: Variants; item: Variants }
> = {
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: custom,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 },
      },
    },
  },
  blurIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      show: (custom: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          delay: custom,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.3 },
      },
    },
  },
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
      show: (custom: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          delay: custom,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
        transition: { duration: 0.3 },
      },
    },
  },
  blurInDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
      show: (custom: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          delay: custom,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        y: -20,
        transition: { duration: 0.3 },
      },
    },
  },
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: custom,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 },
      },
    },
  },
  slideDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -20 },
      show: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: custom,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 },
      },
    },
  },
  slideLeft: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, x: 20 },
      show: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: custom,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        x: 20,
        transition: { duration: 0.3 },
      },
    },
  },
  slideRight: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, x: -20 },
      show: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: custom,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        x: -20,
        transition: { duration: 0.3 },
      },
    },
  },
  scaleUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      show: (custom: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
          delay: custom,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3 },
      },
    },
  },
  scaleDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 1.2 },
      show: (custom: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
          delay: custom,
          duration: 0.3,
        },
      }),
      exit: {
        opacity: 0,
        scale: 1.2,
        transition: { duration: 0.3 },
      },
    },
  },
};

export function TextAnimate({
  children,

  variants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,

  by = "word",
  animation = "fadeIn",
  ...props
}: TextAnimateProps) {
  const MotionComponent = motion(Component);

  const finalVariants = variants
    ? { container: variants, item: defaultItemVariants }
    : animation
    ? {
        container: {
          ...defaultItemAnimationVariants[animation].container,
          show: {
            ...defaultItemAnimationVariants[animation].container.show,
            transition: {
              staggerChildren: staggerTimings[by],
            },
          },
          exit: {
            ...defaultItemAnimationVariants[animation].container.exit,
            transition: {
              staggerChildren: staggerTimings[by],
              staggerDirection: -1,
            },
          },
        },
        item: defaultItemAnimationVariants[animation].item,
      }
    : { container: defaultContainerVariants, item: defaultItemVariants };

  const segments: string[] =
    by === "word"
      ? children.split(/(\s+)/)
      : by === "character"
      ? children.split("")
      : by === "line"
      ? children.split("\n")
      : [children];

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={finalVariants.container}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={startOnView ? undefined : "show"}
        exit="exit"
        className={cn("whitespace-pre-wrap", className)}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            custom={i * staggerTimings[by]}
            className={cn(
              by === "line" ? "block" : "inline-block whitespace-pre",
              segmentClassName
            )}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  );
}

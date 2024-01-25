import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

// type MaxWidthWrapperVariants = "default" | "sm" | "md" | "lg" | "xl";

type MaxWidthWrapperVariants = VariantProps<typeof MaxWidthWrapperVariants>;

interface MaxWidthWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MaxWidthWrapperVariants {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapperVariants = cva(
  "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
  {
    variants: {
      cols: {
        default: "",
        twoCols: "grid grid-cols-2 gap-16",
      },

      defaultVariants: {
        cols: "default",
      },
    },
  },
);

const MaxWidthWrapper = ({
  className,
  children,
  cols,
}: MaxWidthWrapperProps) => {
  return (
    <div className={cn(MaxWidthWrapperVariants({ cols }), className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

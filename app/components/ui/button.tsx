import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-600",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-primary-500 text-primary-500 bg-transparent hover:bg-primary-50",
        secondary: "bg-dark-100 text-dark-800 hover:bg-dark-200",
        ghost: "text-dark-600 hover:bg-dark-100 hover:text-dark-800",
        link: "text-primary-500 underline-offset-4 hover:underline hover:text-primary-600",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-14 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, isLoading = false, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

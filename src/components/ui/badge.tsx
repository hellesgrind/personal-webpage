import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-bavarian-blue/20 bg-bavarian-blue/10 text-bavarian-blue hover:bg-bavarian-blue/20",
        secondary:
          "border border-beer-gold/20 bg-beer-gold/10 text-pretzel-brown hover:bg-beer-gold/20",
        outline: 
          "border border-pretzel-brown/30 text-pretzel-brown",
        destructive:
          "border border-red-500/20 bg-red-500/10 text-red-700 hover:bg-red-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
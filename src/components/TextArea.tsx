import React from "react";
import cn from "classnames";
import { FieldError } from "react-hook-form";

type Props = { error?: FieldError } & React.HTMLProps<HTMLTextAreaElement>;

export default React.forwardRef(
  ({ className, error, ...props }: Props, ref: any) => {
    return (
      <>
        <textarea
          ref={ref}
          className={cn(
            "border focus:outline-none focus:ring-2 focus:border-transparent w-full my-4 ",
            className
          )}
          {...props}
        ></textarea>
        {error && <span>{error.message}</span>}
      </>
    );
  }
);

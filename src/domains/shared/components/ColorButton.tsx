import { ButtonHTMLAttributes, useMemo } from "react";
import { css } from "@emotion/react";

export const buttonSize = {
  md: {
    width: 126,
    height: 45,
  },
  lg: {
    width: 281,
    height: 45,
  },
};

export const color = {
  gray: {
    gray000: "#fff",
    gray010: "#f4f4f4",
    gray020: "#e0e0e0",
    gray030: "#c6c6c6",
    gray040: "#adadad",
    gray050: "#878787",
    gray060: "#676767",
    gray070: "#414141",
    gray080: "#282828",
    gray090: "#1b1b1b",
    gray100: "#000000",
  },
  blue: {
    blue100: "#0f62fe",
  },
  red: {
    red100: "#da2e28",
  },
  purple: {
    purple050: "#cd9de9",
    purple040: "#EBD8F6 ",
  },
};

export const gradation = {
  sm: "linear-gradient(92deg, #C4A1D8 0%, #A3ABD2 24.72%, #89B3CD 52.32%, #FFF3AB 107.2%)",
  md: "linear-gradient(92deg, #B281CE 0%, #8892C1 24.72%, #74A5C3 52.32%, #F5E583 107.2%)",
  lg: "linear-gradient(60deg, #AB70CC 0%, #7481C0 24.72%, #5C97BB 52.32%, #E9D55E 107.2%)",
};

export const buttonStyles = {
  primary: {
    default: {
      background: gradation.sm,
      color: color.gray.gray000,
      border: "none",
    },
    hover: {
      background: gradation.md,
      color: color.gray.gray000,
      border: "none",
    },
    click: {
      background: gradation.lg,
      color: color.gray.gray000,
      border: "none",
    },
    focus: {
      background: `${gradation.sm} padding-box, ${gradation.lg} border-box`,
      backgroundSize: "contain",
      color: color.gray.gray000,
      border: "3px solid transparent",
      borderRadius: "40px",
      display: "inline-block",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
      outline: "none",
    },
    disabled: {
      background: color.gray.gray030,
      color: color.gray.gray050,
      border: "none",
    },
  },
  ghost: {
    default: {
      border: "2px solid transparent",
      backgroundImage: `linear-gradient(${color.gray.gray000}, ${color.gray.gray000}),${gradation.sm} , ${gradation.lg}`,
      borderRadius: "30px",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",

      color: color.gray.gray040,
    },
    hover: {
      border: "2px solid transparent",
      backgroundImage: `linear-gradient(${color.gray.gray000}, ${color.gray.gray000}),${gradation.sm} , ${gradation.lg}`,
      borderRadius: "30px",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",

      color: color.gray.gray050,
    },
    click: {
      border: "2px solid transparent",
      backgroundImage: `linear-gradient(${color.gray.gray000}, ${color.gray.gray000}),${gradation.sm} , ${gradation.lg}`,
      borderRadius: "30px",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",

      color: color.gray.gray050,
    },
    focus: {
      border: "3px solid transparent",
      backgroundImage: `linear-gradient(${color.gray.gray000}, ${color.gray.gray000}),${gradation.sm} , ${gradation.lg}`,
      borderRadius: "30px",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
      outline: "none",

      color: color.gray.gray030,
    },
    disabled: {
      background: color.gray.gray000,
      color: color.gray.gray030,
      border: `2px solid ${color.gray.gray030}`,
    },
  },
};

export type Size = "md" | "lg";
export type Variant = "primary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;

  /**
   * What type to use for
   */
  type?: "button" | "reset" | "submit";

  /**
   * How large should the button be? default: 'lg'
   */
  size?: Size;

  /**
   * Visual Style of the Button. default: 'primary'
   */
  variant?: Variant;

  /**
   * If true, the button will take up the full width of its container
   */
  fullWidth?: boolean;

  /**
   * If true, the button will be disabled. default: false
   * */
  disabled?: boolean;

  children: React.ReactNode;

  /**
   * Optional click handler
   */
  onClick?: () => void;
};

const defaultButtonStyle = css`
  border-radius: 30px;
  cursor: pointer;
`;

export function ColorButton({
  size = "lg",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  const activeButtonStyle = useMemo(() => {
    const currentVariantStyles = buttonStyles[variant as Variant] || {};
    return css`
      ${currentVariantStyles.default}
      &:disabled {
        ${currentVariantStyles.disabled}
        cursor: not-allowed;
      }
      &:hover {
        ${currentVariantStyles.hover}
      }
      &:focus-visible {
        ${currentVariantStyles.focus}
      }
      &:active {
        ${currentVariantStyles.click}
      }
    `;
  }, [variant]);

  const buttonSizeStyle = useMemo(
    () => css`
      width: ${fullWidth ? "100%" : `${buttonSize[size].width}px`};
      height: ${buttonSize[size].height}px;
    `,
    [size, fullWidth]
  );

  return (
    <button
      type="button"
      disabled={disabled}
      css={[defaultButtonStyle, buttonSizeStyle, activeButtonStyle]}
      // ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
}
// export const ForwardedButton = forwardRef(Button);

import { forwardRef, InputHTMLAttributes } from "react";
import { css } from "@emotion/react";
import { svgToDataUrl } from "../utils/svgToDataUrl";
import { ThumbsDown, ThumbsUp } from "./assets/icons";

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

export type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {};

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(({ ...args }, ref) => {
  return (
    <input
      id={args.id}
      css={[toggleStyle, toggleSizeStyle]}
      type="checkbox"
      ref={ref}
      {...args}
    />
  );
});

const ThumbsUpURL = svgToDataUrl(
  <ThumbsUp width="18" height="18" color="white" />
);
const ThumbsDownURL = svgToDataUrl(
  <ThumbsDown width="18" height="18" color="_" />
);

const toggleSizeStyle = css`
  width: 81px;
  height: 32px;

  ::before {
    width: 26px;
    height: 26px;
  }
`;

const beforeStyle = css`
  &::before {
    content: "";
    position: absolute;
    border-radius: 20px;

    top: 3.1px;
    left: 52px;
    transform: scale(1);
    box-shadow: 0 2px 5px rgb(0, 0, 0, 0.2);
    transition: 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    background: ${gradation.sm};
    content: ${ThumbsUpURL};
  }

  &::after {
    content: "Best";
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    color: ${color.gray.gray040};

    text-align: center;

    font-family: "Pretendard";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
`;

const checkedStyle = css`
  &:checked {
    background: ${color.gray.gray060};
    ::before {
      align-items: flex-end;

      left: 3px;
      background: ${color.gray.gray000};
      content: ${ThumbsDownURL};
    }
    ::after {
      content: "Worst";
      right: -8px;
      color: ${color.gray.gray000};
    }
  }
`;

const toggleStyle = css`
  position: relative;
  appearance: none;
  outline: none;

  transition: 0.2s;

  border-radius: 20px;
  background: ${color.gray.gray000};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25) inset;

  ${beforeStyle}
  ${checkedStyle}

  &:disabled {
    background: #cac9c9;
    ::before {
      background: rgb(250, 250, 250);
    }
  }
`;

Toggle.displayName = "Toggle";

export default Toggle;

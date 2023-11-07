import React, { useRef } from "react";
import { PiPaperclipBold } from "react-icons/pi";
import { BaseProps } from "../@types/common";

type Props = BaseProps & {
    disabled?: boolean;
    loading?: boolean;
    onFile: (file: any) => void;
};

const ButtonAttach: React.FC<Props> = (props) => {
    const fileInput = useRef<HTMLInputElement>(null);

    return (
        <>
            <button
                className={`${
                props.className ?? ""
                } flex items-center justify-center rounded-xl border p-2 text-xl border-aws-sea-blue text-aws-sea-blue  ${
                props.disabled ? "opacity-30" : ""
                }`}
                onClick={_event => {
                    if (fileInput !== null && fileInput.current !== null) {
                        fileInput.current.click();
                    }
                }}
                disabled={props.disabled || props.loading}
            >
                <PiPaperclipBold/>
            </button>
            <input
            ref={fileInput}
                type="file"
                style={{display: 'none'}}
                onChange={(event) => {
                    if (event.target.files) {
                        props.onFile(event.target.files[0]);
                    }
                }}
                accept="image/png,image/jpeg,image/tiff,application/pdf"
            />
        </>
    );
  };
  
  export default ButtonAttach;
  
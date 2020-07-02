import React from "react";

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, onChange }: IProps) => {
  return (
    <input
      type="text"
      placeholder="Name"
      value={value}
      onChange={onChange}
    ></input>
  );
};

export const From = ({
  children,
  onSubmit,
}: {
  children: JSX.Element;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

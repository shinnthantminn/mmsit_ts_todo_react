import { FormEvent, useState } from "react";

type Props = {
  handleAddData: (e: string) => void;
};

const PanelComponent = ({ handleAddData }: Props) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    text.length > 0 && handleAddData(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default PanelComponent;

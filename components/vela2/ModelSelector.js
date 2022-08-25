import { useEffect, useState } from "react";
import ControlField from "../form/ControlField";

const options = {
  color: [
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FGreen.png?alt=media&token=7ccad21a-f7df-4e45-afc6-b2abd5c868c6",
      label: "Verde Floresta",
      option: "Verde",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FBlue.png?alt=media&token=a41a1f25-ca21-4ff1-9cb7-399434d5637e",
      label: "Azul Atlântico",
      option: "Azul",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FMidnight.png?alt=media&token=7907c973-ad1b-4134-9fab-849bac650bb5",
      label: "Azul Meia-noite",
      option: "Preto",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FCoral.png?alt=media&token=fd41a80b-3573-420a-9b1b-15e68d79ad74",
      label: "Coral",
      option: "Coral",
    },
  ],
  size: [
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FU.png?alt=media&token=7a2b99dd-4fca-4380-88f2-7c515062af53",
      label: "1.50 - 1.80m",
      option: "P",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FM.png?alt=media&token=92ceac16-01b7-4d6e-bf0f-7db2a389e5d2",
      label: "1.60 - 1.72m",
      option: "M",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FG.png?alt=media&token=6c48b775-5e34-4240-bc21-d8b8e204509d",
      label: "1.73 - 1.85m",
      option: "G",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FGG.png?alt=media&token=3582c696-66b7-43aa-a3a9-fb70af34a7a9",
      label: "1.86 - 2m",
      option: "GG",
    },
  ],
  frame: [
    { label: "Quadro baixo", option: "Baixo", sizes: ["P"] },
    { label: "Quadro reto", option: "Reto", sizes: ["M", "G", "GG"] },
  ],
};

const ModelSelector = ({ onModelChange, model }) => {
  const [selectedFrame, setSelectedFrame] = useState({
    label: "Quadro baixo",
    option: "Baixo",
    sizes: ["P"],
  });
  const [filteredSizes, setFilteredSizes] = useState(options.size);
  const validate = (type, value) => {
    const currentModel = { ...model };
    currentModel[type] = value;
    onModelChange(currentModel);
  };

  useEffect(() => {
    const frame = getModelFrame(model);
    setSelectedFrame(frame);
    filterSizes(frame);
  }, [model]);

  const getModelFrame = (model) => {
    if (model.size === "P")
      return options.frame.filter((frame) => frame.option === "Baixo")[0];
    return options.frame.filter((frame) => frame.option === "Reto")[0];
  };

  const filterSizes = (frame) => {
    const sizes = options.size.filter((size) =>
      frame.sizes.includes(size.option)
    );
    setFilteredSizes(sizes);
  };

  const selectFrame = (type, value) => {
    const frame = options.frame.find((frameItem) => frameItem.option === value);
    if (selectedFrame.option !== frame.option) {
      validate("size", frame.sizes[0]);
    }

    setSelectedFrame(frame);
    filterSizes(frame);
  };

  return (
    <div>
      <ControlField
        label="Geometria:"
        name="frame"
        options={options.frame}
        onSelectOption={selectFrame}
        selected={selectedFrame.option}
      />
      <ControlField
        label="Cor:"
        name="color"
        options={options.color}
        onSelectOption={validate}
        selected={model.color}
      />
      <ControlField
        label="Tamanho:"
        name="size"
        options={filteredSizes}
        onSelectOption={validate}
        selected={model.size}
      />
    </div>
  );
};

export default ModelSelector;

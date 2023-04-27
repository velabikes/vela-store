import { useEffect, useState } from "react";
import ControlField from "../form/ControlField";

const options = {
  size: [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FM.png?alt=media&token=92ceac16-01b7-4d6e-bf0f-7db2a389e5d2",
      label: "1.68 - 1.75m",
      option: "M",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FG.png?alt=media&token=6c48b775-5e34-4240-bc21-d8b8e204509d",
      label: "1.75 - 1.85m",
      option: "G",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FGG.png?alt=media&token=3582c696-66b7-43aa-a3a9-fb70af34a7a9",
      label: "1.85 - 2.10m",
      option: "GG",
    },
  ],

  frame: [
    {
      label: "Quadro reto",
      option: "Reto",
      sizes: ["M", "G", "GG"],
    },
  ],
};

const ModelSelector = ({ onModelChange }) => {
  const [selectedFrame, setSelectedFrame] = useState(options.frame[0]);

  const availableSizes = options.size.filter((size) =>
    selectedFrame.sizes.includes(size.option)
  );

  const [selectedModel, setSelectedModel] = useState({
    size: availableSizes[0].option,
  });

  const updateModel = (type, value) => {
    const newModel = { ...selectedModel, [type]: value };
    setSelectedModel(newModel);
    onModelChange(newModel);
  };

  useEffect(() => {
    updateModel("size", availableSizes[0].option);
  }, [selectedFrame]);

  return (
    <div>
      <ControlField
        label="Tamanho:"
        name="size"
        options={availableSizes}
        onSelectOption={updateModel}
        selected={selectedModel.size}
      />
    </div>
  );
};

export default ModelSelector;

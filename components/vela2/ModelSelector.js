import { useEffect, useState } from "react";
import ControlField from "../form/ControlField";

const options = {
  color: [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FGreen.png?alt=media&token=7ccad21a-f7df-4e45-afc6-b2abd5c868c6",
      label: "Floresta",
      option: "Verde",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FBlue.png?alt=media&token=a41a1f25-ca21-4ff1-9cb7-399434d5637e",
      label: "Atlântico",
      option: "Azul",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FMidnight.png?alt=media&token=7907c973-ad1b-4134-9fab-849bac650bb5",
      label: "Meia-noite",
      option: "Preto",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FCoral-new.png?alt=media&token=2c4d8f65-b852-40e5-a446-48a7e4aa5f97",
      label: "Coral",
      option: "Coral",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FRed-new.png?alt=media&token=ffe112af-aadc-4023-b3eb-7b237b375b04",
      label: "Pimenta",
      option: "Vermelho",
    },
  ],
  size: [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FP.png?alt=media&token=d6f27e82-a55b-4f64-843d-26d8524ee484",
      label: "1.50 - 1.75m",
      option: "BP",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FM.png?alt=media&token=92ceac16-01b7-4d6e-bf0f-7db2a389e5d2",
      label: "1.70 - 1.85m",
      option: "BM",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FM.png?alt=media&token=92ceac16-01b7-4d6e-bf0f-7db2a389e5d2",
      label: "1.60 - 1.72m",
      option: "M",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FG.png?alt=media&token=6c48b775-5e34-4240-bc21-d8b8e204509d",
      label: "1.73 - 1.85m",
      option: "G",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FGG.png?alt=media&token=3582c696-66b7-43aa-a3a9-fb70af34a7a9",
      label: "1.86 - 2m",
      option: "GG",
    },
  ],
  tire: [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FBlack.png?alt=media&token=d5b47cc2-6d10-45ae-91e9-6a521a4fef48",
      label: "Preto",
      option: "Preto",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FCream.png?alt=media&token=1710d261-2442-4ea6-832a-e96277c31551",
      label: "Creme",
      option: "Creme",
    },
  ],
  frame: [
    {
      label: "Quadro baixo",
      option: "Baixo",
      sizes: ["BP", "BM"],
    },
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
    color: options.color[0].option,
    tire: options.tire[0].option,
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
        label="Geometria:"
        name="frame"
        options={options.frame}
        onSelectOption={(_, value) =>
          setSelectedFrame(options.frame.find((i) => i.option === value))
        }
        selected={selectedFrame.option}
      />
      <ControlField
        label="Cor:"
        name="color"
        options={options.color}
        onSelectOption={updateModel}
        selected={selectedModel.color}
      />
      <ControlField
        label="Tamanho:"
        name="size"
        options={availableSizes}
        onSelectOption={updateModel}
        selected={selectedModel.size}
      />
      <ControlField
        label="Pneu:"
        name="tire"
        options={options.tire}
        onSelectOption={updateModel}
        selected={selectedModel.tire}
      />
    </div>
  );
};

export default ModelSelector;

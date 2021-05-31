import ControlField from "../form/ControlField";

const options = {
  color: [
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FRed.png?alt=media&token=f6f153a9-3be9-4c25-bca7-f5a5d068f5c5",
      label: "Vermelho Bain",
      option: "Vermelho",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelabikescom%2Fassets%2FMidnight.png?alt=media&token=7907c973-ad1b-4134-9fab-849bac650bb5",
      label: "Preto Meia-noite",
      option: "Preto",
    },
  ],
  frame: [
    { label: "Quadro baixo", option: "Baixo" },
    { label: "Quadro reto", option: "Reto" },
  ],
  time: [
    { label: "Trimestral", option: "Trimestral" },
    { label: "Semestral", option: "Semestral" },
    { label: "Anual", option: "Anual" },
  ],
};

const ModelSelector = ({ onModelChange, model }) => {
  const validate = (type, value) => {
    const currentModel = { ...model };
    currentModel[type] = value;
    onModelChange(currentModel);
  };
  return (
    <div>
      <ControlField
        label="Geometria:"
        name="frame"
        options={options.frame}
        onSelectOption={validate}
        selected={model.frame}
      />
      <ControlField
        label="Cor:"
        name="color"
        options={options.color}
        onSelectOption={validate}
        selected={model.color}
      />
      <ControlField
        label="Período:"
        name="time"
        options={options.time}
        onSelectOption={validate}
        selected={model.time}
      />
	  <br />
      <p>
        Em dúvida de qual tamanho escolher? Siga as recomendações de acordo com
        sua altura:
      </p>
      <h3>• Quadro baixo:</h3>
      <p>→ 1,50m à 1,70m - Quadro 49 Aro 26"</p>
      <h3>• Quadro reto:</h3>
      <p>→ 1,71m à 1,90m - Quadro 55 Aro 700C</p>
    </div>
  );
};

export default ModelSelector;

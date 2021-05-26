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
      label: "Preto Meia-noite",
      option: "Preto",
    },
  ],
  frame: [
    { label: "Quadro baixo", option: "Baixo" },
    { label: "Quadro reto", option: "Reto" },
  ],
  time: [
    { label: "Anual", option: "Anual" },
    { label: "Semestral", option: "Semestral" },
    { label: "Trimestral", option: "Trimestral" },
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

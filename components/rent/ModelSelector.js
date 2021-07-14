import ControlField from "../form/ControlField";

const options = {
  frame: [
    { label: "Quadro baixo", option: "Baixo" },
    { label: "Quadro reto", option: "Reto" },
  ],
  time: [
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
        label="Período:"
        name="time"
        options={options.time}
        onSelectOption={validate}
        selected={model.time}
      />
	  <br />
      <h4>Informaremos antes da entrega quais as cores disponíveis para você escolher.</h4>
      <p>
        Em dúvida de qual tamanho escolher? Siga as recomendações de acordo com
        sua altura:
      </p>
      <h6>• Quadro baixo: 1,50m à 1,70m</h6>
      <h6>• Quadro reto: 1,71m à 1,90m</h6>
    </div>
  );
};

export default ModelSelector;

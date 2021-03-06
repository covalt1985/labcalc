export const homa = () => {
  const inputs = document.getElementsByClassName('homa');
  return ((inputs[0].value * inputs[1].value) / 405).toFixed(1);
};

export const caCor = () => {
  const inputs = document.getElementsByClassName('caCor');
  const leftInput = inputs[0].value;
  const rightInput = inputs[1].value;

  if (leftInput > 0 && rightInput > 0)
    return (0.08 * (40 - rightInput) + +leftInput).toFixed(2);
};

export const caCr = () => {
  const inputs = document.getElementsByClassName('caCr');
  return Math.floor((inputs[0].value * 1000) / inputs[1].value);
};

export const prl = () => {
  const inputs = document.getElementsByClassName('prl');
  return Math.round((100 * (inputs[1].value * 2)) / inputs[0].value);
};

export const testPicker = {
  homa: homa,
  caCor: caCor,
  caCr: caCr,
  prl: prl,
};

export const setPlaceholder = (test, counter) => {
  //left or right input?
  const condition = counter === 0;
  const placeholders = {
    homa: condition ? 'Glukoza mg/dl' : 'Insulina uIU/ml',
    caCor: condition ? 'Wapń mg/dl' : 'Albumina g/l',
    caCr: condition ? 'Wapń w moczu mg/dl' : 'Kreat. w moczu mg/dl',
    prl: condition ? 'Prolaktyna' : 'Prolaktyna po precypitacji',
  };
  return placeholders[test];
};

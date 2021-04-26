export const homa = () => {
  const inputs = document.getElementsByClassName('homa');
  return ((inputs[0].value * inputs[1].value) / 405).toFixed(1);
};
export const caCor = () => {
  const inputs = document.getElementsByClassName('caCor');
  return (0.08 * (40 - inputs[1].value) + +inputs[0].value).toFixed(2);
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
  const condition = counter === 0;
  const placeholders = {
    homa: condition ? 'Glukoza mg/dl' : 'Insulina uIU/ml',
    caCor: condition ? 'Wapń mg/dl' : 'Albumina g/l',
    caCr: condition ? 'Wapń w moczu mg/dl' : 'Kreat. w moczu mg/dl',
    prl: condition ? 'Prolaktyna' : 'Prolaktyna po precypitacji',
  };
  return placeholders[test];
};

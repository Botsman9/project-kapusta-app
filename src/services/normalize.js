const normalizeName = name =>
  name
    .split(' ')
    .map(word => {
      const firstUpCaseLetter = word.charAt(0).toUpperCase();
      const anoterLetter = word.substring(1);
      return `${firstUpCaseLetter}${anoterLetter}`;
    })
    .join(' ');

const dateNow = () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  const today = year + '-' + month + '-' + day;
  return today;
};

const normalizeDateRender = date => date.split('-').reverse().join('.');

const normalizeDateApi = date => new Date(date).toISOString().split('T')[0];

export { normalizeName, dateNow, normalizeDateApi, normalizeDateRender };

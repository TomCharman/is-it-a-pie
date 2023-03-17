const BASE = '/data';

export const getConfig = async () => {
  const configJson = await fetch(`${BASE}/config.json`);
  const config = await configJson.json();
  return config;
};

export const getRound = async (round: number) => {
  const roundJson = await fetch(`${BASE}/rounds/${round}/config.json`);
  return roundJson.json();
};

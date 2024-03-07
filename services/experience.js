import { ABSOLUTE_PATH } from '../constants';

export async function getExperience() {
  try {
    const data = await fetch(`${ABSOLUTE_PATH}/api/experience`);
    const json = await data.json();
    return json;
  } catch (err) {
    console.error('ERROR', err);
    return {
      data: [],
    };
  }
}

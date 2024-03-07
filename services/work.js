import { ABSOLUTE_PATH } from '../constants';

export async function getWork() {
  try {
    const data = await fetch(`${ABSOLUTE_PATH}/api/work`);
    const json = await data.json();
    return json;
  } catch (err) {
    console.error('ERROR', err);
    return {
      data: [],
    };
  }
}

import { ABSOLUTE_PATH } from '../constants';

export async function getSkills() {
  const data = await fetch(`${ABSOLUTE_PATH}/api/skills`);
  const json = await data.json();
  return json;
}

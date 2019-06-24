import { fetchData } from 'common';
import endpoint from 'configs/endpoints';

export const getLectureMaterialByIids = async (iids) => {
  return await fetchData(endpoint.learningMaterial.getByIids, { iids });
};

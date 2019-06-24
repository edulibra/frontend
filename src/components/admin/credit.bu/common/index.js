export const syllabusContentWidth = 480;

export const getConfigByValueFromContext = (lectureMaterialTypes, value) => {
  lectureMaterialTypes = lectureMaterialTypes || [];
  const list = Object.values(lectureMaterialTypes);
  for (let i = 0; i < list.length; i++) {
    if (list[i].value === value) {
      return list[i];
    }
  }
  return {};
};

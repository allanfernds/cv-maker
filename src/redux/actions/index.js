// ACTIONS TYPES
export const SAVE_PERSONAL_INFO = 'SAVE_PERSONAL_INFO';

export const savePersonalInfo = (info) => ({
  type: SAVE_PERSONAL_INFO,
  info,
})

export const SAVE_EDUCATIONAL_INFO = 'SAVE_EDUCATIONAL_INFO';

export const saveEducationalInfo = (info) => ({
  type: SAVE_EDUCATIONAL_INFO,
  info,
})
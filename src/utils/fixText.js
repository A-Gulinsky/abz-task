
// this function checks how long the text in the user card

export const fixText = (text) => {
  return text.length > 26 ? `${text.slice(0,26)}...` : text
}
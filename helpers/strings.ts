export const camelCaseToText = (text: string) => text
    .replace(/([a-z])([A-Z])/g, '$1 $2')  // Add a space between lowercase and uppercase letters
    .toLowerCase();
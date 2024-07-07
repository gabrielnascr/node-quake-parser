import fs from "fs";

export const readFile = (filePath: string): string => {
  return fs.readFileSync(filePath, "utf8");
};

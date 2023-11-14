import fs from "fs";

const uploadImage = async (val: File, val2: string): Promise<string> => {
  let file = val;
  const uniqueSuffix: string =
    Date.now() + "-" + Math.round(Math.random() * 1e9);
  const fileName = `public/assets/image/${val2}/${uniqueSuffix}.jpeg`;
  const originalFileName = `${uniqueSuffix}.jpeg`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(fileName, buffer);
  return originalFileName;
};

export default uploadImage;

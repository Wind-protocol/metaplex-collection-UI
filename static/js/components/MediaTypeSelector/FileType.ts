export enum FileType {
  AUDIO,
  VIDEO,
  IMAGE,
  VR,
  HTML,
  CSV,
}

export const FiletypeAcceptMap = {
  [FileType.HTML]: "HTML",
  [FileType.IMAGE]: ".png,.jpg,.svg,.gif",
  [FileType.VIDEO]: ".mp4",
  [FileType.VR]: ".glb",
  [FileType.AUDIO]: ".mp3",
  [FileType.CSV]: ".csv",
};

export interface ISlice {
  id: string;
  contentId: string;
  markdown: string;
  text: string;
  order: number;
}
export interface IContent {
  id: string;
  slug: string;
  name: string;
  slices: ISlice[];
}

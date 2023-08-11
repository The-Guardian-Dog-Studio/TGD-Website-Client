export interface FactsheetContent {
  text: string;
  url?: string;
}

export interface FactsheetBase {
  title: string;
  content: FactsheetContent[];
}

export type Factsheet = {
  title: string;
  content: FactsheetBase[];
};

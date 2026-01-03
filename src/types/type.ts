export interface Note {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  pinned: boolean;
  colors?: string;
  createdAt: string;
  updatedAt?: string;
  archived?: boolean;
}

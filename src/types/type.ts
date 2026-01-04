export interface Note {
  id: string;
  title: string;
  excerpt: string;
  tags: Tag[];
  pinned: boolean;
  color: string;
  createdAt: string;
  updatedAt?: string;
  archived?: boolean;
}

interface Tag {
  name: string;
  color: string;
}

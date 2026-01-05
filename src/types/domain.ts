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

export interface Tag {
  name: string;
  color: string;
}

export interface Category {
  id: string;
  title: string;
  color: string;
}

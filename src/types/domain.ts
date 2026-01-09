export interface Note {
  id: string;
  title: string;
  excerpt: string;
  tags: Tag[];
  pinned: boolean;
  createdAt: string;
  updatedAt?: string;
  archived: boolean;
  categoryId: string;
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
export type CreateCategoryPayload = Pick<Category, 'title'>;

export type CreateNotePayload = Pick<
  Note,
  'title' | 'excerpt' | 'tags' | 'categoryId'
>;

export type UpdateNotePayload = Pick<Note, 'id' | 'title' | 'excerpt' | 'tags'>;

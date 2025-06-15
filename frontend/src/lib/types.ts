export type Folder = {
  id: number;
  name: string;
  description: string;
  provider_folder_id: string;
};

export type Email = {
  id: string;
  threadId: string;
  from: string;
  subject: string;
  date: string;
  body: string;
};

export type Folder = {
  id: number;
  user_id: string;
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

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export type Suggestion = {
  name: string;
  email: string;
  suggestionType: string;
  message: string;
};

export type Contact = {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
};

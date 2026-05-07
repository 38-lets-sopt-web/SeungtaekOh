export interface UserSummary {
  id: number;
  name: string;
  part: string;
}

export interface UserDetail extends UserSummary {
  loginId: string;
  email: string;
  age?: number;
}

export const getUserList = (data: unknown) => {
  if (Array.isArray(data)) {
    return data as UserSummary[];
  }

  if (data && typeof data === "object") {
    const { users, members, content } = data as {
      users?: unknown;
      members?: unknown;
      content?: unknown;
    };

    if (Array.isArray(users)) {
      return users as UserSummary[];
    }

    if (Array.isArray(members)) {
      return members as UserSummary[];
    }

    if (Array.isArray(content)) {
      return content as UserSummary[];
    }
  }

  return [];
};

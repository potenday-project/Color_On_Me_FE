type DefaultAttributes = {
  name?: string;
  email: string;
  phone_number: string;
};

type CustomAttributes = {
  "custom:customAttrs": string;
};

type ParsedCustomAttributes = {
  job?: string;
  company?: string;
  field?: string;
};

export interface User extends DefaultAttributes, CustomAttributes {}

export interface ParsedUser extends DefaultAttributes, ParsedCustomAttributes {}

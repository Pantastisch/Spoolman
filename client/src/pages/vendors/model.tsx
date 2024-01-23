export interface IVendor {
  id: number;
  registered: string;
  name: string;
  comment?: string;
  extra: { [key: string]: string };
}

// IVendorParsedExtras is the same as IVendor, but with the extra field parsed into its real types
export type IVendorParsedExtras = Omit<IVendor, "extra"> & { extra?: { [key: string]: unknown } };

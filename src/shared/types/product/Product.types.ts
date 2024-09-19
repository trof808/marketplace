
type ProductProperty = {
  title: string;
  value: string;
}

export type ProductPrice = {
  amount: number;
  currency: string;
}

export type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: ProductPrice;
  categoryId: number;
  availableCount: number;
  isFavourite: boolean;
  properties: ProductProperty[]
}

export interface MenuItem {
  id: number;
  alt: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

export interface MenuItemState {
  selectedItem: MenuItem | null;
  items: MenuItem[];
} 
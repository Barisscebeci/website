import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';

import { MenuItem } from '../models/MenuItem';

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    image: img1,
    alt: 'Katık Döner',
    title: 'Katık Döner',
    price: '120 ₺',
    description: 'Özel soslu, bol malzemeli'
  },
  {
    id: 2,
    image: img2,
    alt: 'Burger',
    title: 'Özel Burger',
    price: '150 ₺',
    description: 'El yapımı köfte, özel sos'
  },
  {
    id: 3,
    image: img3,
    alt: 'Karışık Döner',
    title: 'Karışık Döner',
    price: '140 ₺',
    description: 'Tavuk ve et karışık'
  },
  {
    id: 4,
    image: img4,
    alt: 'Mega Burger',
    title: 'Mega Burger',
    price: '180 ₺',
    description: 'Çift katlı özel burger'
  }
]; 
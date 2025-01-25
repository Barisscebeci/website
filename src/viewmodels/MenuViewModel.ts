import { useState, useCallback } from 'react';
import { MenuItem, MenuItemState } from '../models/MenuItem';

export const useMenuViewModel = () => {
  const [state, setState] = useState<MenuItemState>({
    selectedItem: null,
    items: []
  });

  const setMenuItems = useCallback((items: MenuItem[]) => {
    setState(prev => ({ ...prev, items }));
  }, []);

  const selectItem = useCallback((item: MenuItem | null) => {
    setState(prev => ({ ...prev, selectedItem: item }));
  }, []);

  return {
    state,
    setMenuItems,
    selectItem
  };
}; 
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRyppUSoUX9eElaIjjlwpnbeI2v2_9GJ0HEVgocpzGbtV-eCH_1ZzzI424XYvFIXZVqgBHmyOMUmF_k/pub?output=csv';

// Backup categories, though we will dynamically generate them later
export const CATEGORIES = ['Appetizer', 'Main Course', 'Dessert', 'Beverage', 'Side', 'Mains'];

export function useMenuData() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Papa.parse(GOOGLE_SHEET_URL, {
      download: true,
      header: true,
      complete: (results) => {
        const items = results.data
          .filter(row => row.name && row.name.trim() !== '')
          .map((row, i) => ({
            id: row.id || i.toString(),
            name: row.name,
            price: Number(row.price) || 0,
            category: row.category || 'Mains',
            desc: row.desc || '',
            img: row.img || '',
          }));
        setMenuItems(items);
        setLoading(false);
      },
      error: (err) => {
        console.error('Failed to parse Google Sheet CSV:', err);
        setError(err.message);
        setLoading(false);
      }
    });
  }, []);

  return { menuItems, loading, error };
}

// These are functionally disabled since the Google Sheet is our read-only DB.
// They are exported so old imports don't break the app compilation.
export function addMenuItem() { return []; }
export function updateMenuItem() { return []; }
export function deleteMenuItem() { return []; }
export function getMenuItems() { return []; }

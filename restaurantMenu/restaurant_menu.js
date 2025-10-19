const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

/**
 * Genereert een HTML-string met alle ontbijtmenu-items.
 *
 * De functie gebruikt Array.map() om elk item in de 'breakfastMenu' array
 * om te zetten naar een <p>-element met het itemnummer en de naam.
 * Daarna worden alle elementen samengevoegd tot één HTML-string met join('').
 *
 * @constant
 * @type {string}
 * @example
 * const breakfastMenu = ['Pancakes', 'Waffles', 'Omelette'];
 * const breakfastMenuItemsHTML = breakfastMenu.map((item, index) =>
 *   `<p>Item ${index + 1}: ${item}</p>`
 * ).join('');
 * 
 * // Resultaat:
 * // "<p>Item 1: Pancakes</p><p>Item 2: Waffles</p><p>Item 3: Omelette</p>"
 */
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

 let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
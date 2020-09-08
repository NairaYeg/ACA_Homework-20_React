/**
 *The function adds an item in localStorage. As a parameter, accepts two arguments, the first argument  should be string, the second argument can be any kind of type.
 * @param {string}-localStorage property key
 * @param {*}-localStorage property value
 * @returns {*}-property value
 */

export function addItemToLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value)); //@TODO add try catch 
      return value;
    }catch (error){
      throw new Error ("Not possible add item in localStorage")
    }
    
  }
  
  
  /**
   *The function gets the item from localStorage by key. As a parameter accepts one  argument- property key.
   * @param {string}-localStorage property key
   * @returns {object}-local storage property value
   */
  
  export function getItemFromLocalStorage(key){
    try {
      return JSON.parse(localStorage.getItem(`${key}`));
    } catch (error) {
      throw new Error ("Not possible get  item  from localStorage")
    }
  }
  
  
  /**
   *The function removes the item from localStorage by key. As a parameter accepts one argument- property key, which will be deleted.
   * @param {string}-localStorage property key
   * @returns {string}-localStorage property key
   */
  
  export function removeItemFromLocalStorage(key){
    try {
      localStorage.removeItem(`${key}`);
      return key;
    } catch (error) {
      throw new Error ("Not possible  delete   item  from localStorage")
    }
  }
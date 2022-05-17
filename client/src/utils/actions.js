// With these three actions, we're defining how three parts of our state will be maintained and updated.

// end goal here is to store the data retrieved for products by Apollo in this global state. This way, we can add offline capabilities later and persist our product data!
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// works a lot like UPDATE_PRODUCTS in that we want to take the list of categories retrieved from the server by Apollo and store it in this global state.
// Again, this will allow us to easily add offline capabilities at a future point in this project.
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// is sort of the connecting piece of data for the previous two actions we created

export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

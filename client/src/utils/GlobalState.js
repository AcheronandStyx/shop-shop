import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  // we instantiate our initial global state with the useProductReducer()
  // Because that wraps it around the useReducer() Hook from React, every time we run this useProductReducer() we get state and dispatch from the return
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
  // ...props is needed becasue it allows us to use props.children.  As the <StoreProvider> component wraps around the rest of the components they are all its children and we need props.children to access them.
};
// Customer react hook.  When we execute this function from within a component, we will receive the [state, dispatch] data our StoreProvider provider manages for us

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

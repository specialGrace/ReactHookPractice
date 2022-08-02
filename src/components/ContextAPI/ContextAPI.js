import React from "react";

// 1. step
// create an instance of a context with a default
const UserContext = React.createContext('John');
const OrderContext = React.createContext();
// We automatically have access to a provider and consumer object on the creation of a context
const Provider = UserContext.Provider;
const Consumer = UserContext.Consumer

export {Provider, Consumer}
export default UserContext
/** @format */

import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { Provider } from "react-redux";
import { store } from "./mainGlobal/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store)

const App = () => {
  return (
    <div>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={mainRouter} />
      </PersistGate>
      </Provider>
    </div>
  );
};

export default App;

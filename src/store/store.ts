import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

// import thunk from 'redux-thunk';

export type RootState = ReturnType<typeof rootReducer>

type ExtendedPersistCofig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistCofig= {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [process.env.NODE_ENV !== "production" && logger,sagaMiddleware]
.filter((middleware): middleware is Middleware => Boolean(middleware));




const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

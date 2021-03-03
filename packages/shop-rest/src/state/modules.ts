const moduleReducer = require.context('.', true, /index.ts$/)

const reducers = {}
let sagas = []
moduleReducer.keys().forEach(file => {
    if (file === './index.ts') return;
    const module = moduleReducer(file)
    if (module.reducer) {
        reducers[module.namespace] = module.reducer
    }
    if (module.saga) {
        sagas = [...sagas, module.saga]
    }
});

export { reducers, sagas }

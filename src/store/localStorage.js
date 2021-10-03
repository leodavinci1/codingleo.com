export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('_dxco-session_');
    if (serializedState === null) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState);
    /* Não reutilizar estados salvos a mais de 2 horas */
    const sessionTime = 2 * 60 * 60 * 1000;
    if (Date.now() - parsedState.time > sessionTime) {
      return undefined;
    }
    return parsedState.value;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({ value: state, time: Date.now() });
    localStorage.setItem('_dxco-session_', serializedState);
  } catch {
    // ignore write errors
  }
};

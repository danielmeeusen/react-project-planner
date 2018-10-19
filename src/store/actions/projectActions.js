export const createProject = project => {
  return (dispatch, getState) => {
    // made async call to db

    //dispatch item
    dispatch({ type: 'CREATE_PROJECT', project });
  };
};

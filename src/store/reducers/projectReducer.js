const initState = {
  projects: [
    { id: '1', title: 'title 1', content: 'content for project 1' },
    { id: '2', title: 'title 2', content: 'content for project 2' },
    { id: '3', title: 'title 3', content: 'content for project 3' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
  }
  return state;
};

export default projectReducer;

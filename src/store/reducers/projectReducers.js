const initState = {
    projects:[
        {id: 1, title: 'learn react', content: 'basic react'},
        {id: 2, title: 'learn angular', content: 'basic angular'},
        {id: 3, title: 'learn nodejs', content: 'basic nodejs'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('alo', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }
}
export default projectReducer
//tous les reducers prennent en parametre le state courrant et une action
//attention le state n'est pas le state de l'app mais seulement celui dont le reducer est responsable
//on ne peut pas renvoyer undefined, (au boot aucn book n'est selectionne)
export default function(state = null, action) {
    switch(action.type){
        case 'BOOK_SELECTED': return action.payload;
    }
    return state;

}
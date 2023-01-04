// for product component
const titleCuter=(title)=>{
    const splited=title.split(" ");
    const newTitle=splited[0] +" "+ splited[1] +" "+splited[2] ;
    return newTitle;
}

// for details page
const descriptionCuter=(description)=>{
    const splited=description.split(" ");
    const slpicedDescription=splited.splice(0,22);
    const newDescription=slpicedDescription.join(" ")
    return newDescription;
}

const detailTitleCuter=(title)=>{
    const splited=title.split(" ");
    const newTitle=splited[0] +" "+ splited[1] +" "+splited[2]+" "+splited[3] ;
    return newTitle;
}
const cartProductDescripCuter=(description)=>{
    const splited=description.split(" ");
    return splited.splice(0 ,8).join(" ")
}

// isincart
const isInCart=(state , id)=>{
    const result=!!state.addedItems.find(item => item.id===id);
    return result
}

//quntitiyCounter
const quntitiyCounter=(state , id)=>{
    const result=state.addedItems.findIndex(item => item.id===id);
    if(result === -1){
        return false;
    }else{
        return state.addedItems[result].quntity;
    }
}


export {titleCuter, descriptionCuter, detailTitleCuter, isInCart, quntitiyCounter , cartProductDescripCuter};
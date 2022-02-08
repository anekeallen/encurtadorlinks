

export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}


//Salvar Links no localstorege

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  // console.log(linksStored);

  const hasLink = linksStored.some( (link) => link.id === newLink.id );

  if(hasLink){
    // console.log("ja tem esse link");
    return;
  }

  linksStored.push(newLink);

  await localStorage.setItem(key, JSON.stringify(linksStored));

  // console.log("links salvos");
  
}

//Deletar link do store

export function deleteLink(links, id) {
  let myLinks = links.filter( (item) => {
    return (item.id !== id);
  })

  localStorage.setItem('@encurtadoLink', JSON.stringify(myLinks));

  return myLinks;
}
export default async function getHousesData(url) {
  const housesData = await fetch(url)
    .then(data => data.json())
    .then(housesData => housesData);
    
    return housesData;
}